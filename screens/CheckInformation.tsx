import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CaretLeft } from 'phosphor-react-native';
import {
    KeyboardAvoidingView,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { ProfileParamList } from '../stack/ProfileStack';
import PaymentBill from '../components/PaymentBill';
import { useEffect, useState } from 'react';
import { createTransfersOnDB, withdrawMoney } from '../services/transaction';
import { getRecipienOnDB } from '../services/recipien';
import { Transfers } from '../services/omise';
import { createNotification } from '../services/notification';

interface myRecipien {
    recipienId: string;
    firstname:string;
    lastname:string;
}

const CheckInformation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'CheckInformation'>>();
    const [myRecipien, setMyRecipien] = useState<myRecipien>({
        recipienId: '',
        firstname:'',
        lastname:'',

    });
    const [recipienId, setRecipienId] = useState('');
    const handleWithdrawmoney = async () => {
        const body = {
            coins: params.coins,
            withdrawmoney: params.withdrawMoney,
            recipienId: myRecipien.recipienId
        };
        const body2 = {
            withdrawmoney: params.withdrawMoney,
            recipienId: myRecipien.recipienId
        };
        await withdrawMoney(params.email, body);
        const data: any = await Transfers(body2);
        if (data.message === 'created') {
            const body3 = {
                transferId: data.data.id,
                amount: params.withdrawMoney,
                email: params.email
            };
            const res: any = await createTransfersOnDB(body3);
            if (res.message === 'created') {
                await createNoti()
                navigation.navigate('WithdrawalReceipt',{_id: params._id,
                    firstname: params.firstname,
                    lastname: params.lastname,
                    email: params.email,
                    withdrawMoney: params.withdrawMoney,
                    coins: params.coins,
                    phoneNumber: params.phoneNumber})
            }
        }
    };

    const getDataRecipien = async () => {
        const list: any = await getRecipienOnDB(params._id);
        console.log(list);
        await setMyRecipien(list.myData[0]);
    };

    const createNoti = async () => {
        const Notification : any = await createNotification({
            userId: params._id,
            Parking_ownerId:params._id,
            Topic: "Withdraw Money",
            Booking: false,
            From: myRecipien.firstname+' '+myRecipien.lastname,
            Parking_name:"",
            Coins:params.withdrawMoney
        });
    };

    useEffect(() => {
        getDataRecipien();
    }, []);

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <TouchableOpacity style={styles.headerContent} onPress={() => navigation.goBack()}>
                <CaretLeft size={22} color="#141414" />
            </TouchableOpacity>
            <View style={styles.line}></View>
            <View style={styles.mainContainer}>
                <PaymentBill
                    userId={params._id}
                    firstname={params.firstname}
                    lastname={params.lastname}
                    phoneNumber={params.phoneNumber}></PaymentBill>
            </View>
            <View style={styles.totalPrice}>
                <View style={styles.textRow}>
                    <Text style={styles.bodytext}>amount:</Text>
                    <Text style={styles.textleft}>{params.withdrawMoney} THB</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.bodytext}>fee:</Text>
                    <Text style={styles.textleft}>30 THB</Text>
                </View>
            </View>
            <View style={styles.buttonContrainer}>
                <TouchableOpacity style={styles.btnConfirm} onPress={handleWithdrawmoney}>
                    <Text style={styles.textConfirm}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default CheckInformation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    headerContent: {
        paddingHorizontal: 25,
        marginTop: 20
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#10152F',
        paddingLeft: 90
    },
    line: {
        borderBottomColor: '#EEF0FF',
        borderBottomWidth: 1,
        width: '150%',
        paddingTop: 50
    },
    mainContainer: {
        paddingVertical: 45,
        paddingHorizontal: 25
    },
    totalPrice: {
        paddingHorizontal: 25,
        paddingVertical: 14,
        backgroundColor: '#CED2EA'
    },
    textRow: {
        flexDirection: 'row'
    },
    bodytext: {
        flex: 9,
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 5
    },
    textleft: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 5
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 15,
        elevation: 2,
        marginTop: 80,
        width: '100%',
        height: 55
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'RedHatText',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FEFA94',
        top: 15,
        letterSpacing: 0.64
    },
    buttonContrainer: {
        paddingHorizontal: 25,
        paddingTop: 40
    }
});

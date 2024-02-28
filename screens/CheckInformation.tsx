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
import { withdrawMoney } from '../services/transaction';
import { getRecipienOnDB } from '../services/recipien';

interface myRecipien {
    recipienId: string;
}

const CheckInformation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'CheckInformation'>>();
    const [myRecipien, setMyRecipien] = useState<myRecipien>({
        recipienId: '',
    });
    const [recipienId, setRecipienId] = useState("");
    const handleWithdrawmoney = async () => {
        const body = {
            coins: params.coins,
            withdrawmoney: params.withdrawMoney,
            recipienId:myRecipien.recipienId
        };
        const transfer:any = await withdrawMoney(params.email, body);
        console.log(transfer);
    };

    const getDataRecipien = async () => {
        const list: any = await getRecipienOnDB(params._id);
        console.log(list);
        await setMyRecipien(list.myData[0]);
    };

    useEffect(() => {
        getDataRecipien()
    }, [])
    
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
                    phoneNumber={params.phoneNumber}
                    recipienId={value => {
                        setRecipienId(value);
                    }}></PaymentBill>
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

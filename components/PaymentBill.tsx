import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowCircleDown, CaretLeft} from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import { SafeAreaView } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { getRecipienOnDB } from "../services/recipien";

interface PaymentBillProps {
    userId:string;
    firstname:string;
    lastname:string;
    phoneNumber:string;
}

interface myRecipien {
    recipienId: string;
    firstname: string;
    lastname: string;
    bank: string;
    accountnumber: string;
}

const PaymentBill = (props:PaymentBillProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [myRecipien, setMyRecipien] = useState<myRecipien>({
        recipienId: '',
        firstname: '',
        lastname: '',
        bank: '',
        accountnumber: ''
    });

    const getDataRecipien = async () => {
        const list: any = await getRecipienOnDB(props.userId);
        console.log(list);
        await setMyRecipien(list.myData[0]);
    };
    useEffect(() => {
        getDataRecipien();
    }, [])
    
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.logo}>
                    <View style={styles.circle} />
                    <Image source={require('../assets/LogoPark_DarkMode.png')} style={{width: 50, height: 50}}  />
                </View>
                <View style={styles.spaceTextSender}>
                    <Text style={styles.headerText}>{props.firstname} {props.lastname}</Text>
                    <Text style={styles.bodyText}>{props.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}</Text>
                </View>
            </View>
            <View style={styles.linePosition}>
                <View style={styles.lineContainer}>
                    <View style={styles.VerticalLine} />
                </View>
                <View style={styles.arrowCirclePosition}>
                    <ArrowCircleDown size={32} color="#239D60" />
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.VerticalLine} />
                </View>
            </View>
            <View style={styles.recipientRow}>
                <View style={styles.logo}>
                    <Image source={require('../assets/Kasikorn.png')} style={{width: 90, height: 90}}  />
                </View>
                <View style={styles.spaceText}>
                    <Text style={styles.headerText}>{myRecipien.firstname} {myRecipien.lastname}</Text>
                    <Text style={styles.bodyText}>{myRecipien.bank}</Text>
                    <Text style={styles.bodyText}>XXX-X-X{myRecipien.accountnumber.slice(5, 9)}-X</Text>
                </View>
            </View>
        </View>
    );
}
    
export default PaymentBill;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#10152F',
        position: 'absolute',
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#10152F',
    },
    spaceTextSender: {
        marginLeft: 60,
    },
    bodyText: {
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#262D57',
        marginTop: 10,
    },
    linePosition: {
        paddingHorizontal: 45,
        paddingVertical: 12,
        paddingTop: 25
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    VerticalLine: {
        borderBottomColor: '#239D60',
        borderBottomWidth: 20,
        width: '1%', 
        backgroundColor: '#262D57',
    },
    arrowCirclePosition: {
        marginLeft: -15, 
    },
    recipientRow: {
        flexDirection: 'row',
        alignItems: 'center',  
    },
    spaceText: {
        marginLeft: 40,
    },
});
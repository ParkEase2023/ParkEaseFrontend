import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowCircleDown, Bank, CaretLeft } from "phosphor-react-native";
import { StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import { useEffect, useState } from "react";
import { getRecipienOnDB } from "../services/recipien";


interface PaymentBillProps {
    userId: string;
    firstname: string;
    lastname: string;
    phoneNumber: string;
}

interface myRecipien {
    recipienId: string;
    firstname: string;
    lastname: string;
    bank: string;
    accountnumber: string;
}

const PaymentBill = (props: PaymentBillProps) => {
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

    const bankLogos: { [key: string]: any } = {
        KTB: require('../assets/Bank_big/Krung_Thai_Bank_logo1.png'),
        SCB: require('../assets/Bank_big/SCB.png'),
        BBL: require('../assets/Bank_big/BBL.png'),
        KBANK: require('../assets/Bank_big/KBANK.png'),
        TISCO: require('../assets/Bank_big/TISCO.png'),
        RBS: require('../assets/Bank_big/RBC1.png'),
        JPM: require('../assets/Bank_big/J.P.Morgan.png'),
        MUFG: require('../assets/Bank_big/MUFG.png'),
        TTB: require('../assets/Bank_big/TTB.png'),
        CITI: require('../assets/Bank_big/CITI.png'),
        SMBC: require('../assets/Bank_big/SMBC.png'),
        SC: require('../assets/Bank_big/SCBT.png'),
        CIMB: require('../assets/Bank_big/CIMBT.png'),
        UOB: require('../assets/Bank_big/UOBT.png'),
        BAY: require('../assets/Bank_big/BAY.png'),
        MEGA: require('../assets/Bank_big/megainternationalcommercial1.png'),
        BOA: require('../assets/Bank_big/bank-of-america-logo1.png'),
        CACIB: require('../assets/Bank_big/creditagricole.png'),
        GSB: require('../assets/Bank_big/GSB.png'),
        HSBC: require('../assets/Bank_big/HSBC.png'),
        DB: require('../assets/Bank_big/DBBK.png'),
        GHB: require('../assets/Bank_big/GHB.png'),
        BAAC: require('../assets/Bank_big/BAAC.png'),
        MB: require('../assets/Bank_big/MUFG.png'),
        BNP: require('../assets/Bank_big/bnp.png'),
        IBANK: require('../assets/Bank_big/ibank.png'), 
        KK: require('../assets/Bank_big/kkbank.png'),
        ICBC: require('../assets/Bank_big/ICBC.png'),
        TCRB: require('../assets/Bank_big/TCRB.png'),
        LHB: require('../assets/Bank_big/LHBANK.png'),
    };

    const recipientLogo = bankLogos[myRecipien.bank];
    return (
        <View style={styles.container}>

            <View style={styles.senderRow}>
                <View style={styles.logo}>
                    <View style={styles.circle} />
                    <Image source={require('../assets/LogoParkEase1.png')} style={{ width: 50, height: 50 }} />
                </View>
                <View style={styles.spaceTextSender}>
                    <Text style={styles.headerText}>{props.firstname} {props.lastname}</Text>
                    <Text style={styles.phoneNumText1}>{props.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3')}</Text>
                </View>
            </View>

            <View style={styles.linePosition}>
                <View style={styles.lineContainer}>
                    <View style={styles.VerticalLine} />
                </View>
                <View style={styles.arrowCirclePosition}>
                    <ArrowCircleDown weight="fill" size={26} color="#239D60" />
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.VerticalLine} />
                </View>
            </View>

            <View style={styles.recipientRow}>
                <View style={styles.logo}>
                    {recipientLogo && <Image source={recipientLogo} style={{ width: 85, height: 85 }} />}
                </View>
                <View style={styles.spaceTextRecipient}>
                    <Text style={styles.headerText}>{myRecipien.firstname} {myRecipien.lastname}</Text>
                    <Text style={styles.bankText}>{myRecipien.bank}</Text>
                    <Text style={styles.phoneNumText2}>XXX-X-X{myRecipien.accountnumber.slice(5, 9)}-X</Text>
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
    senderRow: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        position: 'absolute',
        width: 85,
        height: 85,
        borderRadius: 100,
        backgroundColor: '#10152F'
    },
    spaceTextSender: {
        marginLeft: 45,
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
    },
    phoneNumText1: {
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#565E8B',
        marginTop: 12,
    },
    
    linePosition: {
        paddingLeft: 42,
        paddingTop: 20,
        paddingBottom: 3,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    VerticalLine: {
        borderBottomColor: '#239D60',
        borderBottomWidth: 20,
        width: 2,
    },
    arrowCirclePosition: {
        right: 12,
    },

    recipientRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spaceTextRecipient: {
        marginLeft: 30,
    },
    bankText: {
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#262D57',
        marginTop: 8,
    },
    phoneNumText2: {
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#565E8B',
        marginTop: 8,
    },
});
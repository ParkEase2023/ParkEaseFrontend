import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ProfileParamList } from '../stack/ProfileStack';
import { Bank, CaretLeft, EnvelopeSimple, IdentificationCard } from 'phosphor-react-native';
import { destroyRecipien, getRecipienOnDB } from '../services/recipien';

interface myRecipien {
    recipienId: string;
    firstname: string;
    lastname: string;
    email: string;
    taxId: string;
    bank: string;
    accountname: string;
    accountnumber: string;
}

const BankInformation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'BankInformation'>>();
    const handleConfirm = async () => {
        const destroy: any = await destroyRecipien({
            userId: params.userId,
            recipienId: myRecipien.recipienId
        });
        if (destroy.message === 'success') {
            navigation.navigate('BindAnAccount', { userId: params.userId });
        }
    };

    const [visible, setVisible] = useState(false);

    const [myRecipien, setMyRecipien] = useState<myRecipien>({
        recipienId: '',
        firstname: '',
        lastname: '',
        email: '',
        taxId: '',
        bank: '',
        accountname: '',
        accountnumber: ''
    });

    const getDataRecipien = async () => {
        const list: any = await getRecipienOnDB(params.userId);
        console.log(list);
        await setMyRecipien(list.myData[0]);
    };

    useEffect(() => {
        getDataRecipien();
    }, []);

    return (
        <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={20} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Bank Information</Text>
            </View>
            <View style={styles.line}></View>

            <View style={styles.mainContainer}>
                <Text style={styles.headerTextBody}>Payer’s Information</Text>
                <View style={styles.boxText}>
                    <Text style={styles.bodyText}>First Name:</Text>
                    <Text numberOfLines={1} style={styles.textLeft}>
                        {myRecipien.firstname}
                    </Text>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.bodyText}>Last Name:</Text>
                    <Text numberOfLines={1} style={styles.textLeft}>
                        {myRecipien.lastname}
                    </Text>
                </View>
                <View style={styles.boxText}>
                    <EnvelopeSimple size={24} color="#565E8B" />
                    <View style={styles.spaceInLine}></View>
                    <Text style={styles.bodyText}>Email:</Text>
                    <Text numberOfLines={1} style={styles.textLeftEmail_TaxID_Bank}>
                        {myRecipien.email}
                    </Text>
                </View>
                <View style={styles.boxText}>
                    <IdentificationCard size={24} color="#565E8B" />
                    <View style={styles.spaceInLine}></View>
                    <Text style={styles.bodyText}>Tax ID:</Text>
                    <Text numberOfLines={1} style={styles.textLeftEmail_TaxID_Bank}>
                        {myRecipien.taxId.replace(/(\d{1})(\d{4})(\d{5})(\d{3})/, '$1-$2-$3-$4')}
                    </Text>
                </View>
                    <Text style={styles.headerTextBody}>Bank Account</Text>
                <View style={styles.boxText}>
                    <Bank size={24} color="#565E8B" />
                    <Text style={styles.spaceInLine}></Text>
                    <Text style={styles.bodyText}>Bank:</Text>
                    {/* <Image
                            source={require('../assets/Kasikorn.png')}
                            style={{ width: 24, height: 24 }}
                        /> */}
                    {/* <Text style={styles.spaceInLine}></Text> */}
                    <Text style={styles.textLeftEmail_TaxID_Bank}>{myRecipien.bank}</Text>
                </View>
                <View style={styles.boxText}>
                    <Text style={styles.bodyText}>Account Name:</Text>
                    <Text numberOfLines={1} style={styles.textLeft}>
                        {myRecipien.accountname}
                    </Text>
                </View>

                <View style={styles.boxText}>
                    <Text style={styles.bodyText}>Account Number:</Text>
                    <Text numberOfLines={1} style={styles.textLeft}>
                        {myRecipien.accountnumber.slice(0, 3) +
                            '-' +
                            myRecipien.accountnumber[3] +
                            '-' +
                            myRecipien.accountnumber.slice(4)}
                    </Text>
                </View>
            </View>
            <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirm}>
                        <Text style={styles.textConfirm}>CHANGE ACCOUNT</Text>
                    </TouchableOpacity>
                </View>
        </ScrollView>
    );
};

export default BankInformation;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#EEF0FF'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12
    },
    headerText: {
        flex: 1,
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 16,
        color: '#10152F'
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    mainContainer: {
        flex: 8,
        paddingHorizontal: 25,
    },
    headerTextBody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingBottom: 25,
        marginTop: 35,
    },
    bodyText: {
        flex: 1.5,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#565E8B'
    },
    boxText: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingBottom: 20
    },
    iconPosition: {
        paddingRight: 10
    },
    textLeft: {
        flex: 1.5,
        fontFamily: 'RedHatText-Medium',
        fontSize: 16,
        color: '#10152F'
    },
    textLeftEmail_TaxID_Bank: {
        flex: 1.82,
        fontFamily: 'RedHatText-Medium',
        fontSize: 16,
        color: '#10152F'
    },
    spaceInLine: {
        width: 10
    },
    btnContainer: {
        flex: 1
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16,
        marginHorizontal: 25,
        alignItems: 'center'
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    },
});

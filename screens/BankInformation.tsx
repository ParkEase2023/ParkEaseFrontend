import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React, { useEffect, useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import { ProfileParamList } from '../stack/ProfileStack';
import { Bank, CaretLeft, EnvelopeSimple, IdentificationCard } from 'phosphor-react-native';
import { destroyRecipien, getRecipienOnDB } from '../services/recipien';
import Modal from 'react-native-modal';
import Good from '../assets/Good.png';

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
            userId:params.userId,
            recipienId:myRecipien.recipienId,
        })
        if(destroy.message === 'success')
        {
            navigation.navigate("BindAnAccount",{userId:params.userId})
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
                    <CaretLeft size={22} color="#10152F" />
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.headerText}>Bank Information</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View>
                <View style={styles.container}>
                    <View style={styles.bodytext}>
                        <Text style={styles.headerTextbody}>Payer’s Information</Text>
                    </View>
                    <View style={styles.boxText}>
                        <Text style={styles.bodytext}>First Name :</Text>
                        <Text style={styles.textleft}>{myRecipien.firstname}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <Text style={styles.bodytext}>Last Name :</Text>
                        <Text style={styles.textleft}>{myRecipien.lastname}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <EnvelopeSimple size={24} color="#565E8B" />
                        <View style={styles.spaceInLine}></View>
                        <Text style={styles.bodytext}>Email :</Text>
                        <Text style={styles.textleftEmailandID}>{myRecipien.email}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <IdentificationCard size={24} color="#565E8B" />
                        <View style={styles.spaceInLine}></View>
                        <Text style={styles.bodytext}>Tax ID :</Text>
                        <Text style={styles.textleftEmailandID}>
                            {myRecipien.taxId.replace(
                                /(\d{1})(\d{4})(\d{5})(\d{3})/,
                                '$1-$2-$3-$4'
                            )}
                        </Text>
                    </View>
                    <View style={styles.space}></View>
                    <View style={styles.bodytext}>
                        <Text style={styles.headerTextbody}>Bank Account</Text>
                    </View>
                    <View style={styles.boxText}>
                        <Bank size={24} color="#565E8B" />
                        <Text style={styles.spaceInLine}></Text>
                        <Text style={styles.bodytext}> Bank:</Text>
                        {/* <Image
                            source={require('../assets/Kasikorn.png')}
                            style={{ width: 24, height: 24 }}
                        /> */}
                        {/* <Text style={styles.spaceInLine}></Text> */}
                        <Text style={styles.textleft}>{myRecipien.bank}</Text>
                    </View>
                    <View style={styles.boxText}>
                        <Text style={styles.bodytext}>Account Name:</Text>
                        <Text style={styles.textleft}>{myRecipien.accountname}</Text>
                    </View>

                    <View style={styles.boxText}>
                        <Text style={styles.bodytext}>Account Number:</Text>
                        <Text style={styles.textleft}>
                            {myRecipien.accountnumber.slice(0, 3) +
                                '-' +
                                myRecipien.accountnumber[3] +
                                '-' +
                                myRecipien.accountnumber.slice(4)}
                        </Text>
                    </View>
                    <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirm}>
                        <Text style={styles.textConfirm}>Change Account</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <Modal isVisible={visible} backdropOpacity={0.9} backdropColor="#262D57">
                <View style={styles.modalContainer}>
                    <Image source={Good} style={styles.imageGood} />
                    <Text style={styles.modalText}>Finished!</Text>
                    <Text style={styles.modalText2}>Yahoo! You addcoin successfully.</Text>
                </View>
            </Modal> */}
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
        top: 40
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        lineHeight: 30,
        color: '#10152F'
    },
    line: {
        borderBottomColor: '#D9DBE9',
        borderBottomWidth: 1,
        top: 50
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container: {
        paddingVertical: 45,
        paddingHorizontal: 25
    },
    headerTextbody: {
        flex: 9,
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingTop: 20,
        paddingVertical: 5
    },
    boxText: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 15
    },
    iconPosition: {
        paddingRight: 10
    },
    textleft: {
        flex: 1.5,
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F'
    },
    bodytext: {
        flex: 1.5,
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#565E8B'
    },
    textleftEmailandID: {
        flex: 1.75,
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F'
    },
    space: {
        top: 20
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
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94',
        lineHeight: 55
    },
    spaceInLine: {
        width: 10
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        paddingHorizontal: 25,
        marginHorizontal: 35
    },
    imageGood: {
        marginTop: -115,
        marginBottom: 16
    },
    modalText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
        marginBottom: 16
    },
    modalText2: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57',
        textAlign: 'center',
        marginBottom: 30
    }
});

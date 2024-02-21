import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { ArrowLeft, CaretLeft, CoinVertical, Money } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProfileParamList } from '../stack/ProfileStack';
import { createdPromptPayQRCode } from '../services/omise';

const WithdrawMoney = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'AddCoin'>>();
    const [inputNumber, setInputNumber] = useState<number>(0);
    const handleButtonClick = () => {
        const newNumber = inputNumber + 100;

        setInputNumber(newNumber);
    };

    const handleButtonClick1 = () => {
        const newNumber = inputNumber + 200;
        setInputNumber(newNumber);
    };

    const handleButtonClick2 = () => {
        const newNumber = inputNumber + 500;
        setInputNumber(newNumber);
    };

    const handleButtonClick3 = () => {
        const newNumber = inputNumber + 1000;
        setInputNumber(newNumber);
    };

    // const handleAddCoin = async () => {
    //     const res: any = await createdPromptPayQRCode({
    //         amount: inputNumber,
    //         phonenumber: params.phoneNumber
    //     });
    //     if (res) {
    //         navigation.navigate('AddCoinQR', { qrCode: res.data, id: res.dataId });
    //     }
    // };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled">
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={22} color="#10152F" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Withdraw Money</Text>
                </View>
                <View style={styles.boxText}>
                    <View style={styles.rowTop}>
                        <View style={styles.textIcon}>
                            <CoinVertical size={24} weight="fill" color="#EEF0FF" />
                            <Text style={styles.textMain}>Remaining Balance</Text>
                        </View>
                        <Text style={styles.textRight}>coins</Text>
                    </View>
                </View>
                <View style={styles.mainContainer}>
                    <View style={[styles.textbox1]}>
                        <View style={styles.row}>
                            <Money size={26} />
                            <TextInput
                                style={styles.input}
                                placeholder="Enter a number"
                                keyboardType="numeric"
                                onChangeText={text => {
                                    const parsedNumber = parseInt(text.replace(/[^0-9]/g, ''), 10);
                                    setInputNumber(isNaN(parsedNumber) ? 0 : parsedNumber);
                                }}
                                value={inputNumber.toLocaleString('en-US')}
                            />
                            <Text style={styles.textright1}>THB</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.textleft}>Minimum balance: 100 THB</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity
                            onPress={handleButtonClick}
                            style={[styles.button, styles.color]}>
                            <Text style={styles.buttonText}>+100</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleButtonClick1}
                            style={[styles.button, styles.color]}>
                            <Text style={styles.buttonText}>+200</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleButtonClick2}
                            style={[styles.button, styles.color]}>
                            <Text style={styles.buttonText}>+500</Text>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={handleButtonClick3}
                            style={[styles.button, styles.color]}>
                            <Text style={styles.buttonText}>+1,000</Text>
                        </TouchableOpacity>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnConfirm} >
                            <Text style={styles.textConfirm}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default WithdrawMoney;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    mainContainer: {
        paddingHorizontal: 25,
        top: 124
    },
    main: {
        flexGrow: 1
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        top: 40
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#10152F',
        paddingLeft: 90
    },
    rowTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12,
        paddingBottom: 16
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 16
    },
    textIcon: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    boxText: {
        backgroundColor: '#565E8B',
        top: 50
    },
    textMain: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF'
    },
    textRight: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF'
    },
    textbox1: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        // padding: 11,
        height: 60
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    input: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
        width: 250,
        padding: 16
    },
    textright1: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
        paddingRight: 16
    },
    textleft: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#10152F',
        paddingTop: 10,
        paddingBottom: 25
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        buttom: 50
    },
    button: {
        padding: 18,
        paddingLeft: 18,
        paddingRight: 18,
        borderRadius: 23,
        paddingVertical: 6
    },
    buttonText: {
        color: 'black',
        textAlign: 'center'
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
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 15,
        elevation: 2,
        marginTop: 80,
        width: '100%',
        height: 55
    },
    color: {
        borderWidth: 2,
        borderColor: '#7F85B2'
    },
});

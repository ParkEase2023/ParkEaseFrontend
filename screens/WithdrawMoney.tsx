import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { CaretLeft, CoinVertical, Money } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';

const WithdrawMoney = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'WithdrawMoney'>>();
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

    const handleWithdrawMoney = () => {
        navigation.navigate('CheckInformation', {
            _id: params._id,
            firstname: params.firstname,
            lastname: params.lastname,
            email: params.email,
            withdrawMoney: inputNumber,
            coins: params.coins,
            phoneNumber: params.phoneNumber
        });
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled">
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={20} weight="bold" color="#10152F" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Withdraw Money</Text>
                </View>
                <View style={styles.rowTop}>
                    <View style={styles.iconText}>
                        <CoinVertical size={24} weight="fill" color="#EEF0FF" />
                        <Text style={styles.textMain}>Remaining Balance</Text>
                    </View>
                    <Text style={styles.textRight}>{params.coins} Coins</Text>
                </View>
                <Image source={require('../assets/withdrawMoney.png')} style={styles.image} />
                <View style={styles.mainContainer}>
                    <View style={styles.enterAmount}>
                        <View style={styles.itemLeft}>
                            <Money size={24} color="#565E8B" />
                            <TextInput
                                placeholder="Enter a number"
                                keyboardType="numeric"
                                style={styles.input}
                                onChangeText={text => {
                                    const parsedNumber = parseInt(text.replace(/[^0-9]/g, ''), 10);
                                    setInputNumber(isNaN(parsedNumber) ? 0 : parsedNumber);
                                }}
                                value={inputNumber.toLocaleString('en-US')}
                            />
                            <Text style={styles.textInputRight}>THB</Text>
                        </View>
                    </View>
                    <View>
                        <Text style={styles.description}>Flexible fee 30 THB</Text>
                    </View>

                    <View style={styles.btnContainer}>
                        <TouchableOpacity onPress={handleButtonClick} style={styles.btnAddMoney}>
                            <Text style={styles.buttonText}>+100</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleButtonClick1} style={styles.btnAddMoney}>
                            <Text style={styles.buttonText}>+200</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleButtonClick2} style={styles.btnAddMoney}>
                            <Text style={styles.buttonText}>+500</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={handleButtonClick3} style={styles.btnAddMoney}>
                            <Text style={styles.buttonText}>+1,000</Text>
                        </TouchableOpacity>
                    </View>

                    <TouchableOpacity style={styles.btnConfirm} onPress={handleWithdrawMoney}>
                        <Text style={styles.textConfirm}>CONFIRM</Text>
                    </TouchableOpacity>
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
    scrollViewContainer: {
        flexGrow: 1
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
    rowTop: {
        backgroundColor: '#565E8B',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12
    },
    iconText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textMain: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF',
        paddingLeft: 6
    },
    textRight: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF'
    },
    image: {
        width: '100%',
        top: 16
    },
    enterAmount: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginTop: 25
    },
    enterAmountActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginTop: 25,
        borderWidth: 2,
        borderColor: '#565E8B',
        elevation: 2
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    input: {
        flex: 1,
        padding: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#565E8B'
    },
    textInputRight: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57'
    },
    mainContainer: {
        paddingHorizontal: 25,
        paddingTop: 54
    },
    description: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#10152F',
        paddingTop: 12,
        paddingBottom: 25
    },
    btnContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnAddMoney: {
        paddingHorizontal: 18,
        borderRadius: 30,
        paddingVertical: 6,
        borderWidth: 1,
        borderColor: '#7F85B2'
    },
    buttonText: {
        color: '#10152F',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16,
        marginTop: 54,
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94',
    },
});

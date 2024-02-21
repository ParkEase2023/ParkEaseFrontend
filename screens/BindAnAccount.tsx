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
import { AirplaneInFlight, ArrowLeft, Bank, CaretDown, CaretLeft, CoinVertical, EnvelopeSimple, Eye, IdentificationCard, Money } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProfileParamList } from '../stack/ProfileStack';
import { createdPromptPayQRCode } from '../services/omise';

const BindAnAccount = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'AddCoin'>>();
    const [inputNumber, setInputNumber] = useState<number>(0);
    const handleConfirm = async () => {
    };

    return (
        <KeyboardAvoidingView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled">
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={22} color="#10152F" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Bind An Account</Text>
                </View>
                <View style={styles.line}></View>
                <View style={styles.mainContainer}>
                   <Text style={styles.headerTextbody}>Payer's Information</Text>
                    <View style={styles.row}>
                            <View style={[styles.textboxName]}>
                                <TextInput
                                    style={styles.input}
                                    placeholder="kierra"
                                    keyboardType= "email-address"
                                />
                            </View>
                        <View style={[styles.textboxLastname]}>
                            <TextInput
                                style={styles.input}
                                placeholder="Aminoff"
                                keyboardType= "email-address"
                            />
                        </View> 
                    </View>
                    <View style={styles.space}>
                        <View style={[styles.textbox1]}>
                            <View style={styles.row}>
                                <View style={styles.iconPosition}>
                                    <EnvelopeSimple size={32} />
                                </View>
                                    <TextInput
                                        style={styles.inputBank}
                                        placeholder="kierra.ami@gmail.com"
                                        keyboardType= "email-address"
                                    />
                            </View>
                        </View>
                    </View>
                    <View style={styles.space}>
                        <View style={[styles.textbox1]}>
                            <View style={styles.iconPosition}>
                                <View style={styles.row}>
                                    <IdentificationCard size={32} />
                                        <TextInput
                                            style={styles.input}
                                            placeholder="Tax ID  (13-digit ID card number)"
                                            keyboardType="email-address"
                                        /> 
                                        <Eye size={32} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.space}>
                        <Text style={styles.headerTextbody}>Bank Account</Text>
                        <View style={[styles.textbox1]}>
                            <View style={styles.iconPosition}>
                                <View style={styles.row}>
                                    <Bank size={32} />
                                        <TextInput
                                            style={styles.inputBank}
                                            placeholder="Choose a bank"
                                            keyboardType="email-address"
                                        />
                                    <View >
                                        <CaretDown size={32} />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.space}>
                            <View style={[styles.textbox1]}>
                                <View style={styles.row}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Account Name"
                                        keyboardType="email-address"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.space}>
                            <View style={[styles.textbox1]}>
                                <View style={styles.row}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Account Number"
                                        keyboardType="email-address"
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirm}>
                            <Text style={styles.textConfirm}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>                   
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default BindAnAccount;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    mainContainer: {
        paddingHorizontal: 25,
        paddingVertical: 40
    },
    headerTextbody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingBottom: 20
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 40
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#10152F',
        paddingLeft: 90
    },
    line: {
        borderBottomColor: '#7F85B2',
        borderBottomWidth: 1,
        paddingTop: 15,
        width: '100%'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    iconPosition: {
        paddingHorizontal: 16
    },
    textboxName: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%',
    },
    textboxLastname: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%',
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
    space: {
        marginTop: 20
    },
    textbox1: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    input: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
        padding: 16,
    },
    inputBank: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
        padding: 16,
        flex: 9
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
        padding: 16,
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

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
    ScrollView,
    Animated
} from 'react-native';
import {
    AirplaneInFlight,
    ArrowLeft,
    Bank,
    CaretDown,
    CaretLeft,
    CoinVertical,
    EnvelopeSimple,
    Eye,
    EyeSlash,
    IdentificationCard,
    Money
} from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProfileParamList } from '../stack/ProfileStack';
import { createdPromptPayQRCode, createdRecipient } from '../services/omise';
import TabSelectBank from '../components/TabSelectBank';
import { createRecipienOnDB } from '../services/recipien';
import { accountLinked } from '../services/user';

const BindAnAccount = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'BindAnAccount'>>();
    const [inputNumber, setInputNumber] = useState<number>(0);
    const [isHidden, setIsHidden] = useState(true);
    const translateY = new Animated.Value(100);
    const [TaxID, setTaxID] = useState('');
    const [selectBank, setSelectBank] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [accountName, setAccountName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
    const [recipienId, setRecipienId] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [textEntry, setTextEntry] = useState(true);

    const createRecipien = async () => {
        const Recipien: any = await createdRecipient({
            firstname: firstname,
            lastname: lastname,
            email: email,
            taxId: TaxID,
            bank: selectBank,
            accountname: accountName,
            accountnumber: accountNumber
        });
        if (Recipien.message === 'created') {
            createRecipienDB(Recipien.data);
        }
    };


    

    const createRecipienDB = async (recipienID:string) => {
        const RecipienOnDB: any = await createRecipienOnDB({
            useId: params.userId,
            recipienId: recipienID,
            firstname: firstname,
            lastname: lastname,
            email: email,
            taxId: TaxID,
            bank: selectBank,
            accountname: accountName,
            accountnumber: accountNumber
        });
        if (RecipienOnDB.message === 'created') {
            bankLinked();
        }
    };

    const bankLinked = async () => {
        const Linked: any = await accountLinked(email);
        if (Linked.message === 'created') {
            navigation.navigate('InspectionInProgress');
        }
    };

    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isVisible ? 100 : 0, // Adjust the height as needed
            duration: 500, // Adjust the duration as needed
            useNativeDriver: true
        }).start();
    }, [isVisible, translateY, isHidden]);

    const RenderTab = (): JSX.Element | null => {
        if (isHidden === false) {
            return (
                <Animated.View
                    style={{ ...styles.boxview, flex: 1, transform: [{ translateY: translateY }] }}>
                    <TabSelectBank
                        selectBank={value => {
                            setSelectBank(value);
                        }}
                        setIsHidden={value => {
                            setIsHidden(value);
                        }}></TabSelectBank>
                </Animated.View>
            );
        } else {
            return null;
        }
    };

    const handleOpenTab = () => {
        if (isHidden === true) {
            const duration = 100 * 1000;
            setIsHidden(false);

            const timer = setTimeout(() => {
                setIsHidden(true);
            }, duration);

            return () => clearTimeout(timer);
        } else {
            setIsHidden(true);
        }
    };

    const Renderbg = (): JSX.Element | null => {
        if (isHidden === false) {
            return (
                <TouchableOpacity
                    onPress={() => setIsHidden(true)}
                    style={styles.containerpopup}></TouchableOpacity>
            );
        } else {
            return null;
        }
    };

    const Entrypassword = (): JSX.Element | null => {
        if (textEntry == true) {
            return (
                <TouchableOpacity
                    onPress={() => {
                        setTextEntry(!textEntry);
                        return false;
                    }}>
                    <EyeSlash size={24} weight="duotone" color="#565E8B" />
                </TouchableOpacity>
            );
        } else {
            return (
                <TouchableOpacity
                    onPress={() => {
                        setTextEntry(!textEntry);
                        return false;
                    }}>
                    <Eye size={24} weight="duotone" color="#565E8B" />
                </TouchableOpacity>
            );
        }
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
                    <View style={styles.rowInputName}>
                        <View style={styles.textboxName}>
                            <TextInput
                                style={styles.input}
                                placeholder="Frist Name"
                                onChangeText={text => setFirstname(text)}
                            />
                        </View>
                        <View style={styles.textboxLastname}>
                            <TextInput
                                style={styles.input}
                                placeholder="Last Name"
                                onChangeText={text => setLastname(text)}
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
                                    placeholder="Email"
                                    onChangeText={text => setEmail(text)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.space}>
                        <View style={[styles.textbox1]}>
                            <View style={styles.row}>
                                <View style={styles.iconPosition}>
                                    <IdentificationCard size={32} />
                                </View>
                                <TextInput
                                    style={styles.input}
                                    secureTextEntry={textEntry}
                                    placeholder="Tax ID  (13-digit ID card number)"
                                    onChangeText={text => setTaxID(text)}
                                />
                                <Entrypassword></Entrypassword>
                            </View>
                        </View>
                    </View>
                    <View style={styles.space}>
                        <Text style={styles.headerTextbody}>Bank Account</Text>
                        <View style={[styles.textbox1]}>
                            <View style={styles.iconPosition}>
                                <TouchableOpacity style={styles.row} onPress={handleOpenTab}>
                                    <Bank size={32} />
                                    <TextInput
                                        style={styles.inputBank}
                                        editable={false}
                                        placeholder="Choose a bank"
                                        value={selectBank}
                                    />
                                    <View>
                                        <CaretDown size={32} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styles.space}>
                            <View style={[styles.textbox1]}>
                                <View style={styles.row}>
                                    <TextInput
                                        style={styles.input}
                                        placeholder="Account Name"
                                        onChangeText={text => setAccountName(text)}
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
                                        onChangeText={text => setAccountNumber(text)}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnConfirm} onPress={createRecipien}>
                            <Text style={styles.textConfirm}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RenderTab></RenderTab>
                <Renderbg></Renderbg>
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
        alignItems: 'center'
    },
    rowInputName: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    iconPosition: {
        paddingHorizontal: 16
    },
    textboxName: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%'
    },
    textboxLastname: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%'
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
    containerpopup: {
        flex: 1,
        backgroundColor: 'rgba(16, 21, 47, 0.8)',
        height: 1000,
        position: 'absolute',
        width: '100%',
        zindex: 3
    },
    textbox1: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F'
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    input: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
        padding: 16,
        flex: 9
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
    boxview: {
        width: '100%',
        height: 550,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
    }
});

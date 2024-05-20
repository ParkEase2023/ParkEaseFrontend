import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    ScrollView,
    Animated
} from 'react-native';
import {
    Bank,
    CaretDown,
    CaretLeft,
    EnvelopeSimple,
    Eye,
    EyeSlash,
    IdentificationCard
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
    const createRecipienDB = async (recipienID: string) => {
        const RecipienOnDB: any = await createRecipienOnDB({
            userId: params.userId,
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
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                        <CaretLeft weight="bold" size={20} color="#10152F" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Bind An Account</Text>
                </View>
                <View style={styles.line}></View>

                <View style={styles.mainContainer}>
                    <Text style={styles.headerTextBody}>Payer's Information</Text>
                    <View style={styles.textInputContainer}>
                        <View style={styles.firstName}>
                            <TextInput
                                placeholder="First Name"
                                style={styles.shortTextInput}
                                onChangeText={text => setFirstname(text)}
                            />
                        </View>

                        <View style={styles.lastName}>
                            <TextInput
                                placeholder="Last Name"
                                style={styles.shortTextInput}
                                onChangeText={text => setLastname(text)}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 18 }}>
                        <View style={styles.emailToTaxID}>
                            <EnvelopeSimple size={24} color="#565E8B" />
                            <TextInput
                                placeholder="Email"
                                style={styles.longTextInput}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 35 }}>
                        <View style={styles.emailToTaxID}>
                            <IdentificationCard size={24} color="#565E8B" />
                            <TextInput
                                placeholder="Tax ID  (13-digit ID card number)"
                                style={styles.longTextInput}
                                onChangeText={text => setTaxID(text)}
                            />
                        </View>
                    </View>

                    <Text style={styles.headerTextBody}>Bank Account</Text>
                    <View style={{ marginBottom: 18 }}>
                        <TouchableOpacity style={styles.btnChooseBank} onPress={handleOpenTab}>
                            <View style={styles.itemLeft}>
                                <Bank size={24} weight="fill" color="#565E8B" />
                                <TextInput
                                    placeholder="Choose a bank"
                                    editable={false}
                                    value={selectBank}
                                    style={styles.longTextInput}
                                />
                            </View>
                            <View>
                                <CaretDown size={16} weight="fill" color="#7F85B2" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginBottom: 18 }}>
                        <View style={styles.AccNameToAccNum}>
                            <TextInput
                                placeholder="Account Name"
                                style={styles.longTextInput}
                                onChangeText={text => setAccountName(text)}
                            />
                        </View>
                    </View>

                    <View style={{ marginBottom: 50 }}>
                        <View style={styles.AccNameToAccNum}>
                            <TextInput
                                placeholder="Account Number"
                                style={styles.longTextInput}
                                onChangeText={text => setAccountNumber(text)}
                            />
                        </View>
                    </View>
                </View>
                
                <View style={styles.btnContainer}>
                    <TouchableOpacity style={styles.btnConfirm} onPress={createRecipien}>
                        <Text style={styles.textConfirm}>CONFIRM</Text>
                    </TouchableOpacity>
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
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    mainContainer: {
        flex: 8,
        paddingHorizontal: 25,
        paddingTop: 35
    },
    headerTextBody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingBottom: 25
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shortTextInput: {
        flex: 1,
        paddingVertical: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    longTextInput: {
        flex: 1,
        padding: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    firstName: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 18,
        paddingHorizontal: 16
    },
    lastName: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 18,
        paddingHorizontal: 16
    },
    emailToTaxID: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16
    },
    btnChooseBank: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#7F85B2'
    },
    AccNameToAccNum: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },

    containerpopup: {
        flex: 1,
        backgroundColor: 'rgba(16, 21, 47, 0.8)',
        height: 1000,
        position: 'absolute',
        width: '100%',
        zindex: 3
    },
    boxview: {
        width: '100%',
        height: 550,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
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
    }
});

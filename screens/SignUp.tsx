import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    KeyboardAvoidingView,
    ScrollView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useContext, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, EnvelopeSimple, Phone, Key, Eye, EyeSlash } from 'phosphor-react-native';
import AuthContext from '../context/AuthContext';
import { signUp } from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RootStackList } from '../stack/RootStack';

const SignUp = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const navigetAffterSignUp = useNavigation<NativeStackNavigationProp<RootStackList>>();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const { setLoggedIn } = useContext(AuthContext);
    const [errorsFirstname, setErrorsFirstname] = useState('');
    const [errorsLastname, setErrorsLastname] = useState('');
    const [errorsPhone, setErrorsPhone] = useState('');
    const [errorsEmail, setErrorsEmail] = useState('');
    const [errorsPassword, setErrorsPassword] = useState('');
    const [errorsConpassword, setErrorsConpassword] = useState('');
    const [textEntry, setTextEntry] = useState(true);
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
    const handleSignUp = async () => {
        try {
            if (password === confirmPassword) {
                const res: any = await signUp({
                    firstname: firstname,
                    lastname: lastname,
                    phone_number: phoneNum,
                    email: email,
                    password: password,
                    Exptime: new Date()
                });
                console.log('res token', res);
                if (res.message === 'created') {
                    AsyncStorage.setItem('token', res.token);
                    setLoggedIn(true);
                    console.log('token kkkkkkkkkk');
                    navigetAffterSignUp.replace('MenuStack', { screen: 'HomeStack' });
                }
                console.log(res);
            } else {
                setErrorsConpassword('Password not match');
            }
        } catch (err: any) {
            setErrorsFirstname('');
            setErrorsLastname('');
            setErrorsPhone('');
            setErrorsEmail('');
            setErrorsPassword('');
            setErrorsConpassword('');
            err.errors.map((item: any) => {
                if (item.param === 'firstname') {
                    setErrorsFirstname(item.msg);
                } else if (item.param === 'lastname') {
                    setErrorsLastname(item.msg);
                } else if (item.param === 'phone_number') {
                    setErrorsPhone(item.msg);
                } else if (item.param === 'email') {
                    setErrorsEmail(item.msg);
                } else if (item.param === 'password') {
                    setErrorsPassword(item.msg);
                } else if (item.param === 'conPassword') {
                    setErrorsConpassword(item.msg);
                }
            });
            console.log(err);
        }
    };
    return (
        <KeyboardAvoidingView
            style={styles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled">
            <SafeAreaView style={styles.Logo}>
                <Image source={require('../assets/LogoParkEase2.png')} />
                <View style={styles.circleG} />
                <View style={styles.circleB} />
                <View style={styles.circleY} />
            </SafeAreaView>

            <View style={styles.mainContainer}>
                <View style={styles.heading}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <ArrowLeft size={24} color="#565E8B" />
                    </TouchableOpacity>
                    <Text style={styles.title}>Sign Up</Text>
                </View>

                <View style={styles.textInputContainer}>
                    <View style={styles.firstName}>
                        <TextInput
                            placeholder="First Name"
                            style={styles.shortTextInput}
                            onChangeText={text => setFirstname(text)}
                        />
                    </View>
                    <Text style={styles.error}>{errorsFirstname}</Text>

                    <View style={styles.lastName}>
                        <TextInput
                            placeholder="Last Name"
                            style={styles.shortTextInput}
                            onChangeText={text => setLastname(text)}
                        />
                    </View>
                    <Text style={styles.error}>{errorsLastname}</Text>
                </View>

                <View style={styles.emailToConPassword}>
                    <EnvelopeSimple size={24} color="#565E8B" />
                    <TextInput
                        placeholder="Email"
                        style={styles.longTextInput}
                        onChangeText={text => setEmail(text)}
                    />
                    <Text style={styles.error}>{errorsEmail}</Text>
                </View>

                <View style={styles.emailToConPassword}>
                    <Phone size={24} color="#565E8B" />
                    <TextInput
                        placeholder="Phone Number"
                        style={styles.longTextInput}
                        onChangeText={text => setPhoneNum(text)}
                    />
                    <Text style={styles.error}>{errorsPhone}</Text>
                </View>

                <View style={styles.emailToConPassword}>
                    <View style={styles.itemLeft}>
                        <Key size={24} color="#565E8B" />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={textEntry}
                            style={styles.longTextInput}
                            onChangeText={text => setPassword(text)}
                        />
                        <Text style={styles.error}>{errorsPassword}</Text>
                    </View>
                    <Entrypassword></Entrypassword>
                </View>

                <View style={styles.emailToConPassword}>
                    <View style={styles.itemLeft}>
                        <Key size={24} weight="fill" color="#565E8B" />
                        <TextInput
                            placeholder="Confirm Password"
                            secureTextEntry={textEntry}
                            style={styles.longTextInput}
                            onChangeText={text => setConfirmPassword(text)}
                        />
                        <Text style={styles.error}>{errorsConpassword}</Text>
                    </View>
                    <Entrypassword></Entrypassword>
                </View>

                <TouchableOpacity style={styles.btnLogIn} onPress={handleSignUp}>
                    <Text style={styles.textSignUp}>SIGN UP</Text>
                </TouchableOpacity>
                <Text style={styles.textBody}>
                    Already have account?
                    <Text style={styles.textButton} onPress={() => navigation.navigate('SignUp')}>
                        {' '}
                        LOG IN
                    </Text>
                </Text>
            </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SignUp;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#10152F'
    },
    scrollViewContainer: {
      flexGrow: 1,
    },
    Logo: {
        flex: 1,
        alignItems: 'center',
        marginTop: 81,
        marginBottom: 32
    },
    circleG: {
        position: 'absolute',
        width: 28,
        height: 28,
        borderRadius: 100,
        backgroundColor: '#94FEBF',
        top: -40,
        right: 75
    },
    circleB: {
        position: 'absolute',
        width: 58,
        height: 58,
        borderRadius: 100,
        backgroundColor: '#95EDFF',
        top: 45,
        right: -24
    },
    circleY: {
        position: 'absolute',
        width: 14,
        height: 14,
        borderRadius: 100,
        backgroundColor: '#FEFA94',
        top: 55,
        left: 38
    },
    mainContainer: {
        flex: 2,
        backgroundColor: '#EEF0FF',
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        paddingHorizontal: 25,
        paddingTop: 35,
        paddingBottom: 27.5
    },
    heading: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 40
    },
    title: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 40,
        color: '#10152F'
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    shortTextInput: {
        paddingVertical: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    longTextInput: {
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
        marginBottom: 25,
        paddingHorizontal: 16
    },
    lastName: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 25,
        paddingHorizontal: 16
    },
    firstNameActive: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 25,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#565E8B',
        elevation: 2
    },
    lastNameActive: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 25,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#565E8B',
        elevation: 2
    },
    emailToConPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 25,
        paddingHorizontal: 16
    },
    emailToConPasswordActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 25,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#565E8B',
        elevation: 2
    },
    itemLeft: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    btnLogIn: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16,
        marginBottom: 20
    },
    textSignUp: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    },
    textBody: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#2C2F4A'
    },
    textButton: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#565E8B'
    },
    error: {
        color: '#EA4C4C',
        fontFamily: 'RedHatText-SemiBold',
        fontSize: 12,
        paddingTop: 2
        // paddingLeft: 16,
    }
});

import {
    StyleSheet,
    Text,
    View,
    Platform,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    Image
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Modal from 'react-native-modal';
import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, Key, Eye, EyeSlash } from 'phosphor-react-native';
import Good from '../assets/Good.png';
import { forgetpassword } from '../services/forgotpassword';
import { sendEmailNoti } from '../services/email';

const CreateNewPassword = () => {
    const { params } = useRoute<RouteProp<AuthTabParamList, 'CreateNewPassword'>>();
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const [visible, setVisible] = useState(false);
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorsPassword, setErrorsPassword] = useState('');
    const [errorsConfirmpassword, setErrorsConfirmpassword] = useState('');
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

    

    const handleOpenmodal = () => {
        const duration = 3 * 1000;
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
            navigation.replace('SignIn');
        }, duration);

        return () => clearTimeout(timer);
    };

    const handleforgetpassword = async () => {
        try {
            if (password === confirmPassword) {
                const body = {
                    password: password
                };
                await forgetpassword(params.Email, body);
                await sendEmailNoti({ email: params.Email, text: "Dear parkease users, you have successfully changed your password at "});
                handleOpenmodal();
            } else {
                setErrorsConfirmpassword('Password not match');
            }
        } catch (err: any) {
            setErrorsPassword('');
            err.errors.map((item: any) => {
                if (item.param === 'password') {
                    setErrorsPassword(item.msg);
                }
            });
            console.log(err);
        }
    };

    return (
        <KeyboardAwareScrollView style={styles.container}>
            <SafeAreaView style={styles.mainContainer}>
                <View style={styles.circleBig} />
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <ArrowLeft size={24} color="#EEF0FF" />
                </TouchableOpacity>
                <Text style={styles.title}>Check New Password</Text>
                <Text style={styles.text}>
                    Your new password must be different from previously used password.
                </Text>

                <View style={styles.newPassword}>
                    <View style={styles.itemLeft}>
                        <Key size={24} color="#565E8B" />
                        <TextInput
                            placeholder="Password"
                            secureTextEntry={textEntry}
                            style={styles.textInput}
                            onChangeText={text => setPassword(text)}
                        />
                    </View>
                    <Entrypassword></Entrypassword>
                </View>

                <View style={styles.conPassword}>
                    <View style={styles.itemLeft}>
                        <Key size={24} weight="fill" color="#565E8B" />
                        <TextInput
                            placeholder="Confirm Password"
                            secureTextEntry={textEntry}
                            style={styles.textInput}
                            onChangeText={text => setConfirmPassword(text)}
                        />
                        <Text style={styles.error}>{errorsConfirmpassword}</Text>
                    </View>
                    <Entrypassword></Entrypassword>
                </View>

                <TouchableOpacity style={styles.btnSend} onPress={handleforgetpassword}>
                    <Text style={styles.textSend}>SEND</Text>
                </TouchableOpacity>
                <View style={styles.circleSmall} />
            </SafeAreaView>

            <Modal isVisible={visible} backdropOpacity={0.9} backdropColor="#262D57">
                <View style={styles.modalContainer}>
                    <Image source={Good} style={styles.imageGood} />
                    <Text style={styles.modalText}>Saved!</Text>
                    <Text style={styles.modalText2}>
                        Yahoo! You have successfully changed your password.
                    </Text>
                </View>
            </Modal>
        </KeyboardAwareScrollView>
    );
};

export default CreateNewPassword;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 25,
        marginBottom: 120
    },
    circleBig: {
        position: 'absolute',
        width: 287,
        height: 287,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -72,
        left: -144
    },
    btnBack: {
        marginTop: 80
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 32,
        color: '#262D57',
        textAlign: 'center',
        marginTop: 115
    },
    text: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#565E8B',
        textAlign: 'center',
        marginTop: 67,
        marginBottom: 45
    },
    textInput: {
        padding: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    newPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 16
    },
    newPasswordActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 20,
        paddingHorizontal: 16,
        borderWidth: 2,
        borderColor: '#565E8B',
        elevation: 2
    },
    conPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 66,
        paddingHorizontal: 16
    },
    conPasswordActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 66,
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
    btnSend: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16
    },
    textSend: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    },
    circleSmall: {
        position: 'absolute',
        width: 95,
        height: 95,
        borderRadius: 100,
        backgroundColor: '#CED2EA',
        bottom: -120,
        right: -20
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
    },
    error: {
        color: '#EA4C4C',
        fontFamily: 'RedHatText-SemiBold',
        fontSize: 12,
        paddingTop: 2
        // paddingLeft: 16,
    }
});

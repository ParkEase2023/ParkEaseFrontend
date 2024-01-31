import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TextInput,
    TouchableOpacity,
    Animated,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {
    X,
    Check,
    Camera,
    ArrowLeft,
    EnvelopeSimple,
    Phone,
    Key,
    Eye,
    EyeSlash
} from 'phosphor-react-native';
import profile from '../assets/profile.png';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { updateProfile } from '../services/user';
import TabEditProfilePicture from '../components/TabEditProfilePicture';

const EditProfile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'EditProfile'>>();
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [profilePicture, setprofilePicture] = useState(
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sanook.com%2Fnews%2F&psig=AOvVaw2LozT_eZjCaKky5wHekfdr&ust=1675358692831000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPD1ltLr9PwCFQAAAAAdAAAAABAE'
    );
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorsFirstname, setErrorsFirstname] = useState('');
    const [errorsLastname, setErrorsLastname] = useState('');
    const [errorsPhone, setErrorsPhone] = useState('');
    const [errorsEmail, setErrorsEmail] = useState('');
    const [errorsPassword, setErrorsPassword] = useState('');
    const [errorsConfirmpassword, setErrorsConfirmpassword] = useState('');
    const [textEntry, setTextEntry] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [fnTakephoto, setFnTakephoto] = useState(false);
    const [fnChosenPhoto, setFnCchosenPhoto] = useState(false);
    const translateY = new Animated.Value(100);
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

    const onSubmit = async () => {
        try {
            if (password === confirmPassword) {
                const body = {
                    firstname: firstname,
                    lastname: lastname,
                    phone: phoneNumber,
                    email: email,
                    profile_picture: profilePicture,
                    password: password
                };
                await updateProfile(params._id, body);
                navigation.replace('Profile');
            } else {
                setErrorsConfirmpassword('Password not match');
            }
        } catch (err: any) {
            setErrorsFirstname('');
            setErrorsLastname('');
            setErrorsPhone('');
            setErrorsEmail('');
            setErrorsPassword('');
            err.errors.map((item: any) => {
                if (item.param === 'firstname') {
                    setErrorsFirstname(item.msg);
                } else if (item.param === 'lastname') {
                    setErrorsLastname(item.msg);
                } else if (item.param === 'phone') {
                    setErrorsPhone(item.msg);
                } else if (item.param === 'email') {
                    setErrorsEmail(item.msg);
                } else if (item.param === 'password') {
                    setErrorsPassword(item.msg);
                }
            });
            console.log(err);
        }
    };
    const chooseImage = async () => {
        let options: any = {
            includeBase64: true,
            title: 'Select Image',
            customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, async (response: any) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source: any = 'data:image/jpeg;base64,' + response.assets[0].base64;
                // console.log(source);
                setprofilePicture(source);
            }
        });
    };

    const takePhoto = async () => {
        let options: any = {
            includeBase64: true,
            title: 'Take Photo',
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchCamera(options, async (response: any) => {
            // console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled taking photo');
            } else if (response.error) {
                console.log('Camera Error: ', response.error);
            } else {
                const source: any = 'data:image/jpeg;base64,' + response.assets[0].base64;
                // console.log(source);
                setprofilePicture(source);
            }
        });
    };

    useEffect(() => {
        if (fnTakephoto === true) {
            takePhoto();
            setFnTakephoto(false);
            setIsHidden(true);
        } else if (fnChosenPhoto === true) {
            chooseImage();
            setFnCchosenPhoto(false);
            setIsHidden(true);
        }
    }),
        [fnTakephoto, fnChosenPhoto];

    const RenderTab = (): JSX.Element | null => {
        if (isHidden === false) {
            return (
                <Animated.View
                    style={{ ...styles.boxview, flex: 1, transform: [{ translateY: translateY }] }}>
                    <TabEditProfilePicture
                        takePhoto={value => {
                            setFnTakephoto(value);
                        }}
                        chooseImage={value => {
                            setFnCchosenPhoto(value);
                        }}></TabEditProfilePicture>
                </Animated.View>
            );
        } else {
            return null;
        }
    };
    useEffect(() => {
        Animated.timing(translateY, {
            toValue: isVisible ? 100 : 0, // Adjust the height as needed
            duration: 500, // Adjust the duration as needed
            useNativeDriver: true
        }).start();
    }, [isVisible, translateY, isHidden]);

    const handleOpenTab = () => {
        if (isHidden === true) {
            const duration = 10 * 1000;
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

    useEffect(() => {
        setFirstname(params.firstname);
        setLastname(params.lastname);
        setPhoneNumber(params.phone_number);
        setEmail(params.email);
        setprofilePicture(params.profile_picture);
        setPassword(params.password);
        setConfirmPassword(params.password);
        // console.log("data user")
    }, []);
    return (
        <KeyboardAvoidingView
            style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollViewContainer}
                keyboardShouldPersistTaps="handled">
                <View style={styles.mainContainer}>
                    <View style={styles.circleBig} />

                    <View style={styles.heading}>
                        <View style={styles.itemLeftHead}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <X size={28} weight="bold" color="#fff" />
                            </TouchableOpacity>
                            <Text style={styles.title}>EditProfile</Text>
                        </View>
                        <TouchableOpacity onPress={onSubmit}>
                            <View style={styles.itemRightHead}>
                                <Check size={28} weight="bold" color="#239D60" />
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={styles.profileContainer}>
                        <View style={styles.profilePicture}>
                            <Image source={{ uri: profilePicture }} style={styles.imageProfile} />
                            <View style={styles.bgBtnCamera}>
                                <TouchableOpacity onPress={handleOpenTab}>
                                    <Camera size={28} weight="bold" color="#EEF0FF" />
                                </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.textInputContainer}>
                            <View style={styles.firstName}>
                                <TextInput
                                    placeholder="First Name"
                                    value={firstname}
                                    style={styles.shortTextInput}
                                    onChangeText={text => setFirstname(text)}
                                />
                            </View>

                            <View style={styles.lastName}>
                                <TextInput
                                    placeholder="Last Name"
                                    value={lastname}
                                    style={styles.shortTextInput}
                                    onChangeText={text => setLastname(text)}
                                />
                            </View>
                        </View>

                        <View style={styles.emailToPassword}>
                            <EnvelopeSimple size={24} color="#565E8B" />
                            <TextInput
                                placeholder="Email"
                                value={email}
                                style={styles.longTextInput}
                                onChangeText={text => setEmail(text)}
                            />
                        </View>

                        <View style={styles.emailToPassword}>
                            <Phone size={24} color="#565E8B" />
                            <TextInput
                                placeholder="Phone Number"
                                value={phoneNumber}
                                style={styles.longTextInput}
                                onChangeText={text => setPhoneNumber(text)}
                            />
                        </View>

                        <View style={styles.emailToPassword}>
                            <View style={styles.itemLeft}>
                                <Key size={24} color="#565E8B" />
                                <TextInput
                                    secureTextEntry={textEntry}
                                    placeholder="Password"
                                    value={password}
                                    style={styles.longTextInput}
                                    onChangeText={text => setPassword(text)}
                                />
                            </View>
                            <Entrypassword />
                        </View>

                        <View style={styles.ConPassword}>
                            <View style={styles.itemLeft}>
                                <Key size={24} weight="fill" color="#565E8B" />
                                <TextInput
                                    secureTextEntry={textEntry}
                                    placeholder="Confirm Password"
                                    value={confirmPassword}
                                    style={styles.longTextInput}
                                    onChangeText={text => setConfirmPassword(text)}
                                />
                            </View>
                            <Entrypassword />
                        </View>
                        <Text style={styles.error}>{errorsConfirmpassword}</Text>
                    </View>

                    <View style={styles.circleSmall} />
                </View>
                <RenderTab></RenderTab>
                <Renderbg></Renderbg>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default EditProfile;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7DAEF'
    },
    containerpopup: {
        flex: 1,
        backgroundColor: 'rgba(16, 21, 47, 0.8)',
        height: 1000,
        position: 'absolute',
        width: '100%',
        zindex: 3
    },
    mainContainer: {
        paddingHorizontal: 16,
        flexGrow: 1
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    circleBig: {
        position: 'absolute',
        width: 378,
        height: 378,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -99,
        left: -141
    },
    heading: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 65
    },
    itemLeftHead: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#fff',
        marginLeft: 16
    },
    itemRightHead: {
        backgroundColor: '#EEF0FF',
        borderRadius: 100,
        padding: 12
    },
    profileContainer: {
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        paddingHorizontal: 16,
        paddingVertical: 20,
        marginTop: 120
    },
    profilePicture: {
        width: 145,
        height: 145,
        backgroundColor: '#EEF0FF',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: -95,
        marginBottom: 16
    },
    imageProfile: {
        width: 125,
        height: 125,
        borderRadius: 100
    },
    bgBtnCamera: {
        position: 'absolute',
        width: 125,
        height: 125,
        backgroundColor: '#10152F',
        opacity: 0.3,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        bottom: 10,
        right: 10
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
    emailToPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 25,
        paddingHorizontal: 16
    },
    emailToPasswordActive: {
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
    ConPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16
    },
    ConPasswordActive: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
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
    circleSmall: {
        zIndex: -1,
        position: 'absolute',
        width: 95,
        height: 95,
        borderRadius: 100,
        backgroundColor: '#7F85B2',
        bottom: 8,
        right: -20
    },
    error: {
        color: '#EA4C4C',
        fontFamily: 'RedHatText-SemiBold',
        fontSize: 12,
        paddingTop: 2
        // paddingLeft: 16,
    },
    boxview: {
        width: '100%',
        height: 120,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
        // paddingHorizontal: 10,
    }
});

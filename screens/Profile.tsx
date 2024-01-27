import {
    StyleSheet,
    Text,
    View,
    SafeAreaView,
    Image,
    TouchableOpacity,
    ScrollView,
    Animated,
    KeyboardAvoidingView,
    Platform
} from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import Imageprofile from '../assets/profile.png';
import {
    EnvelopeSimple,
    Phone,
    PencilSimple,
    Wallet,
    CoinVertical,
    CaretRight,
    Bell,
    ClockCounterClockwise,
    Car,
    IdentificationBadge,
    UserList,
    SignOut,
    CheckCircle
} from 'phosphor-react-native';
import RequireLogin from '../components/RequireLogin';
import { getProfile } from '../services/user';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackList } from '../stack/RootStack';
import AuthContext from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ProfileParamList } from '../stack/ProfileStack';
import Popupverify from '../components/Popupverify';
import TabRemainingBalance from '../components/TabRemainingBalance';

export interface IProfile {
    _id: string;
    firstname: string;
    lastname: string;
    phone_number: string;
    email: string;
    coins: number;
    password: string;
    profile_picture: string;
    verification_status: boolean;
}

const Profile = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
    const navigationEditProfile = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
    const [visible, setVisible] = useState(false);
    const [ticker, setTicker] = useState(false);
    const [isHidden, setIsHidden] = useState(true);
    const [isVisible, setIsVisible] = useState(false);
    const translateY = new Animated.Value(100);
    const [fnAddCoins, setFnAddCoins] = useState(false);
    const [fnBindAccount, setFnBindAccount] = useState(false);
    const [fnWithdrawMoney, setFnWithdrawMoney] = useState(false);
    const [profile, setProfile] = React.useState<IProfile>({
        _id: '',
        firstname: '',
        lastname: '',
        phone_number: '',
        email: '',
        coins: 0,
        password: '',
        profile_picture:
            'http://res.cloudinary.com/di71vwint/image/upload/v1674291349/images/nsopymczagslnr78yyv5.png',
        verification_status: false
    });
    const getUserProfile = async () => {
        const { data } = await getProfile();
        // console.log('user profile ', data);
        setProfile(data);
    };

    useEffect(() => {
        getUserProfile();
    }, []);

    const handleLogout = async () => {
        setLoggedIn(false);
        await AsyncStorage.removeItem('token');
        navigation.replace('MenuStack', { screen: 'HomeStack' });
    };

    const handleEditProfile = async () => {
        navigationEditProfile.navigate('EditProfile', {
            _id: profile._id,
            firstname: profile.firstname,
            lastname: profile.lastname,
            phone_number: profile.phone_number,
            email: profile.email,
            password: profile.password,
            profile_picture: profile.profile_picture
        });
    };

    const handleVrify = () => {
        setTicker(true);
        setVisible(!visible);
    };

    const ContentVerify = (): JSX.Element | null => {
        if (profile.verification_status === true) {
            return (
                <TouchableOpacity style={styles.btnRectangle}>
                    <View style={styles.itemLeft}>
                        <View style={styles.bgIcon}>
                            <IdentificationBadge size={22} weight="fill" color="#EEF0FF" />
                        </View>
                        <Text style={styles.textBody}>Verify Your Identity</Text>
                    </View>
                    <CheckCircle size={22} weight="fill" color="#7F85B2" />
                </TouchableOpacity>
            );
        } else if (profile.verification_status === false) {
            return (
                <TouchableOpacity style={styles.btnRectangle} onPress={handleVrify}>
                    <View style={styles.itemLeft}>
                        <View style={styles.bgIcon}>
                            <IdentificationBadge size={22} weight="fill" color="#EEF0FF" />
                        </View>
                        <Text style={styles.textBody}>Verify Your Identity</Text>
                    </View>

                    <CaretRight size={22} weight="bold" color="#7F85B2" />
                </TouchableOpacity>
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

    const RenderTab = (): JSX.Element | null => {
        if (isHidden === false) {
            return (
                <Animated.View
                    style={{ ...styles.boxview, flex: 1, transform: [{ translateY: translateY }] }}>
                    <TabRemainingBalance
                        addCoins={value => {
                            setFnAddCoins(value);
                        }}
                        BindAccount={value => {
                            setFnBindAccount(value);
                        }}
                        WithdrawMoney={value => {
                            setFnWithdrawMoney(value);
                        }}></TabRemainingBalance>
                </Animated.View>
            );
        } else {
            return null;
        }
    };

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
                    style={styles.containerpopup}>
                </TouchableOpacity>
            );
        } else {
            return null;
        }
    };

    const RemainingBalance = () => {
        if (fnAddCoins === true) {
            console.log('add coins');
            setFnAddCoins(false);
        } else if (fnBindAccount === true) {
            console.log('fnBindAccount');
            setFnBindAccount(false);
        } else if (fnWithdrawMoney === true) {
            console.log('fnWithdrawMoney');
            setFnWithdrawMoney(false);
        }
    };
    const handleBalance = () => {
        if(profile.verification_status === true){
            handleOpenTab();
        }
        else if (profile.verification_status === false){
            handleVrify();
        }
    };
    useEffect(() => {
        RemainingBalance();
    }, [fnAddCoins,fnBindAccount,fnWithdrawMoney])
    


    return (
        <RequireLogin>
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <ScrollView
                    contentContainerStyle={styles.scrollViewContainer}
                    keyboardShouldPersistTaps="handled">
                    <View style={styles.mainContainer}>
                        <View style={styles.circleBig} />
                        <Text style={styles.title}>Profile</Text>

                        <View style={styles.profileContainer}>
                            <View style={styles.mainProfileContainer}>
                                <Image
                                    source={{ uri: profile.profile_picture }}
                                    style={styles.imageProfile}
                                />

                                <View style={styles.dataProfile}>
                                    <Text style={styles.name}>
                                        {profile.firstname} {profile.lastname}
                                    </Text>

                                    <View style={styles.email}>
                                        <EnvelopeSimple size={20} weight="fill" color="#7F85B2" />
                                        <Text style={styles.textProfile}>{profile.email}</Text>
                                    </View>

                                    <View style={styles.phone}>
                                        <Phone size={20} weight="fill" color="#7F85B2" />
                                        <Text style={styles.textProfile}>
                                            {profile.phone_number}
                                        </Text>
                                    </View>
                                </View>
                            </View>

                            <TouchableOpacity onPress={handleEditProfile}>
                                <View style={styles.bgBtnEdit}>
                                    <PencilSimple size={24} weight="fill" style={styles.btnEdit} />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity style={styles.btnRectangle} onPress={handleBalance}>
                            <View style={styles.itemLeft}>
                                <View style={styles.bgIcon}>
                                    <Wallet size={22} weight="fill" color="#EEF0FF" />
                                </View>
                                <Text style={styles.textBody}>Remaining Balance</Text>
                            </View>

                            <View style={styles.itemRight}>
                                <CoinVertical size={22} weight="fill" color="#2C2F4A" />
                                <Text style={styles.textBold}>{profile.coins}</Text>
                                <CaretRight size={22} weight="bold" color="#7F85B2" />
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRectangle}>
                            <View style={styles.itemLeft}>
                                <View style={styles.bgIcon}>
                                    <Bell size={22} weight="fill" color="#EEF0FF" />
                                </View>
                                <Text style={styles.textBody}>Notification</Text>
                            </View>

                            <CaretRight size={22} weight="bold" color="#7F85B2" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRectangle}>
                            <View style={styles.itemLeft}>
                                <View style={styles.bgIcon}>
                                    <ClockCounterClockwise
                                        size={22}
                                        weight="bold"
                                        color="#EEF0FF"
                                    />
                                </View>
                                <Text style={styles.textBody}>Booking History</Text>
                            </View>

                            <CaretRight size={22} weight="bold" color="#7F85B2" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRectangle}>
                            <View style={styles.itemLeft}>
                                <View style={styles.bgIcon}>
                                    <Car size={22} weight="fill" color="#EEF0FF" />
                                </View>
                                <Text style={styles.textBody}>My Parking</Text>
                            </View>

                            <CaretRight size={22} weight="bold" color="#7F85B2" />
                        </TouchableOpacity>

                        <ContentVerify></ContentVerify>

                        <TouchableOpacity style={styles.btnRectangle}>
                            <View style={styles.itemLeft}>
                                <View style={styles.bgIcon}>
                                    <UserList size={22} weight="bold" color="#EEF0FF" />
                                </View>
                                <Text style={styles.textBody}>Apply For Membership</Text>
                            </View>

                            <CaretRight size={22} weight="bold" color="#7F85B2" />
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.btnRectangle} onPress={handleLogout}>
                            <View style={styles.itemLeft}>
                                <View style={styles.bgIconLogOut}>
                                    <SignOut size={22} weight="bold" color="#EEF0FF" />
                                </View>
                                <Text style={styles.textBody}>Log Out</Text>
                            </View>

                            <CaretRight size={22} weight="bold" color="#7F85B2" />
                        </TouchableOpacity>

                        <View style={styles.circleSmall} />
                    </View>
                    <Popupverify
                        setVisible={visible}
                        ticker={ticker}
                        email={profile.email}></Popupverify>
                    <RenderTab></RenderTab>
                    <Renderbg></Renderbg>
                </ScrollView>
            </KeyboardAvoidingView>
        </RequireLogin>
    );
};

export default Profile;

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
    scrollViewContainer: {
        flexGrow: 1
    },
    mainContainer: {
        flex: 1,
        paddingHorizontal: 16,
        marginBottom: 25
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
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#fff',
        marginTop: 65
    },

    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        marginTop: 47,
        marginBottom: 35,
        paddingLeft: 18,
        borderRadius: 12
    },
    mainProfileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16
    },
    imageProfile: {
        width: 81,
        height: 81,
        borderRadius: 100
    },

    dataProfile: {
        marginHorizontal: 25
    },
    name: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        marginBottom: 16
    },
    email: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 6
    },
    phone: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textProfile: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#7F85B2',
        marginLeft: 8
    },

    bgBtnEdit: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 115,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#EEF0FF'
    },
    btnEdit: {
        marginHorizontal: 13
    },

    btnRectangle: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingHorizontal: 8,
        paddingVertical: 8,
        borderRadius: 12,
        marginBottom: 10
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    bgIcon: {
        backgroundColor: '#262D57',
        borderRadius: 100,
        padding: 8,
        marginRight: 16
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textBody: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
        marginRight: 16
    },
    textBold: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        marginRight: 8
    },

    bgIconLogOut: {
        backgroundColor: '#EA4C4C',
        borderRadius: 100,
        padding: 8,
        marginRight: 16
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
    boxview: {
        width: '100%',
        height: 160,
        position: 'absolute',
        bottom: 0,
        zIndex: 2
    }
});

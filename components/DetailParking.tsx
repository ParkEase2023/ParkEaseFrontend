import { Image, LogBox, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useContext, useEffect, useState } from 'react';
import {
    CaretRight,
    Clock,
    CoinVertical,
    Heart,
    MapPin,
    NavigationArrow,
    Phone,
    Star,
    User
} from 'phosphor-react-native';
import Comment from './Comment';
import { Linking } from 'react-native';
import LaunchNavigator from 'react-native-launch-navigator';
import { getProfile } from '../services/user';
import { addMyList, getMyList } from '../services/mylist';
import AuthContext from '../context/AuthContext';
import ButtonHeartDisabled from './ButtonHeartDisabled';
import ButtonHeart from './ButtonHeart';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { HomeParamList } from '../stack/HomeStack';
export interface IDetail {
    Title: string;
    Price: string;
    Opening_status: boolean;
    Parking_picture1: string;
    Parking_picture2: string;
    Parking_picture3: string;
    Location_address: string;
    TimeOpen: string;
    TimeClose: string;
    ProviderBy: string;
    PhoneCall: string;
    latitude: number;
    longitude: number;
    mo: boolean;
    tu: boolean;
    we: boolean;
    th: boolean;
    fr: boolean;
    sa: boolean;
    su: boolean;
    parkingId: string;
    reload: boolean;
    profile_picture: string;
}

const DetailParking = (props: IDetail) => {
    const [heart, setHeart] = useState(false);
    const [ticker, setTicker] = useState(false);
    const [userId, setUserId] = useState('');
    const [myListId, setMyListId] = useState('');
    const [dayOpenAll, setDayOpenAll] = useState('');
    const { isLoggedIn } = useContext(AuthContext);
    const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();

    useEffect(() => {
        checkHeart();
        console.log(props.reload);
    }, [props.reload]);

    useEffect(() => {
        reloadValue();
    }, [heart]);

    const checkHeart = async () => {
        console.log('checkHeart working');
        const { data } = await getProfile();
        setUserId(data._id);
        let list: any = await getMyList(data._id);
        if (list.myList[0] !== undefined) {
            {
                list.myList.map((item: any, index: any) => {
                    if (item.myList[0]._id === props.parkingId) {
                        console.log('checkHeart true');
                        setHeart(true);
                        setMyListId(item._id);
                    } else {
                        console.log('checkHeart flase');
                        setHeart(false);
                    }
                });
            }
        } else {
            setHeart(false);
        }
    };

    const reloadValue = async () => {
        let list: any = await getMyList(userId);
        if (list.myList[0] !== undefined) {
            {
                list.myList.map((item: any, index: any) => {
                    if (item.myList[0]._id === props.parkingId) {
                        setMyListId(item._id);
                    }
                });
            }
        }
    };

    useEffect(() => {
        const dayOpen = [];
        if (props.mo === true) {
            dayOpen.push('Mo');
        }
        if (props.tu === true) {
            dayOpen.push('Tu');
        }
        if (props.we === true) {
            dayOpen.push('We');
        }
        if (props.th === true) {
            dayOpen.push('Th');
        }
        if (props.fr === true) {
            dayOpen.push('Fr');
        }
        if (props.sa === true) {
            dayOpen.push('Sat');
        }
        if (props.su === true) {
            dayOpen.push('Sun');
        }
        const result = dayOpen.join('-');
        setDayOpenAll(result);
    }, [props.Title]);

    LogBox.ignoreLogs(['new NativeEventEmitter']);
    const ReaderBtn = (): JSX.Element | null => {
        if (props.Opening_status == true) {
            return <Text style={styles.textOpen}>Open</Text>;
        } else {
            return <Text style={styles.textClose}>Close</Text>;
        }
    };

    const PhoneCall = () => {
        Linking.openURL(`tel:${props.PhoneCall}`);
    };

    const Heart = (): JSX.Element | null => {
        if (isLoggedIn === true) {
            return (
                <>
                    <ButtonHeart
                        heartIcon={heart}
                        myListId={myListId}
                        userId={userId}
                        parkingId={props.parkingId}
                        onSelected={value => {
                            setHeart(value);
                        }}
                    />
                </>
            );
        } else {
            return <ButtonHeartDisabled></ButtonHeartDisabled>;
        }
    };

    const navigate = () => {
        LaunchNavigator.navigate([props.latitude, props.longitude]);
    };

    return (
        <View style={styles.mainContainer}>
            <View style={{ minHeight: 500 }}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>{props.Title}</Text>
                    <View style={styles.rate}>
                        <Star size={12} weight="fill" color="#FFDE00" />
                        <Text style={styles.textRate}>4.5</Text>
                    </View>
                </View>

                <View style={styles.rowCostOC}>
                    <View style={styles.coins}>
                        <CoinVertical size={20} weight="fill" color="#FFDE00" />
                        <Text style={styles.textCoins}>{props.Price} Coins/hr</Text>
                    </View>
                    <ReaderBtn></ReaderBtn>
                </View>

                <TouchableOpacity style={styles.btnBooking}>
                    <Text style={styles.textBooking}>BOOKING</Text>
                </TouchableOpacity>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnNavigate} onPress={navigate}>
                        <NavigationArrow size={20} weight="fill" color="#262D57" />
                        <Text style={styles.textNavigate}>Navigate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCall} onPress={PhoneCall}>
                        <Phone size={20} weight="fill" color="#262D57" />
                        <Text style={styles.textCall}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnHeart}>
                        {/* <Heart size={20} weight="fill" color="#EEF0FF" /> */}
                        <Heart></Heart>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerImg}>
                    <Image source={{ uri: props.Parking_picture1 }} style={styles.imgLeft} />
                    <View style={styles.imgRight}>
                        <Image source={{ uri: props.Parking_picture2 }} style={styles.imgTop} />
                        <Image source={{ uri: props.Parking_picture3 }} style={styles.imgLower} />
                    </View>
                </View>

                <View style={styles.location}>
                    <MapPin size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textLocation}>{props.Location_address}</Text>
                </View>

                <View style={styles.time}>
                    <Clock size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textTime}>
                        {dayOpenAll} | {props.TimeOpen} - {props.TimeClose}
                    </Text>
                </View>

                <View style={styles.provider}>
                    <User size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textProvider}>Provider by </Text>
                    <Text style={styles.textProviderName}>{props.ProviderBy}</Text>
                </View>

                <Text style={styles.titleRateReview}>Rate & Review</Text>
                <TouchableOpacity onPress={()=>navigation.navigate("Review")}>
                    <View style={styles.rowRateReview}>
                        <View style={styles.rowItemLeft}>
                            <Image
                                source={{ uri: props.profile_picture }}
                                style={styles.smallProfile}
                            />
                            <View style={styles.rowBigStar}>
                                <View style={styles.star}>
                                    <Star size={30} weight="regular" color="#565E8B" />
                                </View>
                                <View style={styles.star}>
                                    <Star size={30} weight="regular" color="#565E8B" />
                                </View>
                                <View style={styles.star}>
                                    <Star size={30} weight="regular" color="#565E8B" />
                                </View>
                                <View style={styles.star}>
                                    <Star size={30} weight="regular" color="#565E8B" />
                                </View>
                                <View style={styles.star}>
                                    <Star size={30} weight="regular" color="#565E8B" />
                                </View>
                            </View>
                        </View>

                        <CaretRight size={24} weight="bold" color="#565E8B" />
                    </View>
                </TouchableOpacity>
                <View style={styles.line} />
                <Comment />
            </View>
        </View>
    );
};

export default DetailParking;

const styles = StyleSheet.create({
    mainContainer: {
        marginHorizontal: 25
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 16,
        marginBottom: 12
    },
    textTitle: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRate: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EEF0FF',
        marginLeft: 4
    },
    rowCostOC: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 20
    },
    coins: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCoins: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#FEFA94',
        marginLeft: 6
    },
    textOpen: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#55FFAA'
    },
    textClose: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#FF6A6A'
    },

    btnBooking: {
        backgroundColor: '#FEFA94',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    textBooking: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    btnNavigate: {
        backgroundColor: '#EEF0FF',
        flex: 2,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textNavigate: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
        marginLeft: 6
    },
    btnCall: {
        backgroundColor: '#EEF0FF',
        flex: 2,
        marginHorizontal: 8,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textCall: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
        marginLeft: 6
    },
    btnHeart: {
        backgroundColor: '#7F85B2',
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerImg: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    imgLeft: {
        flex: 1,
        width: '100%',
        height: 240,
        borderRadius: 8,
        marginRight: 4
    },
    imgRight: {
        flex: 1
    },
    imgTop: {
        width: '100%',
        height: 118,
        borderRadius: 8,
        marginBottom: 4
    },
    imgLower: {
        width: '100%',
        height: 118,
        borderRadius: 8
    },
    location: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    textLocation: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EEF0FF',
        marginLeft: 16
    },
    time: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12
    },
    textTime: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EEF0FF',
        marginLeft: 16
    },
    provider: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 25
    },
    textProvider: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EEF0FF',
        marginLeft: 16,
        marginRight: 8
    },
    textProviderName: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 14,
        color: '#EEF0FF'
    },
    titleRateReview: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#EEF0FF',
        marginBottom: 12
    },
    rowRateReview: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 18
    },
    rowItemLeft: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    smallProfile: {
        width: 32,
        height: 32,
        borderRadius: 100,
        marginRight: 16
    },
    rowBigStar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    star: {
        marginRight: 8
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#565E8B',
        marginBottom: 16
    }
});

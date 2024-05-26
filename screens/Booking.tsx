import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import {
    CalendarPlus,
    CaretLeft,
    CaretRight,
    Clock,
    CoinVertical,
    MapPin,
    Phone,
    User
} from 'phosphor-react-native';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput } from 'react-native';
import MyCalendarPicker from '../components/CalenderPicker';
import React, { useEffect, useState } from 'react';
import { getProfile, getProfileById } from '../services/user';
import { HomeParamList } from '../stack/HomeStack';
import moment from 'moment';
import CalenderPickerEnd from '../components/CalenderPickerEnd';
import { createBooking, paymentBookingCustomer, paymentBookingOwner } from '../services/booking';
import { createNotification } from '../services/notification';
import { MenuParamList } from '../stack/MenuStack';

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
    account_linked: boolean;
    roles: any;
    Exptime: string;
}

export interface IProfileOwner {
    coins: number;
    email: string;
}

const Booking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();
    const navigationMybooking = useNavigation<NativeStackNavigationProp<MenuParamList>>();

    const { params } = useRoute<RouteProp<HomeParamList, 'Booking'>>();
    const [dayOpenAll, setDayOpenAll] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setphoneNumber] = useState('');
    const [Carmodel, setCarmodel] = useState('');
    const [Carcolor, setCarcolor] = useState('');
    const [Carregistration, setCarregistration] = useState('');

    const handleBook = async () => {
        console.log(startDate);
        const res: any = await createBooking({
            customerId: profile._id,
            parking_name: params.Title,
            timestart: startTime,
            timestop: TimeEnd,
            ReservedBy: firstname + '' + lastname,
            phoneNumber: phoneNumber,
            carModel: Carmodel,
            carColor: Carcolor,
            carRegistration: Carregistration,
            totalPrice: totalPrice,
            dateStart: startDate,
            dateEnd: DateEnd
        });
        if (res.message === 'createBooking successfully') {
            createNoti();
            payment();
            navigationMybooking.navigate('BookingStack');
        }
        // console.log('res createBooking', res);
    };

    useEffect(() => {
        const dayOpen = [];
        if (params.mo === true) {
            dayOpen.push('Mo');
        }
        if (params.tu === true) {
            dayOpen.push('Tu');
        }
        if (params.we === true) {
            dayOpen.push('We');
        }
        if (params.th === true) {
            dayOpen.push('Th');
        }
        if (params.fr === true) {
            dayOpen.push('Fr');
        }
        if (params.sa === true) {
            dayOpen.push('Sat');
        }
        if (params.su === true) {
            dayOpen.push('Sun');
        }
        const result = dayOpen.join('-');
        setDayOpenAll(result);
    }, []);

    const [show, setShow] = useState(false);
    const [ticker, setTicker] = useState(false);
    const [show2, setShow2] = useState(false);
    const [ticker2, setTicker2] = useState(false);
    const [startDate, setStartDate] = useState();
    const [startTime, setStartTime] = useState('Start date & time');
    const [DateEnd, setDateEnd] = useState();
    const [TimeEnd, setTimeEnd] = useState('End date & time');
    const [hours, setHours] = useState(0);
    const [totalPrice, settotalPrice] = useState(0);

    const [profileOwner, setProfileOwner] = React.useState<IProfileOwner>({
        coins: 0,
        email: ''
    });

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
        verification_status: false,
        account_linked: false,
        roles: [],
        Exptime: ''
    });

    const createNoti = async () => {
        const NotificationCustomer: any = await createNotification({
            userId: profile._id,
            Parking_ownerId: params.parkingownerId,
            Topic: 'Outgoing coins list',
            Booking: true,
            From: params.ProviderBy,
            Parking_name: params.Title,
            Coins: totalPrice
        });

        const NotificationOwner: any = await createNotification({
            userId: params.parkingownerId,
            Parking_ownerId: params.parkingownerId,
            Topic: 'Incoming coins list',
            Booking: true,
            From: profile.firstname + ' ' + profile.lastname,
            Parking_name: params.Title,
            Coins: totalPrice
        });
    };

    const getUserProfileOwner = async () => {
        const { data } = await getProfileById({
            id: params.parkingownerId
        });
        console.log('Owner profile ', data);
        setProfileOwner(data);
    };

    const payment = async () => {
        const body = {
            coins: profileOwner.coins,
            addcoins: totalPrice
        };
        const body2 = {
            coins: profile.coins,
            withdrawmoney: totalPrice
        };
        await paymentBookingOwner(profileOwner.email, body);
        await paymentBookingCustomer(profile.email, body2);
    };

    const getUserProfile = async () => {
        const { data } = await getProfile();
        // console.log('user profile ', data);
        setProfile(data);
    };

    const handleOpen1 = () => {
        setTicker(true);
        setShow(!show);
    };

    const handleOpen2 = () => {
        setTicker2(true);
        setShow2(!show2);
    };

    useEffect(() => {
        getUserProfile();
        getUserProfileOwner();
    }, []);

    useEffect(() => {
        if (DateEnd !== undefined) {
            const date1 = moment(startDate);
            const date2 = moment(DateEnd);

            const diffInHours = date2.diff(date1, 'hours');
            const total = diffInHours * Number(params.Price);
            setHours(diffInHours);
            settotalPrice(total);
        }
    }, [DateEnd]);

    return (
        <View style={styles.container}>
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft weight="bold" size={20} color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Booking</Text>
            </View>
            <View style={styles.line} />

            <ScrollView>
                <View style={styles.content}>
                    <Text style={styles.title}>{params.Title}</Text>
                    <View style={styles.rowDetail}>
                        <CoinVertical weight="fill" size={20} color="#262D57" />
                        <Text style={styles.bodyText}>{params.Price} Coins / hr</Text>
                    </View>

                    <View style={styles.rowDetail}>
                        <MapPin size={20} color="#262D57" weight="fill" />
                        <Text style={styles.bodyText}>{params.Location_address}</Text>
                    </View>

                    <View style={styles.rowDetail}>
                        <Clock size={20} color="#262D57" weight="fill" />
                        <Text style={styles.bodyText}>
                            {dayOpenAll} | {params.TimeOpen} - {params.TimeClose}
                        </Text>
                    </View>

                    <View style={styles.rowDetail}>
                        <User size={20} color="#262D57" weight="fill" />
                        <View style={styles.row}>
                            <Text style={styles.bodyText}>Provider by </Text>
                            <Text style={styles.SemiText_1}>{params.ProviderBy}</Text>
                        </View>
                    </View>

                    <View style={styles.rowDetail}>
                        <Phone size={20} color="#262D57" weight="fill" />
                        <Text style={styles.SemiText_2}>{params.PhoneCall}</Text>
                    </View>

                    <TouchableOpacity style={styles.btnChooseDateAndTime} onPress={handleOpen1}>
                        <CalendarPlus size={24} color="#565E8B" />
                        <Text style={styles.longTextInput}>{startTime}</Text>
                        <View>
                            <CaretRight size={16} color="#565E8B" />
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.btnChooseDateAndTime} onPress={handleOpen2}>
                        <CalendarPlus weight="fill" size={24} />
                        <Text style={styles.longTextInput}>{TimeEnd}</Text>
                        <View>
                            <CaretRight size={16} color="#565E8B" />
                        </View>
                    </TouchableOpacity>

                    <View style={styles.textInputContainer}>
                        <View style={[styles.firstNameAndCarModel]}>
                            <TextInput
                                placeholder="First Name"
                                keyboardType="email-address"
                                style={styles.shortTextInput}
                                onChangeText={text => setFirstname(text)}
                            />
                        </View>
                        <View style={[styles.lastNameAndCarColor]}>
                            <TextInput
                                placeholder="Last Name"
                                keyboardType="email-address"
                                style={styles.shortTextInput}
                                onChangeText={text => setLastname(text)}
                            />
                        </View>
                    </View>

                    <View style={styles.textInputPhone}>
                        <Phone size={24} color="#565E8B" />
                        <TextInput
                            placeholder="phone number"
                            keyboardType="email-address"
                            style={styles.longTextInput}
                            onChangeText={text => setphoneNumber(text)}
                        />
                    </View>

                    <View style={styles.row}>
                        <View style={[styles.firstNameAndCarModel]}>
                            <TextInput
                                placeholder="Car model"
                                keyboardType="email-address"
                                style={styles.shortTextInput}
                                onChangeText={text => setCarmodel(text)}
                            />
                        </View>
                        <View style={[styles.lastNameAndCarColor]}>
                            <TextInput
                                placeholder="Car color"
                                keyboardType="email-address"
                                style={styles.shortTextInput}
                                onChangeText={text => setCarcolor(text)}
                            />
                        </View>
                    </View>

                    <View style={styles.textInputCarRegistration}>
                        <TextInput
                            placeholder="Car registration"
                            keyboardType="email-address"
                            style={styles.longTextInput}
                            onChangeText={text => setCarregistration(text)}
                        />
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <View style={styles.row}>
                    <Text style={styles.footerText_1}>Number of hours:</Text>
                    <Text style={styles.footerText_1}>{hours} hr</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.footerText_2}>Total price:</Text>
                    <Text style={styles.footerText_2}>{totalPrice} Coin</Text>
                </View>
                <TouchableOpacity style={styles.btnBook} onPress={handleBook}>
                    <Text style={styles.textBook}>BOOK</Text>
                </TouchableOpacity>
            </View>
            <MyCalendarPicker
                setVisible={show}
                ticker={ticker}
                selectDate={value => {
                    setStartDate(value);
                }}
                selectTime={value => {
                    setStartTime(value);
                }}></MyCalendarPicker>
            <CalenderPickerEnd
                setVisible={show2}
                ticker={ticker2}
                selectDateEnd={value => {
                    setDateEnd(value);
                }}
                selectTimeEnd={value => {
                    setTimeEnd(value);
                }}></CalenderPickerEnd>
        </View>
    );
};
export default Booking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF'
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
    content: {
        paddingVertical: 15,
        paddingHorizontal: 25
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingBottom: 16
    },
    rowDetail: {
        flexDirection: 'row',
        paddingBottom: 10,
        alignItems: 'center'
    },
    bodyText: {
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#262D57',
        paddingLeft: 12
    },
    SemiText_1: {
        fontFamily: 'RedHatText-SemiBold',
        fontSize: 14,
        color: '#262D57',
        paddingLeft: 8
    },
    SemiText_2: {
        fontFamily: 'RedHatText-SemiBold',
        fontSize: 14,
        color: '#262D57',
        paddingLeft: 12
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    textboxName: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%',
        padding: 10
    },
    textboxLastname: {
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        borderColor: '#10152F',
        width: '48%',
        padding: 10
    },
    btnChooseDateAndTime: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16,
        borderWidth: 1,
        borderColor: '#7F85B2',
        marginTop: 6,
        marginBottom: 12
    },
    longTextInput: {
        flex: 1,
        padding: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    textInputContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 6
    },
    shortTextInput: {
        flex: 1,
        paddingVertical: 16,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    firstNameAndCarModel: {
        flex: 1,
        marginRight: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 18,
        paddingHorizontal: 16
    },
    lastNameAndCarColor: {
        flex: 1,
        marginLeft: 10,
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginBottom: 18,
        paddingHorizontal: 16
    },
    textInputPhone: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 18
    },
    textInputCarRegistration: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12
    },

    footer: {
        backgroundColor: '#10152F',
        paddingVertical: 25,
        paddingHorizontal: 25
    },
    footerText_1: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF',
        paddingBottom: 12
    },
    footerText_2: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF',
    },
    btnBook: {
        backgroundColor: '#FEFA94',
        borderRadius: 12,
        marginTop: 12,
        width: '100%',
        paddingHorizontal: 12,
    },
    textBook: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 12
    }
});

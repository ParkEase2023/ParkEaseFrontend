import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { CaretLeft, MapPin } from 'phosphor-react-native';
import TicketParkEase from '../assets/TicketParkEase.png';
import LinearGradient from 'react-native-linear-gradient';
import LogoParkEase2 from '../assets/LogoParkEase2.png';
import { getProfile } from '../services/user';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackList } from '../stack/RootStack';
import { getBooking } from '../services/booking';
import Moment from 'react-moment';
import moment from 'moment';
import { MenuParamList } from '../stack/MenuStack';

export interface IProfile {
    _id: string;
}

interface ImyBooking {
    userId: string;
    parking_name: string;
    dateStart: any;
    dateEnd: any;
    totalPrice: number;
    ReservedBy: string;
    phoneNumber: string;
    carModel: string;
    carColor: string;
    carRegistration: string;
}

const MyBooking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
    const navigation2 = useNavigation<NativeStackNavigationProp<MenuParamList>>();
    const [myBooking, setMyBooking] = useState<ImyBooking>({
        userId: '',
        parking_name: '',
        dateStart: '',
        dateEnd: '',
        totalPrice: 0,
        ReservedBy: '',
        phoneNumber: '',
        carModel: '',
        carColor: '',
        carRegistration: ''
    });
    const [checkData, setCheckData] = useState('');
    const [profile, setProfile] = React.useState<IProfile>({
        _id: ''
    });
    const [hours, setHours] = useState(0)
    const [timeout, setTimeout] = useState(0)
    const currentTime = new Date();
    const getDataBooking = async () => {
        const { data } = await getProfile();
        const list: any = await getBooking(data._id);
        await setMyBooking(list.myBooking[0]);
        await setCheckData(list.message);
        const date1 = moment(list.myBooking[0].dateStart);
        const date2 = moment( list.myBooking[0].dateEnd);
        const date3 = moment(currentTime);
        const diffInHours = date2.diff(date1, 'hours');
        const diffInHours2 = date2.diff(date3, 'minute');
        setTimeout(diffInHours2)
        setHours(diffInHours)
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            getDataBooking();
        });
        return unsubscribe;
    }, [navigation]);

    const RenderMyBooking = (): JSX.Element | null => {
        if (checkData === 'success' && timeout > 0) {
            return (
                <>
                    <View style={styles.ticketContainer}>
                        <ImageBackground
                            source={TicketParkEase}
                            blurRadius={2}
                            style={styles.ticketBGImage}>
                            <LinearGradient
                                colors={['rgba(16, 21, 47, 0.6)', '#10152F']}
                                style={styles.linearGradient}></LinearGradient>
                            <Image source={LogoParkEase2} style={styles.imageLogoParkEase2} />
                        </ImageBackground>
                        <View style={styles.ticketHeader}>
                            <View style={styles.rowPlace}>
                                <MapPin size={20} weight="fill" color="#FEFA94" />
                                <Text style={styles.place} numberOfLines={1}>
                                    {myBooking.parking_name}
                                </Text>
                            </View>
                            <View style={styles.rowDate}>
                                <Text style={styles.date}>
                                    <Moment format="DD MMM" element={Text}>
                                        {myBooking.dateStart}
                                    </Moment>
                                </Text>
                                <Text style={styles.date}>
                                    <Moment format="DD MMM" element={Text}>
                                        {myBooking.dateEnd}
                                    </Moment>
                                </Text>
                            </View>
                            <View style={styles.rowTime}>
                                <Text style={styles.time}>
                                    <Moment format="HH:mm" element={Text}>
                                        {myBooking.dateStart}
                                    </Moment>
                                </Text>
                                <Text style={styles.totalHr}>{hours} h</Text>
                                <Text style={styles.time}>
                                    <Moment format="HH:mm" element={Text}>
                                        {myBooking.dateEnd}
                                    </Moment>
                                </Text>
                            </View>
                            <View
                                style={[
                                    styles.whiteCircle,
                                    { position: 'absolute', bottom: -32, left: -32 }
                                ]}
                            />
                            <View
                                style={[
                                    styles.whiteCircle,
                                    { position: 'absolute', bottom: -32, right: -32 }
                                ]}
                            />
                        </View>

                        <View style={styles.linear}></View>

                        <View style={styles.ticketFooter}>
                            <View
                                style={[
                                    styles.whiteCircle,
                                    { position: 'absolute', top: -42, left: -32 }
                                ]}
                            />
                            <View
                                style={[
                                    styles.whiteCircle,
                                    { position: 'absolute', top: -42, right: -32 }
                                ]}
                            />
                            <View style={styles.rowFooter}>
                                <View style={styles.flexReserved}>
                                    <Text style={styles.lable}>Reserved by</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        {myBooking.ReservedBy}
                                    </Text>
                                </View>
                                <View style={styles.flexPhoneNumber}>
                                    <Text style={styles.lable}>Phone Number</Text>
                                    <Text style={styles.Input}>{myBooking.phoneNumber.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3")}</Text>
                                </View>
                            </View>

                            <View style={styles.rowFooter}>
                                <View style={styles.flexCarModel}>
                                    <Text style={styles.lable}>Car Model</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        {myBooking.carModel}
                                    </Text>
                                </View>
                                <View style={styles.flexCarColor}>
                                    <Text style={styles.lable}>Car Color</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        {myBooking.carColor}
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.rowFooter}>
                                <View style={styles.flexCarRegistration}>
                                    <Text style={styles.lable}>Car Registration</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        {myBooking.carRegistration}
                                    </Text>
                                </View>
                                <View style={styles.flexTotalPrice}>
                                    <Text style={styles.lable}>Total Price</Text>
                                    <Text style={styles.Input}>{myBooking.totalPrice} Coins</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity onPress={()=>navigation2.navigate("HomeStack",{state:undefined})}>
                    <CaretLeft size={28} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.topic}>My Booking</Text>
            </View>
            <View style={styles.circleBig} />
            <ScrollView style={styles.container}>
                <RenderMyBooking></RenderMyBooking>             
            </ScrollView>
            <View style={styles.circleSmall} />
        </View>
    );
};

export default MyBooking;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#EEF0FF'
    },
    flexHeader: {
        flex: 1
    },
    flexMain: {
        flex: 7
    },
    flexFooter: {
        flex: 1
    },
    rowTopic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16
    },
    topic: {
        marginLeft: 16,
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#10152F'
    },
    circleBig: {
        position: 'absolute',
        width: 332,
        height: 332,
        borderRadius: 200,
        backgroundColor: '#CED2EA',
        top: -170,
        left: -105,
        zIndex: -1
    },
    container: {
        paddingHorizontal: 25,
        marginTop: 75
    },
    ticketContainer: {
        flex: 1,
        width: 332,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: '#10152F'
    },
    ticketBGImage: {
        alignSelf: 'center',
        width: 336,
        aspectRatio: 750 / 300,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        overflow: 'hidden',
        justifyContent: 'flex-end'
    },
    linearGradient: {
        height: '100%'
    },
    imageLogoParkEase2: {
        position: 'absolute',
        bottom: 28,
        left: 108
    },
    ticketHeader: {
        backgroundColor: '#10152F',
        width: 336,
        paddingTop: 16,
        paddingBottom: 40,
        paddingHorizontal: 25,
        alignSelf: 'center'
    },
    rowPlace: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    place: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#CED2EA',
        marginLeft: 6
    },
    rowDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 22
    },
    date: {
        fontSize: 14,
        fontFamily: 'RedHatText-SemiBold',
        color: '#7F85B2'
    },
    rowTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    time: {
        fontSize: 32,
        fontFamily: 'RedHatText-Bold',
        color: '#CED2EA'
    },
    totalHr: {
        fontSize: 14,
        fontFamily: 'RedHatText-SemiBold',
        color: '#7F85B2'
    },

    // Line
    whiteCircle: {
        width: 64,
        height: 64,
        borderRadius: 100,
        backgroundColor: '#EEF0FF'
    },
    linear: {
        borderTopColor: '#7F85B2',
        borderTopWidth: 2.5,
        paddingBottom: 10,
        width: 336,
        backgroundColor: '#10152F',
        borderStyle: 'dashed'
    },

    // Ticket Footer
    ticketFooter: {
        backgroundColor: '#10152F',
        width: 336,
        paddingBottom: 10,
        paddingHorizontal: 25,
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
        alignSelf: 'center'
    },
    rowFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30,
        marginBottom: 20
    },
    flexReserved: {
        flex: 1,
        paddingRight: 50
    },
    lable: {
        fontSize: 12,
        fontFamily: 'RedHatText-SemiBold',
        color: '#7F85B2'
    },
    Input: {
        fontSize: 15,
        fontFamily: 'RedHatText-Bold',
        color: '#CED2EA'
    },
    flexPhoneNumber: {
        flex: 1
    },
    flexCarModel: {
        flex: 1,
        paddingRight: 50
    },
    flexCarColor: {
        flex: 1
    },
    flexCarRegistration: {
        flex: 1,
        paddingRight: 50
    },
    flexTotalPrice: {
        flex: 1
    },
    circleSmall: {
        zIndex: -1,
        position: 'absolute',
        width: 95,
        height: 95,
        borderRadius: 100,
        backgroundColor: '#D7DAEF',
        bottom: 8,
        right: -20
    }
});

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground
} from 'react-native';
import React from 'react';
import { CaretLeft, MapPin } from 'phosphor-react-native';
import TicketParkEase from '../assets/TicketParkEase.png';
import LinearGradient from 'react-native-linear-gradient';

const MyBooking = () => {
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity>
                    <CaretLeft size={28} weight="bold" color="#EEF0FF" />
                </TouchableOpacity>
                <Text style={styles.topic}>My Booking</Text>
            </View>
            <View style={styles.circle} />
            <ScrollView style={styles.container}>
                <View style={styles.ticketContainer}>
                    <ImageBackground source={TicketParkEase} style={styles.ticketBGImage}>
                        <LinearGradient
                            colors={['#FEFA94', '#94FEBF']}
                            style={styles.linearGradient}>

                            </LinearGradient>
                    </ImageBackground>
                    <View style={styles.ticketHeader}>
                        <View style={styles.rowPlace}>
                            <MapPin size={20} weight="fill" color="#94FEBF" />
                            <Text style={styles.place}>อาคารจอดรถ 5 ชั้น</Text>
                        </View>
                        <View style={styles.rowDate}>
                            <Text style={styles.date}>22 Dec</Text>
                            <Text style={styles.date}>24 Dec</Text>
                        </View>
                        <View style={styles.rowTime}>
                            <Text style={styles.time}>09:00</Text>
                            <Text style={styles.totalHr}>61 h</Text>
                            <Text style={styles.time}>22:00</Text>
                        </View>
                    </View>

                    <View style={styles.linear}></View>

                    <View style={styles.ticketFooter}>
                        <View style={styles.rowFooter}>
                            <View style={styles.flexReserved}>
                                <Text style={styles.lable}>Reserved by</Text>
                                <Text style={styles.reserved}>Kierra Aminoff</Text>
                            </View>
                            <View style={styles.flexPhoneNumber}>
                                <Text style={styles.lable}>Phone Number</Text>
                                <Text style={styles.phoneNumber}>089-555-0120</Text>
                            </View>
                        </View>

                        <View style={styles.rowFooter}>
                            <View style={styles.flexCarModel}>
                                <Text style={styles.lable}>Car Model</Text>
                                <Text style={styles.carModel}>Toyota</Text>
                            </View>
                            <View style={styles.flexCarColor}>
                                <Text style={styles.lable}>Car Color</Text>
                                <Text style={styles.carColor}>สีเทา</Text>
                            </View>
                        </View>

                        <View style={styles.rowFooter}>
                            <View style={styles.flexCarRegistration}>
                                <Text style={styles.lable}>Car Registration</Text>
                                <Text style={styles.carRegistration}>คซ 123</Text>
                            </View>
                            <View style={styles.flexTotalPrice}>
                                <Text style={styles.lable}>Total Price</Text>
                                <Text style={styles.totalPrice}>610 Coins</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>
            <View style={styles.circleSmall} />
        </View>
    );
};

export default MyBooking;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#10152F'
    },
    rowTopic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 40,
        marginLeft: 25
    },
    topic: {
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#EEF0FF',
        marginLeft: 20
    },
    circle: {
        position: 'absolute',
        width: 287,
        height: 287,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -72,
        left: -144
    },
    container: {
        flex: 1,
        paddingHorizontal: 25,
        marginBottom: 120
    },
    ticketContainer: {
        marginTop: 80,
        borderRadius: 16,
        backgroundColor: '#EEF0FF',
        padding: 16
    },
    ticketBGImage: {
        width: '100%',
        height: 200,
        borderRadius: 16,
        overflow: 'hidden'
    },
    linearGradient: {
        flex: 1,
        padding: 16,
        justifyContent: 'flex-end'
    },
    ticketHeader: {
        marginTop: 16
    },
    rowPlace: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    place: {
        fontSize: 20,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A',
        marginLeft: 10
    },
    rowDate: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    date: {
        fontSize: 16,
        fontFamily: 'RedHatText-Regular',
        color: '#2C2F4A'
    },
    rowTime: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    time: {
        fontSize: 16,
        fontFamily: 'RedHatText-Regular',
        color: '#2C2F4A'
    },
    totalHr: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    linear: {
        height: 1,
        backgroundColor: '#D4D7E6',
        marginTop: 16
    },
    ticketFooter: {
        marginTop: 16
    },
    rowFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 16
    },
    flexReserved: {
        flex: 1
    },
    lable: {
        fontSize: 16,
        fontFamily: 'RedHatText-Regular',
        color: '#2C2F4A'
    },
    reserved: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    flexPhoneNumber: {
        flex: 1
    },
    phoneNumber: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    flexCarModel: {
        flex: 1
    },
    carModel: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    flexCarColor: {
        flex: 1
    },
    carColor: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    flexCarRegistration: {
        flex: 1
    },
    carRegistration: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    flexTotalPrice: {
        flex: 1
    },
    totalPrice: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A'
    },
    circleSmall: {
        position: 'absolute',
        width: 144,
        height: 144,
        borderRadius: 200,
        backgroundColor: '#262D57',
        bottom: -72,
        right: -72
    }
});

import {
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ImageBackground,
    Image
} from 'react-native';
import React from 'react';
import { CaretLeft, MapPin } from 'phosphor-react-native';
import TicketParkEase from '../assets/TicketParkEase.png';
import LinearGradient from 'react-native-linear-gradient';
import LogoParkEase2 from '../assets/LogoParkEase2.png';

const RetrospectiveBooking = () => {
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity>
                    <CaretLeft size={28} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.topic}>Retrospective Booking</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.flexHeader} />
            <View style={styles.flexMain}>
                <ScrollView style={styles.container}>
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
                                    อาคารจอดรถ 5 ชั้น
                                </Text>
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
                                        Kierra Aminoff
                                    </Text>
                                </View>
                                <View style={styles.flexPhoneNumber}>
                                    <Text style={styles.lable}>Phone Number</Text>
                                    <Text style={styles.Input}>089-555-0120</Text>
                                </View>
                            </View>

                            <View style={styles.rowFooter}>
                                <View style={styles.flexCarModel}>
                                    <Text style={styles.lable}>Car Model</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        Toyota
                                    </Text>
                                </View>
                                <View style={styles.flexCarColor}>
                                    <Text style={styles.lable}>Car Color</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        สีเทา
                                    </Text>
                                </View>
                            </View>

                            <View style={styles.rowFooter}>
                                <View style={styles.flexCarRegistration}>
                                    <Text style={styles.lable}>Car Registration</Text>
                                    <Text style={styles.Input} numberOfLines={1}>
                                        คซ 123
                                    </Text>
                                </View>
                                <View style={styles.flexTotalPrice}>
                                    <Text style={styles.lable}>Total Price</Text>
                                    <Text style={styles.Input}>610 Coins</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={styles.flexFooter} />
            <View style={styles.circleSmall} />
        </View>
    );
};

export default RetrospectiveBooking;

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
        flex: 1,
        textAlign: 'center',
        marginLeft: -28,
        fontSize: 20,
        fontFamily: 'RedHatText-Medium',
        color: '#10152F'
    },
    line: {
        width: '100%',
        height: 1,
        backgroundColor: '#CED2EA'
    },
    container: {
        paddingHorizontal: 25
    },
    ticketContainer: {
        flex: 1,
        width: 332,
        borderRadius: 30,
        alignSelf: 'center',
        backgroundColor: '#10152F',
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
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: '#CED2EA'
    },
    flexPhoneNumber: {
        flex: 1
    },
    flexCarModel: {
        flex: 1,
        paddingRight: 78
    },
    flexCarColor: {
        flex: 1
    },
    flexCarRegistration: {
        flex: 1,
        paddingRight: 78
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

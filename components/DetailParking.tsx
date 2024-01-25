import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CaretRight, Clock, CoinVertical, Heart, MapPin, NavigationArrow, Phone, Star, User } from 'phosphor-react-native';
import Comment from './Comment';

const DetailParking = () => {
    return (
        <View style={styles.mainContainer}>
            <View style={{ minHeight: 500 }}>
                <View style={styles.title}>
                    <Text style={styles.textTitle}>อาคารจอดรถ 5 ชั้น</Text>
                    <View style={styles.rate}>
                        <Star size={12} weight="fill" color="#FFDE00" />
                        <Text style={styles.textRate}>4.5</Text>
                    </View>
                </View>

                <View style={styles.rowCostOC}>
                    <View style={styles.coins}>
                        <CoinVertical size={20} weight="fill" color="#FFDE00" />
                        <Text style={styles.textCoins}>10 Coins/hr</Text>
                    </View>
                    <Text style={styles.textOC}>Open</Text>
                </View>

                <TouchableOpacity style={styles.btnBooking}>
                    <Text style={styles.textBooking}>BOOKING</Text>
                </TouchableOpacity>

                <View style={styles.containerBtn}>
                    <TouchableOpacity style={styles.btnNavigate}>
                        <NavigationArrow size={20} weight="fill" color="#262D57" />
                        <Text style={styles.textNavigate}>Navigate</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnCall}>
                        <Phone size={20} weight="fill" color="#262D57" />
                        <Text style={styles.textCall}>Call</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnHeart}>
                        <Heart size={20} weight="fill" color="#EEF0FF" />
                    </TouchableOpacity>
                </View>

                <View style={styles.containerImg}>
                    <Image source={require('../assets/IMGParking_1.jpg')} style={styles.imgLeft} />
                    <View style={styles.imgRight}>
                        <Image
                            source={require('../assets/IMGParking_2.jpg')}
                            style={styles.imgTop}
                        />
                        <Image
                            source={require('../assets/IMGParking_3.jpg')}
                            style={styles.imgLower}
                        />
                    </View>
                </View>

                <View style={styles.location}>
                    <MapPin size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textLocation}>
                        126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha
                        Nakhon 10140
                    </Text>
                </View>

                <View style={styles.time}>
                    <Clock size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textTime}>Mo-Sat | 07:00 - 22:00</Text>
                </View>

                <View style={styles.provider}>
                    <User size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textProvider}>Provider by </Text>
                    <Text style={styles.textProviderName}>Brandon Stanton</Text>
                </View>

                <Text style={styles.titleRateReview}>Rate & Review</Text>

                <View style={styles.rowRateReview}>
                    <View style={styles.rowItemLeft}>
                        <Image
                            source={require('../assets/smallProfile.png')}
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
    textOC: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#55FFAA'
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

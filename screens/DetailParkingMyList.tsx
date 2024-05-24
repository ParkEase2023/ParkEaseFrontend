import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
    CaretLeft,
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

const DetailParkingMyList = () => {
    return (
        <ScrollView style={styles.mainContainer}>
            <CaretLeft size={20} weight="bold" color="#262D57" />
            <View style={styles.title}>
                {/* <Text style={styles.textTitle}>{props.Title}</Text> */}
                <View style={styles.rate}>
                    <Star size={12} weight="fill" color="#FFA800" />
                    {/* <Text style={styles.textRate}>{SumRate}</Text> */}
                </View>
            </View>

            <View style={styles.rowCostOC}>
                <View style={styles.coins}>
                    <CoinVertical size={20} weight="fill" color="#FFA800" />
                    {/* <Text style={styles.textCoins}>{props.Price} Coins/hr</Text> */}
                </View>
                {/* <ReaderBtn></ReaderBtn> */}
            </View>

            <TouchableOpacity style={styles.btnBooking}>
                <Text style={styles.textBooking}>BOOKING</Text>
            </TouchableOpacity>

            <View style={styles.containerBtn}>
                <TouchableOpacity style={styles.btnNavigate}>
                    <NavigationArrow size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textNavigate}>Navigate</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnCall}>
                    <Phone size={20} weight="fill" color="#EEF0FF" />
                    <Text style={styles.textCall}>Call</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnHeart}>
                    <Heart size={20} weight="fill" color="#EEF0FF" />
                    {/* <Heart></Heart> */}
                </TouchableOpacity>
            </View>

            <View style={styles.containerImg}>
                {/* <Image source={{ uri: props.Parking_picture1 }} style={styles.imgLeft} /> */}
                <View style={styles.imgRight}>
                    {/* <Image source={{ uri: props.Parking_picture2 }} style={styles.imgTop} />
                        <Image source={{ uri: props.Parking_picture3 }} style={styles.imgLower} /> */}
                </View>
            </View>

            <View style={styles.location}>
                <MapPin size={20} weight="fill" color="#10152F" />
                {/* <Text style={styles.textLocation}>{props.Location_address}</Text> */}
            </View>

            <View style={styles.time}>
                <Clock size={20} weight="fill" color="#10152F" />
                {/* <Text style={styles.textTime}>
                        {dayOpenAll} | {props.TimeOpen} - {props.TimeClose}
                    </Text> */}
            </View>

            <View style={styles.provider}>
                <User size={20} weight="fill" color="#10152F" />
                <Text style={styles.textProvider}>Provider by </Text>
                {/* <Text style={styles.textProviderName}>{props.ProviderBy}</Text> */}
            </View>

            <Text style={styles.titleRateReview}>Rate & Review</Text>
            <TouchableOpacity
            // onPress={() =>
            //     navigation.navigate('Review', {
            //         parkingId: props.parkingId,
            //         parking_name: props.Title
            //     })
            // }
            >
                <View style={styles.rowRateReview}>
                    <View style={styles.rowItemLeft}>
                        {/* <Image
                                source={{ uri: props.profile_picture }}
                                style={styles.smallProfile}
                            /> */}
                        <View style={styles.rowBigStar}>
                            <View style={styles.star}>
                                <Star size={30} weight="regular" color="#7F85B2" />
                            </View>
                            <View style={styles.star}>
                                <Star size={30} weight="regular" color="#7F85B2" />
                            </View>
                            <View style={styles.star}>
                                <Star size={30} weight="regular" color="#7F85B2" />
                            </View>
                            <View style={styles.star}>
                                <Star size={30} weight="regular" color="#7F85B2" />
                            </View>
                            <View style={styles.star}>
                                <Star size={30} weight="regular" color="#7F85B2" />
                            </View>
                        </View>
                    </View>

                    <CaretRight size={24} weight="bold" color="#7F85B2" />
                </View>
            </TouchableOpacity>
            <View style={styles.line} />
            {/* <RenderComment></RenderComment> */}
        </ScrollView>
    );
};

export default DetailParkingMyList;

const styles = StyleSheet.create({
    mainContainer: {
        paddingHorizontal: 25,
        backgroundColor: '#EEF0FF'
    },
    title: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginTop: 20,
        marginBottom: 12
    },
    textTitle: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRate: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#10152F',
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
        color: '#FFA800',
        marginLeft: 6
    },
    textOpen: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#239D60'
    },
    textClose: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EA4C4C'
    },

    btnBooking: {
        backgroundColor: '#10152F',
        paddingVertical: 12,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8
    },
    textBooking: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    },
    containerBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 25
    },
    btnNavigate: {
        backgroundColor: '#565E8B',
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
        color: '#EEF0FF',
        marginLeft: 6
    },
    btnCall: {
        backgroundColor: '#565E8B',
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
        color: '#EEF0FF',
        marginLeft: 6
    },
    btnHeart: {
        backgroundColor: '#565E8B',
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
        color: '#10152F',
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
        color: '#10152F',
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
        color: '#10152F',
        marginLeft: 16,
        marginRight: 8
    },
    textProviderName: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 14,
        color: '#10152F'
    },
    titleRateReview: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
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
        backgroundColor: '#7F85B2',
        marginBottom: 16
    }
});

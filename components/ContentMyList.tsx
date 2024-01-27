import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CoinVertical, Heart, Star } from 'phosphor-react-native';

const ContentMyList = () => {
    return (
        <TouchableOpacity style={styles.myListContainer}>

            <View style={styles.mainMyListContainer}>
                <View style={styles.topRow}>
                    <View style={styles.nameLocation}>
                        <Text style={styles.textNameLocation} numberOfLines={1}>อาคารจอดรถ 5 ชั้น</Text>
                    </View>
                    
                    <View style={styles.rate}>
                        <Star size={12} weight="fill" color="#FFA800" />
                        <Text style={styles.textRate}>4.5</Text>
                    </View>
                </View>

                <View style={styles.lowerRow}>
                    <View style={styles.coin}>
                        <CoinVertical size={20} weight="fill" color="#FFA800" />
                        <Text style={styles.textCoins}>10 Coins/hr</Text>
                    </View>
                    <Text style={styles.textOpen}>Open</Text>
                </View>
            </View>

            <TouchableOpacity>
                <View style={styles.bgBtnLike}>
                    <Heart size={20} weight="fill" color="#EA4C4C" style={styles.btnLike} />
                </View>
            </TouchableOpacity>

        </TouchableOpacity>
    );
};

export default ContentMyList;

const styles = StyleSheet.create({
    myListContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 10
    },
    mainMyListContainer: {
        padding: 16,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    nameLocation: {
        width: '76%',
    },
    textNameLocation: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57'
    },
    rate: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        right: -38,
    },
    textRate: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#262D57',
        marginLeft: 4
    },
    lowerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    coin: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCoins: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#FFA800',
        marginLeft: 2
    },
    textOpen: {
        position: 'absolute',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#239D60',
        right: -38,
    },
    bgBtnLike: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 81,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#EEF0FF'
    },
    btnLike: {
        marginHorizontal: 12,
    },
});

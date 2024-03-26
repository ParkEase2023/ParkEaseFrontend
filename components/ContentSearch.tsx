import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CoinVertical, Star } from 'phosphor-react-native';

const ContentSearch = () => {
    return (
        <TouchableOpacity style={styles.searchContainer}>
            <View style={styles.mainSearchContainer}>
                <View style={styles.topRow}>
                    <View style={styles.nameLocation}>
                        <Text style={styles.textNameLocation} numberOfLines={1}>
                            อาคารจอดรถ 5 ชั้น
                        </Text>
                    </View>

                    <View style={styles.rate}>
                        <Star size={12} weight="fill" color="#FFDE00" />
                        <Text style={styles.textRate}>4.5</Text>
                    </View>
                </View>

                <View style={styles.lowerRow}>
                    <View style={styles.coin}>
                        <CoinVertical size={20} weight="fill" color="#FFDE00" />
                        <Text style={styles.textCoins}>10 Coins/hr</Text>
                    </View>
                    <Text style={styles.textOpen}>Open</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default ContentSearch;

const styles = StyleSheet.create({
    searchContainer: {
        borderBottomColor: '#262D57',
        borderBottomWidth: 1
    },
    mainSearchContainer: {
        paddingHorizontal: 10,
        paddingVertical: 18,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
    },
    nameLocation: {
        width: '80%'
    },
    textNameLocation: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#fff'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRate: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#fff',
        marginLeft: 4
    },
    lowerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    coin: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCoins: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#FEFA94',
        marginLeft: 2
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
    }
});

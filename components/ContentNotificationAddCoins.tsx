import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ContentNotificationAddCoins = () => {
    return (
        <TouchableOpacity style={styles.NotificationContainer}>
            <View style={styles.row}>
                <Text style={styles.title}>Add coins</Text>
                <Text style={styles.price}>+ 500 Coins</Text>
            </View>

            <View style={styles.rowDate}>
                <Text style={styles.date}>21 Dec 2023 | 09:00</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ContentNotificationAddCoins;

const styles = StyleSheet.create({
    NotificationContainer: {
        backgroundColor: '#fff',
        borderRadius: 12,
        padding: 16,
        marginBottom: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 8
    },
    rowDate: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginBottom: 8
    },
    lastRow: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#10152F'
    },
    price: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#239D60'
    },
    rowName: {
        flexDirection: 'row'
    },
    conjunction: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 14,
        color: '#565E8B'
    },
    name: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 14,
        color: '#262D57',
        marginLeft: 6
    },
    date: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#262D57'
    },
    description: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#262D57'
    },
    location: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#262D57'
    }
});

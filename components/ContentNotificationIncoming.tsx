import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const ContentNotificationIncoming = () => {
    return (
        <TouchableOpacity style={styles.NotificationContainer}>
            <View style={styles.row}>
                <Text style={styles.title}>Incoming coins list</Text>
                <Text style={styles.price}>- 610 Coins</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.rowName}>
                    <Text style={styles.conjunction}>From</Text>
                    <Text style={styles.name}>Wilson Levin</Text>
                </View>
                <Text style={styles.date}>21 Dec 2023 | 08:30</Text>
            </View>

            <View style={styles.lastRow}>
                <Text style={styles.description}>Made a reservation at</Text>
                <Text style={styles.location}>“ที่จอดบ้านฉันเอง”</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ContentNotificationIncoming;

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

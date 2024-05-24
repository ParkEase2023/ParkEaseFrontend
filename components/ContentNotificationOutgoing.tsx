import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Moment from 'react-moment';

interface INotification {
    coins: number;
    date: string;
    to: string;
    Parking_name: string;
}

const ContentNotificationOutgoing = (props: INotification) => {
    return (
        <TouchableOpacity style={styles.NotificationContainer}>
            <View style={styles.row}>
                <Text style={styles.title}>Outgoing coins list</Text>
                <Text style={styles.price}>- {props.coins} Coins</Text>
            </View>

            <View style={styles.row}>
                <View style={styles.rowName}>
                    <Text style={styles.conjunction}>To</Text>
                    <Text style={styles.name}>{props.to}</Text>
                </View>
                <Text style={styles.date}>
                    <Moment format="DD/MM/YYYY" element={Text}>
                        {props.date}
                    </Moment>{' '}
                    |{' '}
                    <Moment format="HH:mm" element={Text}>
                        {props.date}
                    </Moment>
                </Text>
            </View>

            <View style={styles.lastRow}>
                <Text style={styles.description}>You have made a reservation at</Text>
                <Text style={styles.location}>“{props.Parking_name}”</Text>
            </View>
        </TouchableOpacity>
    );
};

export default ContentNotificationOutgoing;

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
        color: '#EA4C4C'
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

import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CaretLeft } from 'phosphor-react-native';
import ContentNotification from '../components/ContentNotification';

const Notification = () => {
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity>
                    <CaretLeft size={28} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.topic}>Notification</Text>
            </View>
            <View style={styles.line} />
            <ScrollView style={styles.container}>
                <ContentNotification />
            </ScrollView>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#DFE2F8'
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
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 16
    },
    textDate: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    },
});

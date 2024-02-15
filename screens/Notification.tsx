import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CaretLeft } from 'phosphor-react-native';
import ContentNotification from '../components/ContentNotificationAddCoins';
import ContentNotificationWithdraw from '../components/ContentNotificationWithdraw';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import ContentNotificationOutgoing from '../components/ContentNotificationOutgoing';
import ContentNotificationIncoming from '../components/ContentNotificationIncoming';

const Notification = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={28} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.topic}>Notification</Text>
            </View>
            <View style={styles.line} />
            <ScrollView style={styles.container}>
                <ContentNotification />
                <ContentNotificationWithdraw></ContentNotificationWithdraw>
                <ContentNotificationOutgoing></ContentNotificationOutgoing>
                <ContentNotificationIncoming></ContentNotificationIncoming>
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

import React from 'react';
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileParamList } from "../stack/ProfileStack";
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import ContentBookingHistory from '../components/ContentBookingHistory';
const BookingHistory = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    return (
        <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} color="#10152F" />
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.headerText}>Booking History</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.container}>
                <ContentBookingHistory />
            </View>
        </ScrollView>
    );
}
export default BookingHistory;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#D7DAEF',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 40,
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        marginTop: 10,
    },
    container: {
        // paddingVertical: 45,
        paddingHorizontal: 25,
    },
});
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CaretLeft, CoinVertical, Check } from 'phosphor-react-native';

const ApplyForMembership = () => {
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <CaretLeft weight='bold' color='#EEF0FF'/>
                <Text style={styles.topic}>Apply For Membership</Text>
            </View>
            <View style={styles.line}/>
            <ScrollView style={styles.container}>
                <View style={styles.member}>
                    <View style={styles.rowPrice}>
                        <CoinVertical size={22} weight='fill' color='#FEFA94' />
                        <Text style={styles.textPrice}>49</Text>
                        <Text style={styles.textMonth}>/mo</Text>
                    </View>
                    <Text style={styles.title}>Member</Text>

                    <View style={styles.rowCondition}>
                        <Check size={20} weight='bold' color='#94FEBF'/>
                        <Text style={styles.textCondition}>Can reservations</Text>
                    </View>
                    <View style={styles.rowCondition}>
                        <Check size={20} weight='bold' color='#94FEBF'/>
                        <Text style={styles.textCondition}>Can do transactions</Text>
                    </View>
                    <View style={styles.rowCondition}>
                        <Check size={20} weight='bold' color='#94FEBF'/>
                        <Text style={styles.textCondition}>Can add parking locations for information</Text>
                    </View>

                    <TouchableOpacity style={styles.btnStart}>
                        <Text style={styles.textStart}>GET STARTED NOW</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.partner}>
                    <View style={styles.rowPrice}>
                        <CoinVertical weight='fill' color='#FEFA94' />
                        <Text style={styles.textPrice}>99</Text>
                        <Text style={styles.textMonth}>/mo</Text>
                    </View>
                    <Text style={styles.title}>Partner</Text>

                    <View style={styles.rowCondition}>
                        <Check weight='bold' color='#94FEBF'/>
                        <Text style={styles.textCondition}>Partner have the same rights as members.</Text>
                    </View>
                    <View style={styles.rowCondition}>
                        <Check weight='bold' color='#94FEBF'/>
                        <Text style={styles.textCondition}>Can add parking locations for booking</Text>
                    </View>

                    <TouchableOpacity style={styles.btnStart}>
                        <Text style={styles.textStart}>GET STARTED NOW</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default ApplyForMembership;

const styles = StyleSheet.create({
    bg: {
        backgroundColor: '#10152F',
        flex: 1
    },
    container: {
        padding: 16
    },
    rowTopic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16
    },
    topic: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF',
    },
    line: {
        borderBottomColor: '#262D57',
        borderBottomWidth: 1,
    },
    member: {
        backgroundColor: '#1E2139',
        borderRadius: 16,
        padding: 16,
        marginBottom: 16
    },
    partner: {
        backgroundColor: '#1E2139',
        borderRadius: 16,
        padding: 16
    },
    rowPrice: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textPrice: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#FEFA94',
        marginLeft: 8
    },
    textMonth: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#BABCCA'
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#EEF0FF',
        marginTop: 16
    },
    rowCondition: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    textCondition: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#EEF0FF',
        marginLeft: 8
    },
    btnStart: {
        backgroundColor: '#FEFA94',
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 16
    },
    textStart: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    }
});

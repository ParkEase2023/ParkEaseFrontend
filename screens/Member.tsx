import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { CaretLeft } from 'phosphor-react-native';
import Honeycomb_green from '../assets/Honeycomb_green.png';
import Nobility from '../assets/Nobility.png';
import LinearGradient from 'react-native-linear-gradient';

const Member = () => {
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity>
                    <CaretLeft size={22} weight="bold" color="#EEF0FF" />
                </TouchableOpacity>
                <Text style={styles.topic}>Choose New Plan</Text>
            </View>
            <View style={styles.line} />
            <ScrollView>
                <Text style={styles.title}>Member</Text>
                <Image source={Honeycomb_green} style={styles.imageHoneycomb_green} />
                <Image source={Nobility} style={styles.imageNobility} />
                <View style={styles.description}>
                    <View style={styles.row}>
                        <Text style={styles.billingStart}>
                            Monthly charge{'\n'}Billing starts: Dec 21, 2023
                        </Text>
                        <Text style={styles.price}>49.00/mo</Text>
                    </View>
                    <View style={styles.line2} />
                    <Text style={styles.textDescription}>
                        And will be automatically renewed each month. Payments for partial billing
                        periods will not be reimbursed. In the Billing Information, you can cancel
                        at any time.
                    </Text>
                </View>
                <TouchableOpacity>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#FEFA94', '#94FEBF', '#95EDFF']}
                        style={styles.btnBuy}>
                        <Text style={styles.textBuy}>BUY</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default Member;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#10152F',
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
        color: '#EEF0FF'
    },
    line: {
        borderBottomColor: '#262D57',
        borderBottomWidth: 1
    },
    title: {
        color: '#EEF0FF',
        fontSize: 32,
        fontFamily: 'RedHatText-Bold',
        marginTop: 16,
        textAlign: 'center'
    },
    imageHoneycomb_green: {
        marginTop: 16,
        alignSelf: 'center'
    },
    imageNobility: {
        position: 'absolute',
        right: 50,
        top: 180
    },
    description: {
        marginTop: 16,
        paddingVertical: 12,
        paddingHorizontal: 25,
        backgroundColor: '#262D57',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    billingStart: {
        color: '#EEF0FF',
        fontSize: 16,
        fontFamily: 'RedHatText-Regular'
    },
    price: {
        color: '#EEF0FF',
        fontSize: 16,
        fontFamily: 'RedHatText-Bold'
    },
    line2: {
        borderBottomColor: '#7F85B2',
        borderBottomWidth: 1,
        marginVertical: 12
    },
    textDescription: {
        flex: 1,
        color: '#EEF0FF',
        fontSize: 14,
    },
    btnBuy: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 16,
        marginTop: 25,
        borderRadius: 16,
        marginHorizontal: 16
    },
    textBuy: {
        color: '#10152F',
        fontSize: 18,
        fontFamily: 'RedHatText-Bold'
    }
});

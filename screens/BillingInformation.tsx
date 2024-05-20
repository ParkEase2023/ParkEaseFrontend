import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { CaretLeft, Check, CoinVertical } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import ChangePlan from '../components/ChangeMember';
import CancelMember from '../components/CancelMember';
import { ProfileParamList } from '../stack/ProfileStack';
import Moment from 'react-moment';

const BillingInfo = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const dynamicValue1 = '(';
    const dynamicValue2 = ')';
    const { params } = useRoute<RouteProp<ProfileParamList, 'BillingInfo'>>();
    const [tickerpopup, setTickerpopup] = useState(false);
    const [showpopup, setShowpopup] = useState(false);
    const [tickerpopupChange, setTickerpopupChange] = useState(false);
    const [showpopupChange, setShowpopupChange] = useState(false);

    const RenderMain = (): JSX.Element | null => {
        if (params.roles[1] === 'partner') {
            return (
                <>
                    <View style={styles.rowHeader}>
                        <Text style={styles.headerSmallTextBody}>Partner {dynamicValue1}</Text>
                        <CoinVertical size={18} weight="fill" color="#262D57" />
                        <Text style={styles.headerSmallTextBody}> 99/month</Text>
                        <Text style={styles.headerSmallTextBody}> {dynamicValue2}</Text>
                    </View>
                    <View style={styles.firstRow}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>Can reservations</Text>
                    </View>
                    <View style={styles.row}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>Can do transactions</Text>
                    </View>
                    <View style={styles.row}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>
                            Can add parking locations for information
                        </Text>
                    </View>
                    <View style={styles.row}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>Can add parking locations for booking</Text>
                    </View>
                </>
            );
        } else {
            return (
                <>
                    <View style={styles.rowHeader}>
                        <Text style={styles.headerSmallTextBody}>Member {dynamicValue1}</Text>
                        <CoinVertical size={18} weight="fill" color="#262D57" />
                        <Text style={styles.headerSmallTextBody}> 49/month</Text>
                        <Text style={styles.headerSmallTextBody}> {dynamicValue2}</Text>
                    </View>
                    <View style={styles.firstRow}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>Can reservations</Text>
                    </View>
                    <View style={styles.row}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>Can do transactions</Text>
                    </View>
                    <View style={styles.row}>
                        <Check size={20} weight="bold" color="#239D60" />
                        <Text style={styles.textBody}>
                            Can add parking locations for information
                        </Text>
                    </View>
                </>
            );
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.contentHeader}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={20} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Billing information</Text>
            </View>
            <View style={styles.line} />

            <View style={styles.body}>
                <Text style={styles.headerTextBody}>Current plan</Text>
                <RenderMain></RenderMain>

                <View style={styles.space}>
                    <Text style={styles.headerTextBody}>Subscription renews on</Text>
                    <Text style={styles.textBody2}>
                        <Moment format="DD MMM YYYY" element={Text}>
                            {params.Exptime}
                        </Moment>
                    </Text>
                </View>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btnChance}
                    onPress={() => {
                        setShowpopupChange(!showpopupChange), setTickerpopupChange(true);
                    }}>
                    <Text style={styles.textChance}>CHANCE PLAN</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.btnCancel}
                    onPress={() => {
                        setShowpopup(!showpopup), setTickerpopup(true);
                    }}>
                    <Text style={styles.textCancel}>CANCEL MEMBERSHIP</Text>
                </TouchableOpacity>
            </View>

            <CancelMember setVisible={showpopup} ticker={tickerpopup} email={params.email} />
            <ChangePlan setVisible={showpopupChange} ticker={tickerpopupChange}></ChangePlan>
        </View>
    );
};

const styles = StyleSheet.create({
    rowHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 18,
        paddingBottom: 12
    },
    firstRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 8
    },
    headerSmallTextBody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#262D57'
    },
    textBody: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#565E8B',
        paddingLeft: 12
    },

    container: {
        backgroundColor: '#EEF0FF',
        flex: 1
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12
    },
    headerText: {
        flex: 1,
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        textAlign: 'center',
        color: '#10152F'
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    body: {
        flex: 8,
        paddingHorizontal: 25,
        paddingTop: 35
    },
    headerTextBody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F'
    },
    textBody2: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#262D57',
        marginTop: 18
    },
    space: {
        marginTop: 35
    },
    btnContainer: {
        flex: 2,
        paddingHorizontal: 25,
    },
    btnChance: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textChance: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    },
    btnCancel: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 20
    },
    textCancel: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#565E8B'
    }
});

export default BillingInfo;

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
                    <View style={styles.line}>
                        <Text style={styles.headerSmallTextBody}>Partner {dynamicValue1}</Text>
                        <View style={styles.iconCoin}>
                            <CoinVertical />
                        </View>
                        <Text style={styles.headerSmallTextBody}> 99/month</Text>
                        <Text style={styles.headerSmallTextBody}> {dynamicValue2}</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can see parking details</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can reservations</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can do transactions</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can add parking locations</Text>
                    </View>
                </>
            );
        } else {
            return (
                <>
                    <View style={styles.line}>
                        <Text style={styles.headerSmallTextBody}>Member {dynamicValue1}</Text>
                        <View style={styles.iconCoin}>
                            <CoinVertical />
                        </View>
                        <Text style={styles.headerSmallTextBody}> 49/month</Text>
                        <Text style={styles.headerSmallTextBody}> {dynamicValue2}</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can see parking details</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can reservations</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can do transactions</Text>
                    </View>
                    <View style={styles.line}>
                        <Check size={32} color="#11bb25" />
                        <Text style={styles.textBody}>Can add parking locations</Text>
                    </View>
                </>
            );
        }
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.contentHeader}>
                <View style={styles.caretLeft}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={22} color="#10152F" />
                    </TouchableOpacity>
                </View>
                <View style={styles.flexText}>
                    <Text style={styles.headerText}>Billing information</Text>
                </View>
                <View style={styles.caretLeft}></View>
            </View>
            <View style={styles.straingth}></View>
            <View style={styles.body}>
                <Text style={styles.headerTextBody}>Current plan</Text>
                <RenderMain></RenderMain>
                <View style={styles.space}>
                    <Text style={styles.headerTextBody}>Subscription renews on</Text>
                    {/* <Text style={styles.headerSmallTextBody}> 21 Dec 2023 </Text> */}
                    <Text style={styles.headerSmallTextBody}>
                        <Moment format="DD MMM YYYY" element={Text}>
                            {params.Exptime}
                        </Moment>
                    </Text>
                </View>
                <View style={styles.flexbuttom}>
                    <TouchableOpacity  style={styles.btnConfirm} onPress={() => {
                                setShowpopupChange(!showpopupChange), setTickerpopupChange(true);
                            }}>
                        <Text style={styles.textConfirm}>Change Plan</Text>
                    </TouchableOpacity>
                    <View style={styles.LineSpace}>
                        <TouchableOpacity
                            style={styles.btnConfirm2}
                            onPress={() => {
                                setShowpopup(!showpopup), setTickerpopup(true);
                            }}>
                            <Text style={styles.textConfirm2}>CANCEL MEMBERSHITP</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <CancelMember setVisible={showpopup} ticker={tickerpopup} email={params.email} />
                <ChangePlan setVisible={showpopupChange} ticker={tickerpopupChange}></ChangePlan>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EEF0FF',
        flex: 1,
        paddingVertical: 40
    },
    contentHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingBottom: 12
    },
    caretLeft: {
        flex: 1
    },
    flexText: {
        flex: 4,
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    },
    straingth: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    body: {
        paddingHorizontal: 25,
        paddingTop: 24
    },
    headerTextBody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#10152F'
    },
    line: {
        flexDirection: 'row'
    },
    headerSmallTextBody: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 16
    },
    iconCoin: {
        paddingVertical: 16,
        size: 22,
        color: '#3c402b'
    },
    textBody: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
        paddingLeft: 16
    },
    space: {
        paddingVertical: 40
    },
    flexbuttom: {
        paddingVertical: 180
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        width: 343,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    },
    LineSpace: {
        paddingVertical: 16
    },
    btnCancel: {
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#10152F',
        paddingVertical: 15
    },
    textCancel: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#10152F'
    },
    textConfirm2: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#565E8B'
    },
    btnConfirm2: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default BillingInfo;

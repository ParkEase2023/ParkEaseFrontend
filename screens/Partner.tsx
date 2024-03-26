import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { CaretLeft } from 'phosphor-react-native';
import Honeycomb_yellow from '../assets/Honeycomb_yellow.png';
import King from '../assets/King.png';
import LinearGradient from 'react-native-linear-gradient';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { ProfileParamList } from '../stack/ProfileStack';
import Good from '../assets/Good.png';
import Modal from 'react-native-modal';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { applyPartner } from '../services/membership';
import Moment from 'react-moment';

const Partner = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'Partner'>>();
    const [visible, setVisible] = useState(false);
    const today = new Date();
    const handleapplyMember = async () => {
        const body = {
            coins: params.coins,
            price: 99,
            roles: params.roles,
        }
        const res:any = await applyPartner(params.email,body)
        if(res.message === "created"){
            handleOpenmodal()
        }
    };
    const handleOpenmodal = () => {
        const duration = 3 * 1000;
        setVisible(true);

        const timer = setTimeout(() => {
            setVisible(false);
            navigation.navigate('Profile');
        }, duration);

        return () => clearTimeout(timer);
    };

    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <CaretLeft size={22} weight="bold" color="#EEF0FF" />
                </TouchableOpacity>
                <Text style={styles.topic}>Choose New Plan</Text>
            </View>
            <View style={styles.line} />
            <ScrollView>
                <Text style={styles.title}>Partner</Text>
                <Image source={Honeycomb_yellow} style={styles.imageHoneycomb_green} />
                <Image source={King} style={styles.imageNobility} />
                <View style={styles.description}>
                    <View style={styles.row}>
                        <Text style={styles.billingStart}>
                            Monthly charge{'\n'}Billing starts: {' '}
                            <Moment format="MMM DD, YYYY" element={Text}>
                                {today}
                            </Moment>
                        </Text>
                        <Text style={styles.price}>99.00/mo</Text>
                    </View>
                    <View style={styles.line2} />
                    <Text style={styles.textDescription}>
                        And will be automatically renewed each month. Payments for partial billing
                        periods will not be reimbursed. In the Billing Information, you can cancel
                        at any time.
                    </Text>
                </View>
                <TouchableOpacity onPress={handleapplyMember}>
                    <LinearGradient
                        start={{ x: 0, y: 0.5 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={['#FEFA94', '#94FEBF', '#95EDFF']}
                        style={styles.btnBuy}>
                        <Text style={styles.textBuy}>BUY</Text>
                    </LinearGradient>
                </TouchableOpacity>
            </ScrollView>
            <Modal isVisible={visible} backdropOpacity={0.9} backdropColor="#262D57">
                <View style={styles.modalContainer}>
                    <Image source={Good} style={styles.imageGood} />
                    <Text style={styles.modalText}>Success !</Text>
                    <Text style={styles.modalText2}>
                    Welcome to becoming a partner.
                    </Text>
                </View>
            </Modal>
        </View>
    );
};

export default Partner;

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
        top: 200,
        alignSelf: 'center',
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
        paddingVertical: 18,
        marginTop: 25,
        borderRadius: 16,
        marginHorizontal: 16
    },
    textBuy: {
        color: '#10152F',
        fontSize: 18,
        fontFamily: 'RedHatText-Bold'
    },
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        paddingHorizontal: 25,
        marginHorizontal: 35
    },
    imageGood: {
        marginTop: -115,
        marginBottom: 16
    },
    modalText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
        marginBottom: 16
    },
    modalText2: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57',
        textAlign: 'center',
        marginBottom: 30
    }
});

import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { X } from 'phosphor-react-native';
import Membership from '../assets/Membership.png';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';

interface IPopup {
    setVisible: boolean;
    ticker: boolean;
}


const PopupMember = (props:IPopup) => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [show, setShow] = useState(Boolean);
    useEffect(() => {
        if (props.ticker === true) {
            setShow(true);
        }
    }, [props.setVisible]);

    const handleNevi = () => {
        navigation.navigate("ApplyForMembership")
        setShow(false);
    };
    
    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={() => setShow(!show)}>
                    <X size={24} weight="bold" style={styles.icon} />
                </TouchableOpacity>
                <Image source={Membership} style={styles.imageMembership} />
                <Text style={styles.modalText}>View Membership!</Text>
                <Text style={styles.modalText2}>
                    Unable to make a reservation{'\n'}because you are not a member.
                    {'\n'}Would you like to become a{'\n'}member?
                </Text>
                <TouchableOpacity style={styles.btnSend} onPress={handleNevi}>
                    <Text style={styles.textSend}>VIEW</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default PopupMember;

const styles = StyleSheet.create({
    modalContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        paddingHorizontal: 16,
        marginHorizontal: 35,
        paddingBottom: 16,
        paddingTop: 0
    },
    imageMembership: {
        marginBottom: 16
    },
    modalText: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
        marginBottom: 16
    },
    modalText2: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        marginBottom: 25,
        color: '#262D57',
        textAlign: 'center'
    },
    btnSend: {
        backgroundColor: '#10152F',
        borderRadius: 12,
        paddingVertical: 12,
        width: '100%'
    },
    textSend: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    },
    icon: {
        position: 'relative',
        top: 10,
        right: -128
    }
});

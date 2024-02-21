import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import verify from '../assets/verify.png';
import { X } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';

interface IPopup {
    setVisible: boolean;
    ticker:boolean;
    email:string;
}

const PopupVerify = (props: IPopup) => {
    const [show, setShow] = useState(Boolean);
    useEffect(() => {
        if(props.ticker===true){
            setShow(true)
        }
    }, [props.setVisible]);

    const handleNevi = () => {
        navigationVerify.navigate("SelectForVerify",{email:props.email})
        setShow(false);
    };
    const navigationVerify = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    return (
        <Modal isVisible={show} backdropOpacity={0.9} backdropColor="#262D57">
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={()=>setShow(!show)}>
                    <X size={24} weight="bold" style={styles.icon} />
                </TouchableOpacity>
                <Image source={verify} style={styles.imageGood} />
                <Text style={styles.modalText}>Verify{'\n'}your identity now!</Text>
                <Text style={styles.modalText2}>
                    You must verify your identity before{'\n'}making any financial transactions
                    {'\n'}and to apply for membership.
                </Text>
                <TouchableOpacity style={styles.btnSend} onPress={handleNevi}>
                    <Text style={styles.textSend}>VERIFY</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default PopupVerify;

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
    imageGood: {
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
        position:"relative",
        top:10,
        right:-128
    }
});

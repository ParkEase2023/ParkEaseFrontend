import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Modal from 'react-native-modal';
import verify from '../assets/verify.png';

const Popupverify = () => {
    return (
        <Modal isVisible={true} backdropOpacity={0.9} backdropColor="#262D57">
            <View style={styles.modalContainer}>
                <Image source={verify} style={styles.imageGood} />
                <Text style={styles.modalText}>Verify{'\n'}your identity now!</Text>
                <Text style={styles.modalText2}>
                    You must verify your identity before{'\n'}making any financial transactions
                    {'\n'}and to apply for membership.
                </Text>
                <TouchableOpacity style={styles.btnSend}>
                    <Text style={styles.textSend}>SEND</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default Popupverify;

const styles = StyleSheet.create({
    modalContainer: {
        height: 500,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        paddingHorizontal: 16,
        marginHorizontal: 35,
        paddingBottom: 16,
        paddingTop: 60
    },
    imageGood: {
        marginTop: -115,
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
        color: '#262D57',
        textAlign: 'center'
    },
    btnSend: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16
    },
    textSend: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    }
});

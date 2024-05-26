import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { X } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { ProfileParamList } from '../stack/ProfileStack';

interface ChangePlanProps {
    setVisible: boolean;
    ticker: boolean;
}

const ChangePlan = (props: ChangePlanProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [show, setShow] = useState(Boolean);
    useEffect(() => {
        if (props.ticker === true) {
            setShow(true);
        }
    }, [props.setVisible]);

    const Navi = () => {
        setShow(false);
        navigation.navigate('ApplyForMembership');
    };

    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={styles.container}>
                <View style={styles.modalTextContent}>
                    <TouchableOpacity style={styles.modalIcon} onPress={() => setShow(!show)}>
                        <X size={24} weight="bold" color="#262D57" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Confirm {'\n'} Your Changes</Text>
                    <Text style={styles.bodyText}>
                        If you change your current membership, your current {'\n'} membership will
                        be changed immediately.
                    </Text>
                    <TouchableOpacity style={styles.btnConfirm} onPress={Navi}>
                        <Text style={styles.textConfirm}>CONFIRM</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default ChangePlan;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalTextContent: {
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        width: '75%',
        paddingHorizontal: 16,
        paddingBottom: 16,
        paddingTop: 30
    },
    modalIcon: {
        position: 'absolute',
        top: 10,
        right: 10
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 24,
        color: '#10152F',
        marginBottom: 15
    },
    bodyText: {
        fontFamily: 'RedHatText-Regular',
        textAlign: 'center',
        fontSize: 16,
        color: '#262D57',
        marginBottom: 25
    },
    button: {
        backgroundColor: '#10152F',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#FEFA94'
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12,
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    }
});

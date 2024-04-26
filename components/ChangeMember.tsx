import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { X } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
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
        navigation.navigate("ApplyForMembership");
    };

    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={styles.container}>
                <View style={styles.modalTextContent}>
                    <View style={styles.modalIcon}>
                        <TouchableOpacity onPress={() => setShow(!show)}>
                            <X size={15} weight='bold' color="#141414" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerText}>Confirm</Text>
                    <Text style={styles.headerText}>Your Changes</Text>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>If you change your current</Text>
                        <Text style={styles.text}>membership, your current</Text>
                        <Text style={styles.text}>membership will be changed</Text>
                        <Text style={styles.text}>immediately.</Text>
                    </View>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={Navi}>
                            <Text style={styles.buttonText}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
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
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 25
    },
    modalIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    modalContent: {
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 20
    },
    modalTextContent: {
        backgroundColor: '#EEF0FF',
        padding: 25,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 20
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#10152F'
    },
    textContainer: {
        width: '100%',
        paddingVertical: 20
    },
    text: {
        fontFamily: 'RedHatText',
        textAlign: 'center',
        fontSize: 14,
        color: '#262D57',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10,
    },
    button: {
        backgroundColor: '#10152F',
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#FEFA94'
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    }
});

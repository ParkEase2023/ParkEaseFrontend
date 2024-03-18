import { useNavigation } from '@react-navigation/native';
import { X } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { cancelMembership } from '../services/membership';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
interface ChangePlanProps {
    email:string;
    setVisible: boolean;
    ticker: boolean;
}

const CancelMember = (props: ChangePlanProps) => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [show, setShow] = useState(Boolean);
    useEffect(() => {
        if (props.ticker === true) {
            setShow(true);
        }
    }, [props.setVisible]);

    const handleCancel = async () => {
        const res:any = await cancelMembership(props.email)
        if(res.message === "created"){
            navigation.navigate("Profile")
        }
    };

    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={styles.container}>
                <View style={styles.modalTextContent}>
                    <View style={styles.modalIcon}>
                        <TouchableOpacity onPress={() => setShow(!show)}>
                            <X size={22} color="#141414" />
                        </TouchableOpacity>
                    </View>
                    <Text style={styles.headerText}>Confirm</Text>
                    <Text style={styles.headerText}>Your Cancellation</Text>
                    <Text style={styles.text}>If you cancel your current</Text>
                    <Text style={styles.text}>membership, your current</Text>
                    <Text style={styles.text}>membership will be changed</Text>
                    <Text style={styles.text}>immediately.</Text>
                    <View style={styles.buttonContainer}>
                        <TouchableOpacity style={styles.button} onPress={handleCancel}>
                            <Text style={styles.buttonText}>CONFIRM</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default CancelMember;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalIcon: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        width: '100%'
    },
    modalContent: {
        backgroundColor: '#EEF0FF',
        padding: 20,
        borderRadius: 10,
        width: '80%',
        alignItems: 'center',
        paddingVertical: 20
    },
    modalTextContent: {
        backgroundColor: '#EEF0FF',
        padding: 20,
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
    text: {
        fontFamily: 'RedHatText',
        textAlign: 'center',
        fontSize: 14,
        color: '#262D57',
        marginTop: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 10
    },
    button: {
        backgroundColor: '#10152F',
        padding: 10,
        width: '100%',
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#FEFA94'
    },
    btnConfirm: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#565E8B'
    }
});

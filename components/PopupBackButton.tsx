import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { X } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';

interface IPopup {
    setVisible: boolean;
    ticker:boolean;
}



const PopupBackButton = (props:IPopup) => {
    const [show, setShow] = useState(Boolean);
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    
    useEffect(() => {
        if(props.ticker===true){
            setShow(true)
        }
    }, [props.setVisible]);

    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={styles.modalContainer}>
                <TouchableOpacity onPress={()=>setShow(!show)}>
                    <X size={24} weight="bold" color='#262D57' style={styles.icon} />
                </TouchableOpacity>
                <Text style={styles.modalText}>Are you sure?</Text>
                <Text style={styles.modalText2}>Your edited data will not be saved.</Text>
                <TouchableOpacity style={styles.btnSend} onPress={()=>navigation.goBack()}>
                    <Text style={styles.textSure}>SURE</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

export default PopupBackButton;

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
    icon: {
        position: 'absolute',
        top: 10,
        right: -140
    },
    modalText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
        textAlign: 'center',
        marginTop: 30
    },
    modalText2: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#10152F',
        textAlign: 'center',
        marginTop: 12
    },
    btnSend: {
        width: '100%',
        backgroundColor: '#10152F',
        paddingVertical: 12,
        borderRadius: 12,
        marginTop: 25
    },
    textSure: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94',
        textAlign: 'center'
    }
});

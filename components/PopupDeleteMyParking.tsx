import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import Bin from '../assets/Bin.png';
import { deleteMyparking } from '../services/parking';

interface IPopup {
    setVisible: boolean;
    ticker: boolean;
    parkingID: string;
    onDelete: (value: boolean) => void;
    onTicker: (value: boolean) => void;
}

const PopupDeleteMyParking = (props: IPopup) => {
    const [show, setShow] = useState(Boolean);

    useEffect(() => {
        if (props.ticker === true) {
            setShow(true);
        }
    }, [props.setVisible]);

    const handleDelete = async () => {
        deleteMyparking(props.parkingID);
        setShow(false); 
        props.onDelete(false); 
        props.onTicker(false);
    };

    return (
        <Modal isVisible={show}>
            <View style={styles.modalContainer}>
                <Image source={Bin} style={styles.imageBin} />
                <Text style={styles.titlePopup}>Delete parking</Text>
                <Text style={styles.labelPopup}>Do you want to delete this parking ?</Text>
                <View style={styles.rowBtn}>
                    <TouchableOpacity
                        style={styles.btnCancel}
                        onPress={() => {
                            setShow(false), props.onDelete(false), props.onTicker(false);
                        }}>
                        <Text style={styles.textCancel}>CANCEL</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnYes} onPress={handleDelete}>
                        <Text style={styles.textYes}>YES, DELETE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default PopupDeleteMyParking;

const styles = StyleSheet.create({
    modalContainer: {
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 32
    },
    imageBin: {
        width: 300,
        height: 200,
        marginTop: -150,
        alignSelf: 'center'
    },
    titlePopup: {
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A',
        marginTop: 16,
        textAlign: 'center'
    },
    labelPopup: {
        fontSize: 16,
        fontFamily: 'RedHatText-Regular',
        color: '#2C2F4A',
        marginTop: 12,
        textAlign: 'center'
    },
    rowBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28
    },
    btnCancel: {
        width: 130,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#7F85B2',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    textCancel: {
        fontSize: 16,
        fontFamily: 'Fredoka-SemiBold',
        color: '#2C2F4A'
    },
    btnYes: {
        width: 130,
        backgroundColor: '#EA4C4C',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    textYes: {
        fontSize: 16,
        fontFamily: 'Fredoka-SemiBold',
        color: '#F4F6FD'
    }
});

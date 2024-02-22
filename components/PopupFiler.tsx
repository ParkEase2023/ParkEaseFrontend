import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';

interface IPopup {
    setVisible: boolean;
    ticker: boolean;
    selectOpen: (value: boolean) => void;
    selectAvailable: (value: boolean) => void;
}

const PopupFilter = (props: IPopup) => {
    const [parkingOpen, setParkingOpen] = useState(false);
    const [available, setAvailable] = useState(false);
    const [show, setShow] = useState(Boolean);

    useEffect(() => {
        if (props.ticker === true) {
            setShow(true);
        }
    }, [props.setVisible]);
    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={styles.container}>
                <Text style={styles.textFilter}>Filter</Text>
                <View style={styles.hairline} />
                <View style={styles.option1}>
                    <Text style={styles.optionText}>Parking Open</Text>
                    <RadioButton
                        value="first"
                        status={parkingOpen === true ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setParkingOpen(!parkingOpen), props.selectOpen(!parkingOpen);
                        }}
                        color={parkingOpen ? '#239D60' : 'black'}
                    />
                </View>
                <View style={styles.option2}>
                    <Text style={styles.optionText}>Available Booking</Text>
                    <RadioButton
                        value="second"
                        status={available === true ? 'checked' : 'unchecked'}
                        onPress={() => {
                            setAvailable(!available), props.selectAvailable(!available);
                        }}
                        color={available ? '#239D60' : 'black'}
                    />
                </View>
                <TouchableOpacity style={styles.btnLogIn} onPress={() => setShow(!show)}>
                    <Text style={styles.textSave}>SAVE</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 40,
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        padding: 16
    },
    optionText: {
        color: '#10152F',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16
    },
    btnLogIn: {
        backgroundColor: '#10152F',
        borderRadius: 12,
        paddingVertical: 12
    },
    textFilter: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Medium',
        fontSize: 20,
        color: '#10152F',
        paddingBottom: 16
    },
    hairline: {
        backgroundColor: '#CED2EA',
        height: 1,
        width: '100%'
    },
    textSave: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    },
    option1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginTop: 25,
        marginBottom: 16
    },
    option2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 16,
        marginBottom: 25
    }
});

export default PopupFilter;

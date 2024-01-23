import { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';
import Modal from 'react-native-modal';

interface IPopup {
    setVisible: boolean;
    ticker: boolean;
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
        <Modal isVisible={show} backdropOpacity={0.9} backdropColor="#262D57">
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.textFilter}> Filter </Text>
                    <View style={styles.hairline} />
                    <View style={styles.option1}>
                        <View style={styles.container}>
                            <Text style={styles.optionText}>Parking Open </Text>
                        </View>
                        <View style={styles.btnOptions}>
                            <RadioButton
                                value="first"
                                status={parkingOpen === true ? 'checked' : 'unchecked'}
                                onPress={() => setParkingOpen(!parkingOpen)}
                                color={parkingOpen ? '#239D60' : 'black'}
                            />
                        </View>
                    </View>
                    <View style={styles.option2}>
                        <View style={styles.container}>
                            <Text style={styles.optionText}>Available Booking</Text>
                        </View>
                        <View style={styles.btnOptions}>
                            <RadioButton
                                value="second"
                                status={available === true ? 'checked' : 'unchecked'}
                                onPress={() => setAvailable(!available)}
                                color={available ? '#239D60' : 'black'}
                            />
                        </View>
                    </View>
                    <TouchableOpacity style={styles.btnLogIn} onPress={() => setShow(!show)}>
                        <Text style={styles.textSave}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        paddingHorizontal:5,
        paddingRight:10,
        textAlign: 'left',
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#10152F',
        paddingBottom: 15
    },
    optionText: {
        color: '#10152F',
        fontFamily: 'RedHatText',
        fontWeight:"400",
        fontSize: 16
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalView: {
        backgroundColor: '#EEF0FF',
        borderRadius: 10,
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    closeButton: {
        marginTop: 20
    },
    btnLogIn: {
        backgroundColor: '#10152F',
        borderRadius: 12,
        padding: 10,
        elevation: 2,
        marginTop: 15,
        paddingVertical: 10,
        paddingHorizontal: 75,
        marginBottom: 5
    },
    textFilter: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#10152F',
        paddingBottom:16
    },
    hairline: {
        backgroundColor: '#DAE0FF',
        height: 1,
        width: 200
    },
    textSave: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    },
    option1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    option2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    btnOptions: {
        marginTop: 12,
    }

});

export default PopupFilter;

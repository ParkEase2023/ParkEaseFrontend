import React, { useEffect, useState } from 'react';
import {
    Text,
    View,
    Modal,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown'
import moment from 'moment';

interface IPopup {
    setVisible: boolean;
    ticker: boolean;
    selectDateEnd: (value: any) => void;
    selectTimeEnd: (value: string) => void;
}

const CalenderPickerEnd = (props: IPopup) => {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedTime, setSelectedTime] = useState('00 : 00');
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);

    useEffect(() => {
        if (props.ticker === true) {
            setModalVisible(true);
        }
    }, [props.setVisible]);



    const closeModal = () => {
        setModalVisible(false);
    };


    const handleSave = () => {
        const currentDate = new Date();
        const day = String(currentDate.getDate()).padStart(2, '0');
        const month = String(currentDate.getMonth() + 1).padStart(2, '0'); 
        const year = currentDate.getFullYear();
        const combinedDateTimeStr = `${day}-${month}-${year} ${selectedTime}`;
        const date = moment(combinedDateTimeStr, 'DD-MM-YYYY HH:mm');
        const dateFoment = moment(date).format()
        props.selectDateEnd(dateFoment);
        props.selectTimeEnd(combinedDateTimeStr);
        closeModal();
    };

    const time = [
        '00 : 00',
        '01 : 00',
        '02 : 00',
        '03 : 00',
        '04 : 00',
        '05 : 00',
        '06 : 00',
        '07 : 00',
        '08 : 00',
        '09 : 00',
        '10 : 00',
        '11 : 00',
        '12 : 00',
        '13 : 00',
        '14 : 00',
        '15 : 00',
        '16 : 00',
        '17 : 00',
        '18 : 00',
        '19 : 00',
        '20 : 00',
        '21 : 00',
        '22 : 00',
        '23 : 00'
    ];

    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                // onRequestClose={closeModal}
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View style={styles.headerBox}>
                            <Text style={styles.headerText}>Start Date & Time</Text>
                        </View>
                        <View>
                            <Calendar
                                current={currentDate}
                                minDate={currentDate}
                                maxDate={currentDate}
                                markedDates={{
                                    [currentDate]: { selected: true, selectedColor: '#5865F2' }
                                }}
                            />
                        </View>
                        <View style={styles.timePosition}>
                            <View style={styles.timeTextPosition}>
                                <Text style={styles.timeText}>Time</Text>
                            </View>
                            <View style={styles.timePickerPosition}>
                                <SelectDropdown
                                    data={time}
                                    buttonStyle={styles.timePickerBoxContainer}
                                    defaultButtonText={selectedTime}
                                    onSelect={(selectedItem, index) => {
                                        setSelectedTime(selectedItem);
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem;
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item;
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.buttonContainer}>
                            <TouchableOpacity onPress={handleSave} style={styles.button}>
                                <Text style={styles.buttonText}>SAVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

export default CalenderPickerEnd;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)',
        paddingHorizontal: 40
    },
    modalView: {
        borderRadius: 8,
        backgroundColor: 'white'
    },
    headerBox: {
        backgroundColor: '#10152F',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    headerText: {
        fontSize: 16,
        fontFamily: 'RedHatText-Bold',
        color: 'white',
        paddingTop: 18,
        paddingBottom: 6
    },
    timePosition: {
        flexDirection: 'row',
        paddingHorizontal: 16,
        paddingVertical: 12
    },
    timeTextPosition: {
        justifyContent: 'center'
    },
    timeText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    },
    timePickerPosition: {
        flex: 1,
        alignItems: 'flex-end'
    },
    timePickerBoxContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#7F85B2',
        borderWidth: 1,
        height: 40,
        width: '36%'
    },
    buttonContainer: {
        paddingTop: 12,
        paddingHorizontal: 16,
        paddingBottom: 20
    },
    button: {
        backgroundColor: '#10152F',
        paddingVertical: 12,
        borderRadius: 8,
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#95EDFF'
    }
});

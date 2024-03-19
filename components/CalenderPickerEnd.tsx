import { CalendarPlus, CaretDown } from 'phosphor-react-native';
import React, { useState } from 'react';
import {
    Text,
    View,
    Modal,
    Button,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { Calendar } from 'react-native-calendars';
import SelectDropdown from 'react-native-select-dropdown'

const CalenderPickerEnd = () => {
    const [selectedDate, setSelectedDate] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const currentDate = new Date().toISOString().split('T')[0];
    const [selectedTime, setSelectedTime] = useState('00 : 00');
    const [isTimePickerVisible, setTimePickerVisible] = useState(false);


    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    const openTimePicker = () => {
        setTimePickerVisible(false);
    };

    const closeTimePicker = () => {
        setTimePickerVisible(false);
    };

    const handleSetTime = (time: string) => {
        setSelectedTime(time);
        closeTimePicker();
    };

    const handleSave = () => {
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
        '23 : 00',
    ];


    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={false}
                onRequestClose={closeModal}
            >
                <View style={styles.container}>
                    <View style={styles.modalView}>
                        <View style={styles.headerBox}>
                            <Text style={styles.headerText}>Start Date & Time</Text>
                        </View>
                        <View>
                            <Calendar
                                current={currentDate}
                                style={styles.calendar}
                                minDate={currentDate}
                                maxDate={currentDate}
                                onDayPress={(day) => setSelectedDate(day.dateString)}
                                markedDates={{ [selectedDate]: { selected: true, selectedColor: 'blue' } }}
                            />
                        </View>
                        <View style={styles.timePosition}>
                            <View style={styles.timeTextPosiotion}>
                                <Text style={styles.timeText}>Time</Text>
                            </View>
                            <View style={styles.timePickerPosition}>
                                <SelectDropdown
                                    data={time}
                                    buttonStyle={styles.timePickerBoxContainer}
                                    defaultButtonText={selectedTime}
                                    onSelect={(selectedItem, index) => {
                                        console.log(selectedItem, index)
                                    }}
                                    buttonTextAfterSelection={(selectedItem, index) => {
                                        return selectedItem
                                    }}
                                    rowTextForSelection={(item, index) => {
                                        return item
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
        paddingHorizontal: 25,
        paddingVertical: 25,
    },
    modalView: {
        borderRadius: 20,
        backgroundColor: 'white',
    },
    headerBox: {
        backgroundColor: '#10152F',
        alignItems: 'center',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingLeft: 70,
        paddingRight: 70,
        width: '100%',
    },
    headerText: {
        fontSize: 16,
        color: 'white',
        padding: 10,
    },
    calendar: {
        width: '100%',
        fontFamily: 'RedHatText',
    },
    timePosition: {
        flexDirection: 'row',
        paddingHorizontal: 25,
        paddingVertical: 15,
    },
    timeTextPosiotion: {
        justifyContent: 'center',
    },
    timeText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#10152F',
    },
    timePickerPosition: {
        flex: 1,
        alignItems: 'flex-end',
    },
    timePickerBoxContainer: {
        backgroundColor: 'white',
        borderRadius: 10,
        borderColor: '#7F85B2',
        borderWidth: 1,
        padding: 5,
        width: '40%',
    },
    timePicker: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    buttonContainer: {
        flexDirection: 'row',
        padding: 20,
    },
    button: {
        backgroundColor: '#10152F',
        padding: 16,
        paddingHorizontal: 25,
        paddingVertical: 10,
        borderRadius: 10,
        marginHorizontal: 10,
        width: '100%',
    },
    buttonText: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#95EDFF',
    },
});

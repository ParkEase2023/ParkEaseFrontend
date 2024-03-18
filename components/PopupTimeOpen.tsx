import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import Modal from 'react-native-modal';
import { TimerPicker } from 'react-native-timer-picker';
import LinearGradient from 'react-native-linear-gradient';

interface IPopup {
    setVisible: boolean;
    ticker:boolean;
    timeOpen: (value: string) => void;
}

const PopupTimeOpen = (props:IPopup) => {
    const [show, setShow] = useState(Boolean);
    const [selectedValue, setSelectedValue] = useState("");
    useEffect(() => {
        if(props.ticker===true){
            setShow(true)
        }
    }, [props.setVisible]);

    const handleValueChange = (value:any) => {
        const Time = formatTime(value);
        setSelectedValue(Time);
    };

    const formatTime = (time:any) => {
        const { hours, minutes } = time;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        return `${hours}:${formattedMinutes}`;
    };

    return (
        <Modal isVisible={show} backdropOpacity={0.6} backdropColor="#000">
            <View style={{ position: 'absolute', left: 42 }}>
                <View style={styles.bgTopic}>
                    <Text style={styles.topic}>OPEN</Text>
                </View>
                <View style={styles.bg}/>
                <TimerPicker
                    onDurationChange={handleValueChange}
                    padWithNItems={1}
                    hourLabel=":"
                    minuteLabel=""
                    hideSeconds
                    LinearGradient={LinearGradient}
                    styles={{
                        theme: 'light',
                        pickerItem: {
                            fontSize: 24,
                            color: '#10152F'
                        },
                        pickerLabel: {
                            position: 'absolute',
                            fontSize: 24,
                            top: 53,
                            right: -5,
                            color: '#10152F',
                            fontFamily: 'RedHatText-Bold'
                        },
                        pickerLabelContainer: {
                            width: 60
                        },
                        pickerItemContainer: {
                            width: 140
                        }
                    }}
                />
                <View style={styles.bgModal}>
                    <TouchableOpacity style={styles.btnSave} onPress={()=>{setShow(!show),props.timeOpen(selectedValue)}}>
                        <Text style={styles.textSave}>SAVE</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
};

export default PopupTimeOpen;

const styles = StyleSheet.create({
    bgTopic: {
        backgroundColor: '#dddddd',
        paddingTop: 20,
        paddingBottom: 6,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        width: 285
    },
    topic: {
        color: '#239D60',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        textAlign: 'center'
    },
    bg: {
        backgroundColor: '#F1F1F1',
        padding: 6.5,
        width: 285,
    },
    bgModal: {
        backgroundColor: '#F1F1F1',
        paddingHorizontal: 18,
        paddingTop: 12,
        paddingBottom: 18,
        borderBottomLeftRadius: 16,
        borderBottomRightRadius: 16,
        width: 285
    },
    btnSave: {
        backgroundColor: '#10152F',
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 12
    },
    textSave: {
        color: '#FEFA94',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16
    }
});

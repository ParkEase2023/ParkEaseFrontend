import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import { TextInput } from "react-native-paper";

interface CheckBoxItemProps {
    id: string | number;
    label: string;
    value: boolean;
    onTicker: (value: boolean) => void;
    onValue: ( value: string, text?: string) => void;
    onRemove: (value: string) => void;
}
const ReportCheckBoxOther = (props: CheckBoxItemProps) => {
    const [isChecked, setIsChecked] = useState(false);

    useEffect(() => {
        if(isChecked === true){
            props.onValue(props.label)
            props.onTicker(true)
        }
        else{
            props.onRemove(props.label)
            props.onValue("")
            props.onTicker(false)
        }
    }, [isChecked])
    
    const handleCheckBoxChange = () => {
        setIsChecked(!isChecked) 
    };
    return (
        <View style={styles.row}>
            <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={handleCheckBoxChange}
                tintColors={{ true: '#00FF00', false: '#EEF0FF' }} 
                style={styles.checkbox}
            />
                <Text style={styles.text}>{props.label}</Text>
                {isChecked && <TextInput
                    style={styles.otherTextInput}
                    onChangeText={text => props.onValue(props.label, text)}
                    textColor="#EEF0FF"
                    placeholderTextColor="#EEF0FF"
                />}
            
        </View>
    );
};


export default ReportCheckBoxOther;

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
    },
    checkbox: {
        alignSelf: "center",
    },
    text: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#EEF0FF',
        left: 10,
    },
    otherTextInput: {
        backgroundColor: '#10152F',
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 2,
        width: 200,
        height: 30,
        color: '#EEF0FF',
        fontSize: 16,
        textAlign: 'center',
        left: 20,
    },
});
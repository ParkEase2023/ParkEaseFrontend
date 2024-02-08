import React, { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CheckBox from '@react-native-community/checkbox';

interface CheckBoxItemProps {
    id: string | number;
    label: string;
    value: boolean;
    onTicker: (value: boolean) => void;
    onValue: (value: string) => void;
    onRemove: (value: string) => void;
}
const CheckBoxItem = (props: CheckBoxItemProps) => {
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
        </View>
    );
};
export default CheckBoxItem;

export const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 10,
    },
    checkbox: {
        alignSelf: "center",
        color: '#7F85B2',
    },
    text: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#EEF0FF',
        left: 10,
    },
    otherTextInput: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        width: 343,
        height: 56,
        color: '#7F85B2',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        top: 16,
    },
});
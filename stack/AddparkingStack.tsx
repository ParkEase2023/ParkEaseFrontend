import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddParking from '../screens/AddParking';
import SelectParkingType from '../screens/SelectParkingType';
import AddParkingDetails from '../screens/AddParkingDetails';
import MyParking from '../screens/MyParking';

export type AddParkingParamList = {
    AddParking: undefined;
    SelectParkingType: {latitude: number; longitude: number };
    AddParkingDetails: {type: string; latitude: number; longitude: number};
    MyParking:undefined;
};

const AddParkingStack = () => {
    const Stack = createNativeStackNavigator<AddParkingParamList>();
    return (
        <Stack.Navigator
            initialRouteName="AddParking"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="AddParking" component={AddParking} />
            <Stack.Screen name="SelectParkingType" component={SelectParkingType} />
            <Stack.Screen name="AddParkingDetails" component={AddParkingDetails} />
            <Stack.Screen name="MyParking" component={MyParking} />
        </Stack.Navigator>
    );
};

export default AddParkingStack;

const styles = StyleSheet.create({});

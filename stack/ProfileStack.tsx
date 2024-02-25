import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import VerifyYourIdentify from '../screens/VerifyYourIdentity';
import SelectForVerify from '../screens/SelectForVerify';
import AddCoin from '../screens/AddCoin';
import AddCoinQR from '../screens/AddCoinQR';
import Notification from '../screens/Notification';
import BindAnAccount from '../screens/BindAnAccount';
import WithdrawMoney from '../screens/WithdrawMoney';
import InspectionInProgress from '../screens/InspectionInProgress';
import BankInformation from '../screens/BankInformation';

export type ProfileParamList = {
    Profile: undefined;
    EditProfile: {
        _id: string;
        firstname: string;
        lastname: string;
        phone_number: string;
        email: string;
        profile_picture: string;
        password: string;
    };
    VerifyIdentity: { email: string };
    SelectForVerify: { email: string };
    AddCoin: {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        coins: number;
        phoneNumber: string;
    };
    AddCoinQR: {
        qrCode: string;
        id: string;
        email: string;
        coins: number;
        addcoins: number;
        userId: string;
    };
    Notification: {userId:string}
    BindAnAccount:{userId:string};
    WithdrawMoney:undefined;
    InspectionInProgress:undefined;
    BankInformation:{userId:string};
};

const ProfileStack = () => {
    const Stack = createNativeStackNavigator<ProfileParamList>();
    return (
        <Stack.Navigator
            initialRouteName="Profile"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Profile" component={Profile} />
            <Stack.Screen name="EditProfile" component={EditProfile} />
            <Stack.Screen name="VerifyIdentity" component={VerifyYourIdentify} />
            <Stack.Screen name="SelectForVerify" component={SelectForVerify} />
            <Stack.Screen name="AddCoin" component={AddCoin} />
            <Stack.Screen name="AddCoinQR" component={AddCoinQR} />
            <Stack.Screen name="Notification" component={Notification} />
            <Stack.Screen name="BindAnAccount" component={BindAnAccount} />
            <Stack.Screen name="WithdrawMoney" component={WithdrawMoney} />
            <Stack.Screen name="InspectionInProgress" component={InspectionInProgress} />
            <Stack.Screen name="BankInformation" component={BankInformation} />
        </Stack.Navigator>
    );
};

export default ProfileStack;

const styles = StyleSheet.create({});

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
import CheckInformation from '../screens/CheckInformation';
import WithdrawalReceipt from '../screens/WithdrawalReceipt';
import ApplyForMembership from '../screens/ApplyForMembership';
import Member from '../screens/Member';
import Partner from '../screens/Partner';
import BillingInfo from '../screens/BillingInformation';
import MyParking from '../screens/MyParking';
import { NavigatorScreenParams } from '@react-navigation/native';
import AddParkingStack, { AddParkingParamList } from './AddparkingStack';
import EditParkingDetails from '../screens/EditParkingDetail';

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
    Notification: { userId: string };
    BindAnAccount: { userId: string };
    WithdrawMoney: {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        coins: number;
        phoneNumber: string;
    };
    InspectionInProgress: undefined;
    BankInformation: { userId: string };
    CheckInformation: {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        withdrawMoney: number;
        coins: number;
        phoneNumber: string;
    };
    WithdrawalReceipt: {
        _id: string;
        firstname: string;
        lastname: string;
        email: string;
        withdrawMoney: number;
        coins: number;
        phoneNumber: string;
    };
    ApplyForMembership: undefined;
    Member: {
        coins: number;
        email: string;
        roles: any;
    };
    Partner: {
        coins: number;
        email: string;
        roles: any;
    };
    BillingInfo: {
        email: string;
        Exptime: string;
        roles: any;
    };
    MyParking: { userId: string; navi: string };
    AddParkingStack: NavigatorScreenParams<AddParkingParamList>;
    EditParkingDetails: {
        id: string;
        latitude: number;
        longitude: number;
        title: string;
        phone_number: string;
        price: number;
        booking: boolean;
        type: string;
        opening_status: boolean;
        timeOpen: string;
        timeClose: string;
        providerBy: string;
        location_address: string;
        parking_picture1: string;
        parking_picture2: string;
        parking_picture3: string;
        opening_mo: boolean;
        opening_tu: boolean;
        opening_we: boolean;
        opening_th: boolean;
        opening_fr: boolean;
        opening_sa: boolean;
        opening_su: boolean;
    };
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
            <Stack.Screen name="CheckInformation" component={CheckInformation} />
            <Stack.Screen name="WithdrawalReceipt" component={WithdrawalReceipt} />
            <Stack.Screen name="ApplyForMembership" component={ApplyForMembership} />
            <Stack.Screen name="Member" component={Member} />
            <Stack.Screen name="Partner" component={Partner} />
            <Stack.Screen name="BillingInfo" component={BillingInfo} />
            <Stack.Screen name="MyParking" component={MyParking} />
            <Stack.Screen name="AddParkingStack" component={AddParkingStack} />
            <Stack.Screen name="EditParkingDetails" component={EditParkingDetails} />
        </Stack.Navigator>
    );
};

export default ProfileStack;

const styles = StyleSheet.create({});

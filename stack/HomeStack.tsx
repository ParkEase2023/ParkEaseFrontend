import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RateReview from '../screens/RateReview';
import Reqlogin from '../screens/Reqlogin';
import RetrospectiveBooking from '../screens/RetrospectiveBooking';
import Booking from '../screens/Booking';

export type HomeParamList = {
    Home: undefined;
    Review: {parkingId: string, parking_name: string};
    Reqlogin:undefined;
    Booking:{
    Title: string;
    Price: string;
    Location_address: string;
    TimeOpen: string;
    TimeClose: string;
    ProviderBy: string;
    PhoneCall: string;
    mo: boolean;
    tu: boolean;
    we: boolean;
    th: boolean;
    fr: boolean;
    sa: boolean;
    su: boolean;
    parkingId: string;
    parkingownerId:string;
    };
};

const HomeStack = () => {
    const Stack = createNativeStackNavigator<HomeParamList>();
    return (
        <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Home" component={Home}/>
            <Stack.Screen name="Review" component={RateReview} />
            <Stack.Screen name="Reqlogin" component={Reqlogin} />
            <Stack.Screen name="Booking" component={Booking} />
        </Stack.Navigator>
    );
};

export default HomeStack;

const styles = StyleSheet.create({});
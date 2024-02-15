import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import RateReview from '../screens/RateReview';

export type HomeParamList = {
    Home: undefined;
    Review: undefined;
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
        </Stack.Navigator>
    );
};

export default HomeStack;

const styles = StyleSheet.create({});
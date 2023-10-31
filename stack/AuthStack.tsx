import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';

export type AuthTabParamList = {
    SignIn: undefined;
    SignUp: undefined;
};

const AuthStack = () => {
   const Stack = createNativeStackNavigator<AuthTabParamList>();
   return (
    <Stack.Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})
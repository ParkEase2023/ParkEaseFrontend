import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import ForgetPassword from '../screens/ForgetPassword'
import VerifyYourEmail from '../screens/VerifyYourEmail';
import CreateNewPassword from '../screens/CreateNewPassword';
export type AuthTabParamList = {
    SignIn: undefined;
    SignUp: undefined;
    ForgetPassword: undefined;
    VerifyYourEmail:{Email: string;};
    CreateNewPassword:{SetEmail: string;};
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
      <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
      <Stack.Screen name="VerifyYourEmail" component={VerifyYourEmail} />
      <Stack.Screen name="CreateNewPassword" component={CreateNewPassword} />
    </Stack.Navigator>
  )
}

export default AuthStack

const styles = StyleSheet.create({})
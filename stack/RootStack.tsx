import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import React from 'react'
import AuthStack, { AuthTabParamList } from './AuthStack';
import MenuStack, { MenuParamList } from './MenuStack';

export type RootStackList = {
  AuthStack: NavigatorScreenParams<AuthTabParamList>;
  MenuStack: NavigatorScreenParams<MenuParamList>;
};

const Rootstack = () => {
  const Stack = createNativeStackNavigator<RootStackList>();
  return (
    <Stack.Navigator initialRouteName="MenuStack"
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
      }}>
      <Stack.Screen name="MenuStack" component={MenuStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />

    </Stack.Navigator>
  )
}

export default Rootstack

const styles = StyleSheet.create({})
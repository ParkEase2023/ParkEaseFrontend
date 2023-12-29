import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigatorScreenParams } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import AuthStack, { AuthTabParamList } from './AuthStack';
import MenuStack, { MenuParamList } from './MenuStack';
import AuthContext from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
export type RootStackList = {
  AuthStack: NavigatorScreenParams<AuthTabParamList>;
  MenuStack: NavigatorScreenParams<MenuParamList>;
};

const Rootstack = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const Stack = createNativeStackNavigator<RootStackList>();
  useEffect(() => {
    const checkTokenInStorage = async () => {
      await AsyncStorage.getItem('token').then(token => {
        // console.log('token in storage', token);
        if (token) {
          // setIsLoggedIn(String(token).length > 0 ? true : false);
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
      });
    };
    checkTokenInStorage();
  }, []);
  return (
    <AuthContext.Provider value={{isLoggedIn: isLoggedIn, setLoggedIn: setIsLoggedIn}}>
    <Stack.Navigator initialRouteName="MenuStack"
      screenOptions={{
        headerShown: false,
        statusBarHidden: true,
      }}>
      <Stack.Screen name="MenuStack" component={MenuStack} />
      <Stack.Screen name="AuthStack" component={AuthStack} />

    </Stack.Navigator>
    </AuthContext.Provider>
  )
}

export default Rootstack

const styles = StyleSheet.create({})
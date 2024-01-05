import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';

export type ProfileParamList = {
    Profile: undefined;
};

const ProfileStack = () => {
   const Stack = createNativeStackNavigator<ProfileParamList>();
   return (
    <Stack.Navigator
      initialRouteName="Profile"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})
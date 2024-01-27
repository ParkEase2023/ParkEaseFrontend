import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Profile from '../screens/Profile';
import EditProfile from '../screens/EditProfile';
import VerifyYourIdentify from '../screens/VerifyYourIdentity';
import SelectForVerify from '../screens/SelectForVerify';

export type ProfileParamList = {
    Profile: undefined;
    EditProfile:{
      _id: string;
      firstname: string;
      lastname: string;
      phone_number: string;
      email: string;
      profile_picture: string;
      password:string;
    };
  
  VerifyIdentity:{email: string};
  SelectForVerify:{email: string};
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
      <Stack.Screen name="EditProfile" component={EditProfile} />
      <Stack.Screen name="VerifyIdentity" component={VerifyYourIdentify} />
      <Stack.Screen name="SelectForVerify" component={SelectForVerify} />

    </Stack.Navigator>
  )
}

export default ProfileStack

const styles = StyleSheet.create({})
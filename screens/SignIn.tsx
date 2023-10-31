import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';

const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <SafeAreaView>
      <View>
        <Text>Signin</Text>
        <Text
          onPress={() => navigation.navigate('SignUp')}>
          SIGN Up
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({})
import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';

const SignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <SafeAreaView>
      <View>
        <Text>SignUp</Text>
        <Text
          onPress={() => navigation.navigate('SignIn')}>
          SignIn
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignUp

const styles = StyleSheet.create({})
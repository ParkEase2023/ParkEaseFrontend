import { SafeAreaView, StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';

const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <SafeAreaView>
      <View>
        <Text style={{fontFamily: 'RedHatText-Bold'}}>Log In</Text>
        <Image style={styles.Logo} source={require('../assets/LogoPark_DarkMode.png')} />
        <Text
          onPress={() => navigation.navigate('SignUp')}>
          SIGN Up
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  Logo: {
    width: 100,
    height: 100,
  },
})
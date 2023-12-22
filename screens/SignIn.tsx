import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, EnvelopeSimple } from 'phosphor-react-native';

const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <KeyboardAwareScrollView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.Logo}>
        <Image source={require('../assets/LogoParkEase1.png')} />
      </SafeAreaView>
      <View style={styles.mainContainer}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft size={24} color="#565E8B" />
          </TouchableOpacity>
          <Text style={styles.title}>Log In</Text>
        </View>
        <View>
          <View>
            <EnvelopeSimple size={24} color="#000"/>
            <TextInput
              placeholder="Email"
              style={{
                backgroundColor: '#FFFFFF',
                borderRadius: 12,
                marginBottom: 40,
                padding: 16,
                fontFamily: 'RedHatText-Regular',
                fontSize: 16,
                color: '#565E8B',
              }}
            />
          </View>
          
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={{
              backgroundColor: '#FFFFFF',
              borderRadius: 12,
              marginBottom: 16,
              padding: 16,
              fontFamily: 'RedHatText-Regular',
              fontSize: 16,
              color: '#565E8B',
            }}
          />
          <Text style={styles.ForgotPassword}>Forgot Password?</Text>
        </View>
        <TouchableOpacity style={styles.btnLogIn}>
          <Text style={styles.textLogIn}>LOG IN</Text>
        </TouchableOpacity>
        <Text style={styles.textBody}>
          New User?
          <Text
            style={styles.textButton}
            onPress={() => navigation.navigate('SignUp')}>
            {' '}
            SIGN UP
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignIn

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#10152F',
  },
  Logo: {
    flex: 1,
    alignItems: 'center',
    marginTop: 81,
    marginBottom: 32,
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#EEF0FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 50,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 40,
    color: '#10152F',
  },

  ForgotPassword: {
    textAlign: 'right',
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#262D57',
    marginBottom: 50,
  },
  btnLogIn: {
    backgroundColor: '#10152F',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 25,
  },
  textLogIn: {
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 18,
    color: '#FEFA94',
  },
  textBody: {
    textAlign: 'center',
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#2C2F4A',
  },
  textButton: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: '#565E8B',
  },
})
import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, EnvelopeSimple, Key, Eye, EyeSlash } from 'phosphor-react-native';
import {useContext, useEffect, useState} from 'react';
import AuthContext from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { logIn } from '../services/auth';
import { RootStackList } from '../stack/RootStack';


const SignIn = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  const navigetAffterlogin = useNavigation<NativeStackNavigationProp<RootStackList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {setLoggedIn} = useContext(AuthContext);
  const [textEntry, setTextEntry] = useState(true);
  const [errorsEmail, setErrorsEmail] = useState('');
  const [errorsPassword, setErrorsPassword] = useState('');
  const hardleLogin = async () => {
    try {
      const res: any = await logIn({
        email: email,
        password: password,
      });
      console.log('res token', res);
      if (res.message === 'success') {
        AsyncStorage.setItem('token', res.token);
        setLoggedIn(true);
        console.log('token save to local storage successfully');
        navigetAffterlogin.replace('MenuStack', {screen: 'HomeStack'});
      }
    } catch (err: any) {
      setErrorsEmail('');
      setErrorsPassword('');
      err.errors.map((item: any) => {
        if (item.param === 'email') {
          setErrorsEmail(item.msg);
        } else if (item.param === 'password') {
          setErrorsPassword(item.msg);
        }
      });
      console.log(err);
    }
  };
  const Entrypassword = (): JSX.Element | null => {
    if(textEntry == true)
    {
      return (
      <TouchableOpacity 
        onPress={() => {
        setTextEntry(!textEntry);
        return false;
      }}>
        <EyeSlash size={24} weight="duotone" color="#565E8B"/>
      </TouchableOpacity>
      )
    }
    else
    {
      return (
        <TouchableOpacity 
        onPress={() => {
        setTextEntry(!textEntry);
        return false;
      }}>
        <Eye size={24} weight="duotone" color="#565E8B"/>
      </TouchableOpacity>
      )
    }
  }

  return (
    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView style={styles.Logo}>
        <Image source={require('../assets/LogoParkEase1.png')} />
        <View style={styles.circleG} />
        <View style={styles.circleB} />
        <View style={styles.circleY} />
      </SafeAreaView>

      <View style={styles.mainContainer}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft size={24} color="#565E8B" />
          </TouchableOpacity>
          <Text style={styles.title}>Log In</Text>
        </View>

        <View style={styles.email}>
          <EnvelopeSimple size={24} color="#565E8B"/>
          <TextInput
            placeholder="Email"
            style={{
              padding: 16,
              fontFamily: 'RedHatText-Regular',
              fontSize: 16,
              color: '#565E8B',
            }}
            onChangeText={text => setEmail(text)}
          />
        </View>
        <Text style={styles.error}>{errorsEmail}</Text>
          
        <View style={styles.password}>
          <View style={styles.itemLeft}>
            <Key size={24} color="#565E8B"/>
            <TextInput
              placeholder="Password"
              secureTextEntry={textEntry}
              style={{
                padding: 16,
                fontFamily: 'RedHatText-Regular',
                fontSize: 16,
                color: '#565E8B',
              }}
              onChangeText={text => setPassword(text)}
            />
          </View>
          <Entrypassword></Entrypassword>
        </View>
        <Text style={styles.error}>{errorsPassword}</Text>
        <Text style={styles.ForgotPassword} onPress={() => navigation.navigate('ForgetPassword')}>Forgot Password?</Text>
        
        <TouchableOpacity style={styles.btnLogIn} onPress={hardleLogin}>
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
  circleG: {
    position: 'absolute',
    width: 35,
    height: 35,
    borderRadius: 100,
    backgroundColor: '#94FEBF',
    top: -40,
    right: 68,
  },
  circleB: {
    position: 'absolute',
    width: 85,
    height: 85,
    borderRadius: 100,
    backgroundColor: '#95EDFF',
    top: 90,
    right: -43,
  },
  circleY: {
    position: 'absolute',
    width: 18,
    height: 18,
    borderRadius: 100,
    backgroundColor: '#FEFA94',
    top: 115,
    left: 38,
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#EEF0FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 45,
    paddingBottom: 98.5,
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
  longTextInput: {
    padding: 16,
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#10152F',
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  emailActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  password:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 25,
  },
  passwordActive:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
    marginTop: 25,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ForgotPassword: {
    textAlign: 'right',
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#262D57',
    marginTop: 2,
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
  error: {
    color: '#EA4C4C',
    fontFamily: 'RedHatText-SemiBold',
    fontSize: 12,
    paddingTop: 2,
    paddingLeft: 16,
  },
})
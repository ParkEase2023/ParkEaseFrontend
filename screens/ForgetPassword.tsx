import { StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, EnvelopeSimple } from 'phosphor-react-native';
import { checkemail, sendOTPtoEmail } from '../services/forgotpassword';
const ForgetPassword = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  const [email, setEmail] = useState('');
  const [errorsEmail, setErrorsEmail] = useState('');
  const chackemail = async () => {
    try {
      const res: any = await checkemail(email);
      console.log(res.message);
      await sendOTPtoEmail(email);
      navigation.navigate("VerifyYourEmail", { Email: email });
    } catch (err: any) {
      setErrorsEmail("")
      err.errors.map((item: any) => {
        if (item.param === 'email') {
          setErrorsEmail(item.msg);
        }
      });
      console.log(err);
    }
  };
  return (
    <KeyboardAwareScrollView style={styles.container} >
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.circleBig} />
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#EEF0FF" />
        </TouchableOpacity>
        <Text style={styles.title}>You Forgot Your Password</Text>
        <Text style={styles.text}>Please enter your email address to receive a verification cord.</Text>
        <View style={styles.email}>
          <EnvelopeSimple size={24} color="#565E8B" />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            onChangeText={text => setEmail(text)}
          />
          <Text style={styles.error}>{errorsEmail}</Text>
        </View>
        <TouchableOpacity style={styles.btnSend} onPress={chackemail}>
          <Text style={styles.textSend}>SEND</Text>
        </TouchableOpacity>
        <View style={styles.circleSmall} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default ForgetPassword

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0FF',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 25,
    marginBottom: 120,
  },
  circleBig: {
    position: 'absolute',
    width: 287,
    height: 287,
    borderRadius: 200,
    backgroundColor: '#262D57',
    top: -72,
    left: -144,
  },
  btnBack: {
    marginTop: 80,
  },
  title: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 32,
    color: '#262D57',
    textAlign: 'center',
    marginTop: 90,
  },
  text: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#565E8B',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 50,
  },
  textInput: {
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
    marginBottom: 101,
    paddingHorizontal: 16,
  },
  emailActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 101,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  btnSend: {
    backgroundColor: '#10152F',
    borderRadius: 16,
    paddingVertical: 16,
  },
  textSend: {
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 18,
    color: '#FEFA94',
  },
  circleSmall: {
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: '#CED2EA',
    bottom: -120,
    right: -20,
  },
  error: {
    zIndex: 9999,
    color: '#EA4C4C',
    fontFamily: 'RedHatText-SemiBold',
    fontSize: 12,
    paddingTop: 2,
    paddingLeft: 16,
  },
})
import { StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, SafeAreaView, RefreshControl } from 'react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import React, { useEffect, useRef, useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft } from 'phosphor-react-native';
import CountdownTimer from '../components/CountdownTimer';
import { sendOTPtoEmail } from '../services/forgotpassword';



const VerifyYourEmail = () => {
  const { params } = useRoute<RouteProp<AuthTabParamList, 'VerifyYourEmail'>>();
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [complete, setComplete] = useState('')
  const [otpTimeOut, setotpTimeOut] = useState(false)
  const [duration, setDuration] = useState(30);
  const inputRefs = [useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null), useRef<TextInput>(null)];
  const handleInputChange = (index: any, value: any) => {
    // Update the OTP array with the new value
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Move to the next input field or submit if the last digit is entered
    const nextInputRef = inputRefs[index + 1];
    if (index < otp.length - 1 && value !== '' && nextInputRef && nextInputRef.current) {
      (nextInputRef.current as any).focus();
    } else if (index === otp.length - 1 && value !== '') {
      const OTP = newOtp.join('')
      console.log('OTP entered: ' + OTP);
      setComplete(OTP)
    }
  };

  useEffect(() => {
    if (otpTimeOut === true) {
      console.log('time out');
    }
  }, [otpTimeOut])

  const Renderbtn = ():JSX.Element | null => {
    if (otpTimeOut === false) {
      return (
        <TouchableOpacity style={styles.btnSend}>
          <Text style={styles.textSend}>VERIFY</Text>
        </TouchableOpacity>
      );
    } else if (otpTimeOut === true) {
      return (
        <TouchableOpacity style={styles.btnSend} onPress={handleresend}>
          <Text style={styles.textSend}>RESEND</Text>
        </TouchableOpacity>
      );
    } else {
      return null;
    }
  };
  
  


  const handleresend = async () => {
    await sendOTPtoEmail(params.Email);
    setotpTimeOut(false)
    setDuration(30)
  };


  



  return (
    <KeyboardAwareScrollView style={styles.container}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.circleBig} />
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#EEF0FF" />
        </TouchableOpacity>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.text}>Please enter the 6-digit code sent to</Text>
        <Text style={styles.textBold}>{params.Email}</Text>

        <View style={styles.textInputContainer}>
          {otp.map((digit, index) => (
            <View style={styles.code} key={index}>
              <TextInput
                keyboardType="default"
                maxLength={1}
                onChangeText={(value) => handleInputChange(index, value)}
                placeholder=" "
                value={digit}
                style={styles.textInput}
                ref={inputRefs[index]}
              />
            </View>
          ))}
        </View>

        <Renderbtn></Renderbtn>
        <Text style={styles.textBody}>
          Did you don’t get code?
          {/* <Text
            style={styles.textButton}>
            {' '}
            RESEND
          </Text> */}
          <Text
            style={styles.textButton}>
            {' '}
            <CountdownTimer
              duration={duration}
              setDuration={
                setDuration
              }
              onTimerOut={value => {
                setotpTimeOut(value);
              }}>
            </CountdownTimer>
          </Text>
        </Text>
        <View style={styles.circleSmall} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default VerifyYourEmail

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
    marginTop: 115,
  },
  text: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#565E8B',
    textAlign: 'center',
    marginTop: 80,
    marginBottom: 5,
  },
  textBold: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: '#565E8B',
    textAlign: 'center',
    marginBottom: 50,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
    marginBottom: 101,
  },
  textInput: {
    paddingVertical: 16,
    fontFamily: 'RedHatText-Regular',
    fontSize: 20,
    color: '#10152F',
    textAlign: 'center',
  },
  code: {
    width: 45,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#CAD0F4',
    justifyContent: 'center',
    alignItems: 'center',
  },
  codeActive: {
    width: 45,
    height: 55,
    borderRadius: 8,
    backgroundColor: '#CAD0F4',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  btnSend: {
    backgroundColor: '#10152F',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 20,
  },
  textSend: {
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
  circleSmall: {
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: '#CED2EA',
    bottom: -100,
    right: -20,
  },
})
import { StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft } from 'phosphor-react-native';

// type OTPInputProps = {
//   length: number;
//   value: Array<string>;
//   disabled: boolean;
//   onChange: (value: Array<string>) => void;
// };

const VerifyYourEmail = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <KeyboardAwareScrollView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.circleBig} />
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#EEF0FF" />
        </TouchableOpacity>
        <Text style={styles.title}>Verify Your Email</Text>
        <Text style={styles.text}>Please enter the 6-digit code sent to</Text>
        <Text style={styles.textBold}>palita.sim@gmail.com</Text>
        
        <View style={styles.textInputContainer}>
          <View style={styles.code}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              placeholder=" "
              style={styles.textInput}
            />
          </View>

          <View style={styles.code}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              placeholder=" "
              style={styles.textInput}
            />
          </View>

          <View style={styles.code}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              placeholder=" "
              style={styles.textInput}
            />
          </View>

          <View style={styles.code}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              placeholder=" "
              style={styles.textInput}
            />
          </View>

          <View style={styles.code}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              placeholder=" "
              style={styles.textInput}
            />
          </View>

          <View style={styles.code}>
            <TextInput
              keyboardType="number-pad"
              maxLength={1}
              placeholder=" "
              style={styles.textInput}
            />
          </View>
        </View>

        <TouchableOpacity style={styles.btnSend}>
          <Text style={styles.textSend}>VERIFY</Text>
        </TouchableOpacity>
        <Text style={styles.textBody}>
          Did you don’t get code?
          <Text
            style={styles.textButton}>
            {' '}
            RESEND
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
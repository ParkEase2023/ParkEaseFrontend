import { StyleSheet, Text, View, Platform, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react'
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ArrowLeft, Key, Eye, EnvelopeSimple } from 'phosphor-react-native';
import { ProfileParamList } from '../stack/ProfileStack';

const SelectForVerify = () => {
  const { params } = useRoute<RouteProp<ProfileParamList, 'SelectForVerify'>>();
  const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
  const [email, setEmail] = useState(params.email);
  return (
    <KeyboardAwareScrollView style={styles.container} >
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.circleBig} />
        <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
          <ArrowLeft size={24} color="#EEF0FF" />
        </TouchableOpacity>
        <Text style={styles.title}>0TP Delivery Method</Text>
        <Text style={styles.text}>Please enter your email address to receive {'\n'}a verification cord.</Text>
        
        <View style={styles.email}>
          <EnvelopeSimple size={24} color="#565E8B" />
          <TextInput
            placeholder="Email"
            style={styles.textInput}
            value={email}
          />
          <Text style={styles.error}>{ }</Text>
        </View>

        <TouchableOpacity style={styles.btnSend} onPress={()=>navigation.navigate('VerifyIdentity')}>
          <Text style={styles.textSend}>SEND</Text>
        </TouchableOpacity>
        <View style={styles.circleSmall} />
      </SafeAreaView>
    </KeyboardAwareScrollView>
  )
}

export default SelectForVerify

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
    marginTop: 100,
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
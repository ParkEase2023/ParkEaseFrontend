import { StyleSheet, Text, View, Image, Platform, TouchableOpacity, TextInput, SafeAreaView } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, EnvelopeSimple, Phone, Key, Eye, EyeSlash } from 'phosphor-react-native';

const SignUp = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  const [textEntry, setTextEntry] = useState(true);
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
    <KeyboardAwareScrollView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <SafeAreaView style={styles.Logo}>
        <Image source={require('../assets/LogoParkEase2.png')} />
        <View style={styles.circleG} />
        <View style={styles.circleB} />
        <View style={styles.circleY} />
      </SafeAreaView>

      <View style={styles.mainContainer}>
        <View style={styles.heading}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <ArrowLeft size={24} color="#565E8B" />
          </TouchableOpacity>
          <Text style={styles.title}>Sign Up</Text>
        </View>

        <View style={styles.textInputContainer}>
          <View style={styles.firstName}>
            <TextInput
              placeholder="First Name"
              style={{
                paddingVertical: 16,
                fontFamily: 'RedHatText-Regular',
                fontSize: 16,
                color: '#565E8B',
              }}
            />
          </View>

          <View style={styles.lastName}>
            <TextInput
              placeholder="Last Name"
              style={{
                paddingVertical: 16,
                fontFamily: 'RedHatText-Regular',
                fontSize: 16,
                color: '#565E8B',
              }}
            />
          </View>
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
          />
        </View>
          
        <View style={styles.email}>
          <Phone size={24} color="#565E8B"/>
          <TextInput
            placeholder="Phone Number"
            style={{
              padding: 16,
              fontFamily: 'RedHatText-Regular',
              fontSize: 16,
              color: '#565E8B',
            }}
          />
        </View>

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
            />
          </View>
          <Entrypassword></Entrypassword>
        </View>

        <View style={styles.password}>
          <View style={styles.itemLeft}>
            <Key size={24} weight="fill" color="#565E8B"/>
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry={textEntry}
              style={{
                padding: 16,
                fontFamily: 'RedHatText-Regular',
                fontSize: 16,
                color: '#565E8B',
              }}
            />
          </View>
          <Entrypassword></Entrypassword>
        </View>
        
        <TouchableOpacity style={styles.btnLogIn}>
          <Text style={styles.textSignUp}>SIGN UP</Text>
        </TouchableOpacity>
        <Text style={styles.textBody}>
          Already have account?
          <Text
            style={styles.textButton}
            onPress={() => navigation.navigate('SignUp')}>
            {' '}
            LOG IN
          </Text>
        </Text>
      </View>
    </KeyboardAwareScrollView>
  )
}

export default SignUp

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
    width: 28,
    height: 28,
    borderRadius: 100,
    backgroundColor: '#94FEBF',
    top: -40,
    right: 75,
  },
  circleB: {
    position: 'absolute',
    width: 58,
    height: 58,
    borderRadius: 100,
    backgroundColor: '#95EDFF',
    top: 45,
    right: -24,
  },
  circleY: {
    position: 'absolute',
    width: 14,
    height: 14,
    borderRadius: 100,
    backgroundColor: '#FEFA94',
    top: 55,
    left: 38,
  },
  mainContainer: {
    flex: 2,
    backgroundColor: '#EEF0FF',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    paddingHorizontal: 25,
    paddingTop: 35,
    paddingBottom: 10,
  },
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 40,
    color: '#10152F',
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  firstName: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#CED2EA',
    elevation: 1,
  },
  lastName: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#CED2EA',
    elevation: 1,
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#CED2EA',
    elevation: 1,
  },
  emailActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  password: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#CED2EA',
    elevation: 1,
  },
  passwordActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  itemLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnLogIn: {
    backgroundColor: '#10152F',
    borderRadius: 16,
    paddingVertical: 16,
    marginBottom: 20,
  },
  textSignUp: {
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
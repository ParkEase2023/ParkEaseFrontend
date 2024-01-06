import { StyleSheet, Text, View, SafeAreaView, Image, TextInput, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { X, Check, Camera, ArrowLeft, EnvelopeSimple, Phone, Key, Eye, EyeSlash } from 'phosphor-react-native';
import profile from '../assets/profile.png';

const EditProfile = () => {
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
    <SafeAreaView style={styles.container}>
      <View style={styles.mainContainer}>
        <View style={styles.circleBig} />

        <View style={styles.heading}>
          <View style={styles.itemLeftHead}>
            <X size={28} weight="bold" color="#fff" />
            <Text style={styles.title}>EditProfile</Text>
          </View>
          <View style={styles.itemRightHead}>
            <Check size={28} weight="bold" color="#239D60" />
          </View>
        </View>
        

        <View style={styles.profileContainer}>
          <View style={styles.profilePicture}>
            <Image source={profile} style={styles.imageProfile} />
            <View style={styles.bgBtnCamera}>
              <Camera size={28} weight="bold" color="#EEF0FF" />
            </View>
          </View>

          <View style={styles.textInputContainer}>
            <View style={styles.firstName}>
              <TextInput
                placeholder="First Name"
                style={styles.shortTextInput}
              />
            </View>

            <View style={styles.lastName}>
              <TextInput
                placeholder="Last Name"
                style={styles.shortTextInput}
              />
            </View>
          </View>

          <View style={styles.emailToPassword}>
            <EnvelopeSimple size={24} color="#565E8B"/>
            <TextInput
              placeholder="Email"
              style={styles.longTextInput}
            />
          </View>
            
          <View style={styles.emailToPassword}>
            <Phone size={24} color="#565E8B"/>
            <TextInput
              placeholder="Phone Number"
              style={styles.longTextInput}
            />
          </View>

          <View style={styles.emailToPassword}>
            <View style={styles.itemLeft}>
              <Key size={24} color="#565E8B"/>
              <TextInput
                placeholder="Password"
                style={styles.longTextInput}
              />
            </View>
            <Entrypassword/>
          </View>

          <View style={styles.ConPassword}>
            <View style={styles.itemLeft}>
              <Key size={24} weight="fill" color="#565E8B"/>
              <TextInput
                placeholder="Confirm Password"
                style={styles.longTextInput}
              />
            </View>
            <Entrypassword/>
          </View>
        </View>

        <View style={styles.circleSmall} />
      </View>

    </SafeAreaView>
  )
}

export default EditProfile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D7DAEF',
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 16,
  },
  circleBig: {
    position: 'absolute',
    width: 378,
    height: 378,
    borderRadius: 200,
    backgroundColor: '#262D57',
    top: -99,
    left: -141,
  },
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 65,
  },
  itemLeftHead: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 24,
    color: '#fff',
    marginLeft: 16,
  },
  itemRightHead: {
    backgroundColor: '#EEF0FF',
    borderRadius: 100,
    padding: 12,
  },
  profileContainer: {
    backgroundColor: '#EEF0FF',
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 20,
    marginTop: 120,
  },
  profilePicture: {
    width: 145,
    height: 145,
    backgroundColor: '#EEF0FF',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: -95,
    marginBottom: 16,
  },
  imageProfile: {
    width: 125,
    height: 125,
    borderRadius: 100,
  },
  bgBtnCamera: {
    position: 'absolute',
    width: 125,
    height: 125,
    backgroundColor: '#10152F',
    opacity: 0.3,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 10,
    right: 10,
  },
  textInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  shortTextInput: {
    paddingVertical: 16,
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#10152F',
  },
  longTextInput: {
    padding: 16,
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#10152F',
  },
  firstName: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
  },
  lastName: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
  },
  firstNameActive: {
    flex: 1,
    marginRight: 10,
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  lastNameActive: {
    flex: 1,
    marginLeft: 10,
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  emailToPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
  },
  emailToPasswordActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    marginBottom: 25,
    paddingHorizontal: 16,
    borderWidth: 2,
    borderColor: '#565E8B',
    elevation: 2,
  },
  ConPassword: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
    paddingHorizontal: 16,
  },
  ConPasswordActive: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DAE0FF',
    borderRadius: 12,
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
  circleSmall: {
    zIndex: -1,
    position: 'absolute',
    width: 95,
    height: 95,
    borderRadius: 100,
    backgroundColor: '#7F85B2',
    bottom: 8,
    right: -20,
  },
})
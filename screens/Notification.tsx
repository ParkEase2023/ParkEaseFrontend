import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { KeyboardAwareScrollView } from'react-native-keyboard-aware-scroll-view';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, Circle } from 'phosphor-react-native';

const Notification = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>0TP Delivery Method</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#565E8B" />
      </Pressable>

      <View style={styles.email}>
        <Circle size={24} color="#565E8B" />
      </View>
      
    </View>
  )
}


export default Notification

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF0FF',
  },
  Circle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#565E8B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 32,
    color: '#10152F',
  },
  text: {
    flex: 1,
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 32,
    color: '#10152F',
  },
  email: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#EEF0FF',
    borderRadius: 12,
    marginBottom: 40,
    paddingHorizontal: 16,
    borderWidth: 1,
    borderColor: '#CED2EA',
    elevation: 1,
  },
});
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { KeyboardAwareScrollView } from'react-native-keyboard-aware-scroll-view';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft } from 'phosphor-react-native';

const AddParking = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <View>
      <Text>AddParking2</Text>
      <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#565E8B" />
      </Pressable>
    </View>
    
  )
}

export default AddParking

const styles = StyleSheet.create({})
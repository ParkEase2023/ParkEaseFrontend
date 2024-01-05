import React from 'react'
import { Alert, Text, TouchableOpacity, StyleSheet, View } from 'react-native'
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const AlertFiterSreach = () => {
   const showAlert = () =>{
      Alert.alert(
         'Alert Title'
      )
   }
   return (
    <KeyboardAwareScrollView style={styles.container} >
      <TouchableOpacity onPress = {showAlert} style = {styles.button}>
         <Text>Filter</Text>
      </TouchableOpacity>
      </KeyboardAwareScrollView>
      
   )
}
export default AlertFiterSreach

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: '#EEF0FF',
  },
   button: {
      backgroundColor: '#4ba37b',
      width: 100,
      borderRadius: 50,
      alignItems: 'center',
      marginTop: 100
   }
})

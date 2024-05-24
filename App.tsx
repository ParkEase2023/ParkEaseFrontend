import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
// import "./config/axiosconfig"
import RootStack from './stack/RootStack'

const App = () => {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
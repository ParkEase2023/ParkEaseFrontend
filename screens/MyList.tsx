import { StyleSheet, Text, View } from 'react-native'
import RequireLogin from '../components/RequireLogin';
import React from 'react'


const MyList = () => {
  return (
    <RequireLogin>
      <View>
        <Text>MyList</Text>
      </View>
    </RequireLogin>
  )
}

export default MyList

const styles = StyleSheet.create({})
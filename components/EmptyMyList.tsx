import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const EmptyMyList = () => {
  return (
    <View style={styles.middle}>
      <Text style={styles.text}>You don't have a favorite parking list yet.</Text>
    </View>
  )
}

export default EmptyMyList

const styles = StyleSheet.create({
    middle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'RedHatText-Medium',
        color: '7F85B2',
    },
})
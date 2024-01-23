import React, { Component, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet,TouchableOpacity, Pressable } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft } from 'phosphor-react-native';

const ChangePlan = () => {
    const [isModalVisible, setModalVisible] = useState(false);
  
    const toggleModal = () => {
      setModalVisible(!isModalVisible);
    };

    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    return (
      <View >
        <Button title="Change Plan" onPress={toggleModal}/>
        <Pressable onPress={() => navigation.goBack()}>
        <ArrowLeft size={24} color="#565E8B" />
      </Pressable>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor: '#EEF0FF', padding: 20, borderRadius: 10, }}>
              <Text style={styles.headerText}>Confirm</Text>
              <Text style={styles.headerText}>Your Changes</Text>
              <Text style={styles.text}>If you change your current</Text>
              <Text style={styles.text}>membership, your current</Text>
              <Text style={styles.text}>membership will be changed</Text>
              <Text style={styles.text}>immediately.</Text>
              {/* <Button title="Close Modal" onPress={toggleModal} /> */}
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleModal} style={styles.button}>
              <Text style={styles.buttonText}>Confirm</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
      </View>
    );
  };

export default ChangePlan;
  
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#EEF0FF',
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        color: '#10152F',
        marginTop: 5,
        marginLeft: 50,
        marginRight: 50,

      },
        text: {
            fontFamily: 'RedHatText',
            textAlign: 'center',
            fontSize: 14,
            color: '#10152F',
            marginTop: 5,
            marginLeft: 50,
            marginRight: 50,
        },
        buttonContainer: {
            flexDirection: 'row', // Arrange children in a row
            justifyContent: 'space-between', // Space evenly between children
            padding: 30,
          },
          button: {
            backgroundColor: '#10152F',
            color: 'black',
            padding: 10,
            paddingLeft: 20,
            paddingRight: 20,
            borderRadius: 10,
            marginHorizontal: 10,
            paddingHorizontal: 120,
            paddingVertical: 10,
          },
          buttonText: {
            textAlign: 'center',
            fontFamily: 'RedHatText',
            fontSize: 20,
            color: '#FEFA94',
          },
});


{/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
<View style={{ backgroundColor: 'white', padding: 20, borderRadius: 10 }}> */}
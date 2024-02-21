import { X } from 'phosphor-react-native';
import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, StyleSheet, TouchableOpacity } from 'react-native';

interface ChangePlanProps {
}

const ChangePlan = (props: ChangePlanProps) => {
  const [isConfirmationModalVisible, setConfirmationModalVisible] = useState(false);
  const toggleConfirmationModal = () => {
    setConfirmationModalVisible(!isConfirmationModalVisible);
  };

  const [isChangePlanModalVisible, setChangePlanModalVisible] = useState(false);
  const toggleChangePlanModal = () => {
    setChangePlanModalVisible(!isChangePlanModalVisible);
  };

  return (
    <View>
      <TouchableOpacity onPress={toggleChangePlanModal} style={styles.btnConfirm}>
        <Text style={styles.textConfirm}>Change Plan</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={isConfirmationModalVisible}
        onRequestClose={toggleConfirmationModal}
      >
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isChangePlanModalVisible}
        onRequestClose={toggleChangePlanModal}
      >
        <View style={styles.container}>
          <View style={styles.modalTextContent}>
            <View style={styles.modalIcon}>
              <TouchableOpacity onPress={ toggleChangePlanModal} >
                <X size={22} color="#141414" />
              </TouchableOpacity>
            </View>
              <Text style={styles.headerText}>Confirm</Text>
              <Text style={styles.headerText}>Your Changes</Text>
              <Text style={styles.text}>If you change your current</Text>
              <Text style={styles.text}>membership, your current</Text>
              <Text style={styles.text}>membership will be changed</Text>
              <Text style={styles.text}>immediately.</Text>
            <View style={styles.buttonContainer}>
              <TouchableOpacity onPress={toggleChangePlanModal} style={styles.button}>
                <Text style={styles.buttonText}>CONFIRM</Text>
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
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalIcon: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
  },
  modalContent: {
    backgroundColor: '#EEF0FF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 20,
  },
  modalTextContent: {
    backgroundColor: '#EEF0FF',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
    paddingVertical: 20,

  },
  headerText: {
    fontFamily: 'RedHatText-Bold',
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: '#10152F',
  },
  text: {
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 14,
    color: '#262D57',
    marginTop: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
    marginTop: 20,
  },
  button: {
    backgroundColor: '#10152F',
    padding: 10,
    width: "100%", 
    paddingVertical: 10,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 20,
    color: '#FEFA94',
  },
  btnConfirm: {
    backgroundColor: '#10152F',
    borderRadius: 16,
    width: 343,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textConfirm: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 18,
    color: '#FEFA94',
  },
});
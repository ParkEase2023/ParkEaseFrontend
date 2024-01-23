import React from 'react';
import { View, Text, Modal, TouchableOpacity, StyleSheet } from 'react-native';
import Option from './Option';

interface PopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopupFilter: React.FC<PopupProps> = ({ isVisible, onClose }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        onClose();
      }}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.textFilter}> Filter </Text>
          <View style={styles.hairline} />
          <Option />
          <TouchableOpacity onPress={onClose} style={styles.btnLogIn}>
            <Text style={styles.textSave}>Save</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#EEF0FF',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    marginTop: 20,
  },
  btnLogIn: {
    backgroundColor: '#10152F',
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    paddingVertical: 10,
    paddingHorizontal: 75,
    marginBottom: 5,
  },
  textFilter: {
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 18,
    color: '#10152F',
    paddingBottom: 15
  },
  hairline: {
    backgroundColor: '#DAE0FF',
    height: 2,
    width: 200
  },
  textSave: {
    textAlign: 'center',
    fontFamily: 'RedHatText-Bold',
    fontSize: 18,
    color: '#FEFA94'
  },
});

export default PopupFilter;

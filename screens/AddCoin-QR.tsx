import React,{ useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import { ArrowLeft } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from'react-native-keyboard-aware-scroll-view';
import { AuthTabParamList } from '../stack/AuthStack';


interface PopupProps {
  onClose: () => void;
}
const AddCoinQR: React.FC<PopupProps> = ({ onClose }) => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.headerContent}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft size={24} color="#565E8B" />
          </Pressable>
          <Text style={styles.headerText}>Add coins to your account</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.qrcode}>
      <Image
        source={require('../assets/Qrcod.png')}
        style={{ width: 300, height: 300 , marginRight: 50, marginLeft: 50}}
      />
      </View>
      <View>
      <TouchableOpacity onPress={onClose} style={styles.btnConfirm}>
            <Text style={styles.textConfirm}>Finished</Text>
          </TouchableOpacity>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal: 25,
    padding: 30,
    backgroundColor: '#EEF0FF',
  },
  header: {
    width: '100%',
    paddingVertical: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
  headerText: {
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#10152F',
    marginLeft: 50,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: '#565E8B',
    width: '150%',
    // You can adjust the width, color, and other styles as needed
  },
  buttonContainer: {
    flexDirection: 'row', // Arrange children in a row
    justifyContent: 'space-between', // Space evenly between children
    padding: 30,
  },
  button: {
    backgroundColor: '#DAE0FF',
    color: 'black',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  buttonText: {
    color: 'black',
    textAlign: 'center',
  },
  textConfirm: {
    textAlign: 'center',
    fontFamily: 'RedHatText',
    fontSize: 18,
    color: '#FEFA94'
  },
  btnConfirm: {
    backgroundColor: '#10152F',
    borderRadius: 15,
    padding: 10,
    elevation: 2,
    marginTop: 15,
    // marginLeft: 100,
    paddingVertical: 10,
    paddingHorizontal: 140,
    marginBottom: 5,
  },
  qrcode: {
    padding: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
});

export default AddCoinQR;

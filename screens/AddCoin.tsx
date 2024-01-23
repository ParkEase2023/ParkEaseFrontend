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
const AddCoin: React.FC<PopupProps> = ({ onClose }) => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const [text, setText] = useState('');
    // const [inputNumber, setInputNumber] = useState('');
    const [inputNumber, setInputNumber] = useState<number>(0); 
    const [isModalVisible, setModalVisible] = useState(false);
    const handleButtonClick = () => {
      const newNumber = inputNumber + 100;
      setInputNumber(newNumber);
    };
    
    const handleButtonClick1 = () => {
      const newNumber = inputNumber + 200;
      setInputNumber(newNumber);
    };
    
    const handleButtonClick2 = () => {
      const newNumber = inputNumber + 500;
      setInputNumber(newNumber);
    };
    
    const handleButtonClick3 = () => {
      const newNumber = inputNumber + 1000;
      setInputNumber(newNumber);
    };
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
      <View style={styles.boxtext}>
        <View style={styles.row}>
      <Image
          source={require('../assets/Coin.png')}
          style={{ width: 25, height: 25 , marginRight: 10, marginLeft: 10}}
        />
        <Text style={styles.textbox}>Remaining Balance</Text>
        <Text style={styles.textright}>600 coins</Text>
    </View>
      </View>
      <View style={ styles.textbox1}>
      <View style={styles.row}>
      <Image
        source={require('../assets/Money.png')}
        style={{ width: 30, height: 30 , marginRight: 10, marginLeft: 10}}
      />
      <TextInput
        style={styles.input}
        placeholder="Enter a number"
        keyboardType="numeric"
        onChangeText={(text) => {
          // Ensure the entered text is a valid number
          const parsedNumber = parseFloat(text);
          setInputNumber(isNaN(parsedNumber) ? 0 : parsedNumber);
        }}
        value={inputNumber.toString()} // Convert the number to a string for TextInput
      />
        <Text style={styles.textright1}>THB</Text>
        </View>
      </View>
      <View>
      <View style={{margin:10, marginLeft:40}}>
        <Text>Minimum balance:  100 THB</Text>
      </View>
      <View style={styles.buttonContainer}>
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>+100</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleButtonClick1} style={styles.button}>
        <Text style={styles.buttonText}>+200</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleButtonClick2} style={styles.button}>
        <Text style={styles.buttonText}>+500</Text>
      </TouchableOpacity>
      
      <TouchableOpacity onPress={handleButtonClick3} style={styles.button}>
        <Text style={styles.buttonText}>1,000</Text>
      </TouchableOpacity>
      </View>
      </View>
      <View>
      <TouchableOpacity onPress={onClose} style={styles.btnConfirm}>
            <Text style={styles.textConfirm}>Confirm</Text>
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
  input: {
    height: 50,
    borderColor: '#DAE0FF',
    borderWidth: 1,
    padding: 10,
    paddingHorizontal: 10,
    width: 200,
    backgroundColor: '#DAE0FF',
    borderRadius: 10,
  },
  boxtext: {
    display: 'flex',
    backgroundColor: '#565E8B',
    height: 60,
    padding: 15, 
    width: 420,
    marginBottom: 70,
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textbox: {
    display: 'flex',
    backgroundColor: '#565E8B',
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textbox1: {
    display: 'flex',
    backgroundColor: '#DAE0FF',
    fontFamily: 'RedHatText-Bold',
    fontSize: 14,
    height: 60,
    color: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  textright: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: 'white',
    textAlign: 'right',
    marginLeft: 100,
  },
  textright1: {
    fontFamily: 'RedHatText',
    fontSize: 16,
    color: 'black',
    textAlign: 'right',
    marginLeft: 90,
    marginRight: 10,

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
});

export default AddCoin;

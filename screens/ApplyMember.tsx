import React,{ useState } from 'react';
import { View, Text, StyleSheet, Pressable, TextInput, Image, TouchableOpacity, Alert, Button,Modal} from 'react-native';
import { ArrowLeft, Check } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { KeyboardAwareScrollView } from'react-native-keyboard-aware-scroll-view';
import { AuthTabParamList } from '../stack/AuthStack';
import PopupFilter from '../components/PopupFilter';
import ChangePlan from '../components/ChangeMember';

const ApplyMember = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const dynamicValue1 = '(';
    const dynamicValue2 = ')';
    const [isChangePlanModalVisible, setChangePlanModalVisible] = useState(false);
    const [isCancelMembershipModalVisible, setCancelMembershipModalVisible] = useState(false);
  
    const toggleChangePlanModal = () => {
      setChangePlanModalVisible(!isChangePlanModalVisible);
    };
  
    const toggleCancelMembershipModal = () => {
      setCancelMembershipModalVisible(!isCancelMembershipModalVisible);
    };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
      <View style={styles.headerContent}>
          <Pressable onPress={() => navigation.goBack()}>
            <ArrowLeft size={24} color="#565E8B" />
          </Pressable>
          <Text style={styles.headerText}>Apply For Membership</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.header1}>
      <View style={styles.headerContent1}>
        <Image
            source={require('../assets/Coin.png')}
        /> 
          <Text style={styles.headerText1}>49</Text>
            <Text style={{fontSize: 20, color: 'white'}}>/month</Text>
        </View>
      </View>
          <Text style={styles.headerText3}>Member </Text>
      <View style={styles.topic}>
      <View style={styles.row}>
        <Check size={32} color="#11bb25" />
        <Text style={styles.textdetail}>Can see parking details</Text>
      </View>
      <View style={styles.row}>
        <Check size={32} color="#11bb25" />
        <Text style={styles.textdetail}>Can reservations</Text>
      </View>
      <View style={styles.row}>
        <Check size={32} color="#11bb25" />
        <Text style={styles.textdetail}>Can do transactions</Text>
      </View>
      <View style={styles.row}>
        <Check size={32} color="#11bb25" />
        <Text style={styles.textdetail}>Can add parking locations</Text>
      </View>
      </View>
      <View>
      <TouchableOpacity onPress={toggleChangePlanModal} style={styles.btnConfirm}>
            <Text style={styles.textConfirm}>Change Plan</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={true}
          visible={isChangePlanModalVisible}
          onRequestClose={toggleChangePlanModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, }}>
              <Text style={styles.headerText}>Confirm</Text>
              <Text style={styles.headerText}>Your Changes</Text>
              <Text style={styles.text}>If you change your current</Text>
              <Text style={styles.text}>membership, your current</Text>
              <Text style={styles.text}>membership will be changed</Text>
              <Text style={styles.text}>immediately.</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleChangePlanModal} style={styles.btnpopup}>
              <Text style={styles.textConfirm}>Confirm</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
        </View>
        <View>
      <TouchableOpacity onPress={toggleCancelMembershipModal} style={styles.btnCancel}>
            <Text style={styles.textCancel}>Cancel Membership</Text>
          </TouchableOpacity>
          <Modal
          animationType="slide"
          transparent={true}
          visible={isCancelMembershipModalVisible}
          onRequestClose={toggleCancelMembershipModal}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ backgroundColor: 'white', padding: 10, borderRadius: 10, }}>
              <Text style={styles.headerText}>Confirm</Text>
              <Text style={styles.headerText}>Your Cancellation</Text>
              <Text style={styles.text}>If you cancel your current</Text>
              <Text style={styles.text}>membership, your current</Text>
              <Text style={styles.text}>membership will be changed</Text>
              <Text style={styles.text}>immediately.</Text>
            <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={toggleCancelMembershipModal} style={styles.btnpopup}>
              <Text style={styles.textConfirm}>Cancel</Text>
            </TouchableOpacity>
            </View>
          </View>
          </View>
        </Modal>
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
    backgroundColor: '#10152F',
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
    paddingLeft: 80,
    fontWeight: 'bold',
    color: 'white',
  },
  header1: {
    paddingTop: 40,
    paddingLeft: 50,
    width: '100%',
    paddingVertical:10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerContent1: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
  },
  headerText1: {
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 60,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
  },
  headerText2: {
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 10,
    paddingTop: 10,
  },
  headerText3: {
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginRight: 250,
    paddingBottom: 10,
  },
  line: {
    borderBottomWidth: 1,
    borderBottomColor: 'white',
    width: '150%',
  },
  topic: {
    paddingRight: 150 ,
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
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
    fontSize: 20,
    color: '#FEFA94',
  },
  textCancel: {
    textAlign: 'center',
    fontFamily: 'RedHatText',
    fontSize: 16,
    color: 'white',
  },
  btnConfirm: {
    backgroundColor: 'white',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    marginTop: 210,
    paddingVertical: 10,
    paddingHorizontal: 120,
    marginBottom: 5,
  },
  btnCancel: {
    padding: 10,
    borderRadius: 5,
  },
  qrcode: {
    padding: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 50,
  },
  boxtext: {
    marginTop: 50,
    paddingRight: 250,
    fontFamily: 'RedHatText-Bold',
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 700,
    color: '#10152F',
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
  text: {
    fontFamily: 'RedHatText',
    textAlign: 'center',
    fontSize: 14,
    color: '#10152F',
    marginTop: 5,
    marginLeft: 50,
    marginRight: 50,
  },
  btnpopup:{
    backgroundColor: '#10152F',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 120,
    marginBottom: 5,
  },
  textdetail:{
    color: 'white',
  }
});

export default ApplyMember;

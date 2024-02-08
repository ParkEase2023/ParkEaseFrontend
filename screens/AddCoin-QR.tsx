import React,{  } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert, PermissionsAndroid, ScrollView, Platform, GestureResponderEvent, Linking} from 'react-native';
import { CaretLeft, DownloadSimple } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthTabParamList } from '../stack/AuthStack';
import { CameraRoll } from "@react-native-camera-roll/camera-roll";
import RNFS from 'react-native-fs';

const AddCoinQR = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    const SaveImageToGallery = async () => {
      const imageUrl = 'https://www.example.com/image.jpg';
      try {
        if (Platform.OS === 'android') {
          await PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
            {
              title: 'Storage Permission Required',
              message: 'This app needs access to your storage to save images.',
              buttonPositive: 'OK',
            }
          );
          if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
            // Proceed with the download if permission is granted
            CameraRoll.saveAsset(imageUrl);
          }
        }
      } catch (error) {
        Alert.alert('Error', 'An error occurred while saving the image.');
        console.error(error);
      }
    };
return (
      <ScrollView style={styles.container}>
        <View style={styles.row}>
          <View style={styles.caretLeft}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <CaretLeft size={22} color="#10152F"  />
            </TouchableOpacity>
          </View>
          <View style={styles.flexText}>
            <Text style={styles.headerText}>Add coins to your account</Text>
          </View>
          <View style={styles.DownloadSimple}>
            <TouchableOpacity onPress={SaveImageToGallery} >
              <DownloadSimple size={22} color="#10152F" />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.line}></View>
        <View style={styles.qrcode}>
          <Image
            source={require('../assets/Qrcod.png')}
        />
        </View>
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#EEF0FF',
    flex: 1,
    paddingVertical: 40,
  },
  row: {
    paddingHorizontal: 25,
    flexDirection: 'row',

  },
  caretLeft: {
    flex: 1,
  },
  flexText: {
    flex: 4,
    alignItems: 'center',
  },
  DownloadSimple: {
    flex: 1,
    alignItems: 'flex-end',
  },
  headerText: {
    fontFamily: 'RedHatText',
    fontSize: 16,
    color: '#10152F'
 },
  line: {
    borderBottomColor: '#CED2EA',
    borderBottomWidth: 1,
    width: '100%',
    paddingTop: 10,
  },
  qrcode: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingVertical: 100,
  }
});

export default AddCoinQR;

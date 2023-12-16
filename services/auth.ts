import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

export const getToken = async () => {
  const token = await AsyncStorage.getItem('token');
  return token;
  // return token.length > 0 ? String(token) : '';
};


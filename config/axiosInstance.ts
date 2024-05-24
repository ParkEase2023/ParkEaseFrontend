import axios, {AxiosRequestConfig, AxiosResponse, AxiosError} from 'axios';
import Config from 'react-native-config';
import {getToken} from '../services/auth';
axios.defaults.baseURL = Config.REACT_APP_API_URL;
const onRequest = async (config: any) => {
  let token = '';

  await getToken().then(value => {
    token = value ? String(value) : '';
  });

  config.headers['Authorization'] = 'Bearer ' + token;
  console.log('config ', config);
  return config;
};

export const http = axios.create({
  baseURL: Config.REACT_APP_API_URL,
  headers: {
      'Content-Type': 'application/json'
  }
});

const onRequestError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err);
};
http.interceptors.request.use(onRequest, onRequestError);

const onResponse = (response: AxiosResponse): AxiosResponse => {
  return response.data;
};
const onResponseError = (err: AxiosError): Promise<AxiosError> => {
  return Promise.reject(err.response?.data);
};
http.interceptors.response.use(onResponse, onResponseError);

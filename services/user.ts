import { http } from '../config/axiosInstance';

export const getProfile = async () => {
    return await http.get('/user/getprofile');
  };
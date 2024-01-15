import { http } from '../config/axiosInstance';

export const getAllParking = async () => {
    const res = await http.get('/parking/getallparking');
    // console.log('res', res);
    return res;
};
  
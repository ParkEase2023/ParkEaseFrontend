import { http } from '../config/axiosInstance';
interface IupdateUser {
  firstname: string;
  lastname: string;
  phone: string;
  email: string;
  password:string
  profile_picture: string;
}
export const getProfile = async () => {
    return await http.get('/user/getprofile');
};

export const updateProfile = async (uid: string, body: IupdateUser) => {
  const res = await http.put('/user/updateprofile/' + uid, body);
  console.log('res  updateUser ', res);
  return res;
};


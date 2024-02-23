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

export const verifyIdentity = async (email: string) => {
  const res = await http.put('/user/verifyIdentity/' + email);
  console.log('res  verifyIdentity', res);
  return res;
};

export const accountLinked = async (email: string) => {
  const res = await http.put('/user/accountLinked/' + email);
  console.log('res  accountLinked', res);
  return res;
};



import { http } from '../config/axiosInstance';

export const checkemail = async (email:any) => {
    const res = await http.get('/forget/checkemail', {params: {email: email}});
    // console.log('res', res);
    return res;
};

export const sendOTPtoEmail = async (email:any) => {
    const res = await http.get('/emails/sendemailtoforgotpw', {params: {email: email}});
    // console.log('res', res);
    return res;
};
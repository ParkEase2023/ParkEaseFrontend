import { http } from '../config/axiosInstance';

interface Iforgetpassword {
    password:string
  }

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

export const checkeOTP = async (otp:any) => {
    const res = await http.get('/forget/checkeOTP', {params: {OTP: otp}});
    // console.log('res', res);
    return res;
};

export const forgetpassword = async (email: string, body: Iforgetpassword) => {
    const res = await http.put('/forget/forgetpassword/' + email, body);
    console.log('res  forgetpassword ', res);
    return res;
};
  
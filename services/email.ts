import { http } from '../config/axiosInstance';

interface Iemail {
    email:string
    text:string
}


export const sendEmailNoti = async (body: Iemail) => {
    const res = await http.post('/emails/sendEmailNoti/', body);
    return res;
};
import { http } from '../config/axiosInstance';

interface Iaddcoin {
    amount: number;
    phonenumber: string
}


interface Icheck {
    Id : string;
}


export const createdPromptPayQRCode = async (body: Iaddcoin) => {
    const res = await http.post('/omise/created/', body);
    return res;
};


export const CheckCharge  = async (body: Icheck) => {
    const res = await http.post('/omise/check/', body);
    return res;
};
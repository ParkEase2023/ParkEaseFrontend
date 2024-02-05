import { http } from '../config/axiosInstance';

interface Iaddcoin {
    amount: number;
    phonenumber: string
}




export const createdPromptPayQRCode = async (body: Iaddcoin) => {
    const res = await http.post('/omise/created/', body);
    return res;
};
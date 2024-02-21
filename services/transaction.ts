import { http } from '../config/axiosInstance';

interface Iaddcoins {
    coins:number;
    addcoins:number;
}


export const addCoins = async (email: string, body: Iaddcoins) => {
    const res = await http.put('/transaction/addcoins/' + email, body);
    console.log('res  addcoins ', res);
    return res;
};
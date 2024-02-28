import { http } from '../config/axiosInstance';

interface Iaddcoins {
    coins:number;
    addcoins:number;
}

interface IwithdrawMoney {
    coins:number;
    withdrawmoney:number;
    recipienId:string;
}



export const addCoins = async (email: string, body: Iaddcoins) => {
    const res = await http.put('/transaction/addcoins/' + email, body);
    console.log('res  addcoins ', res);
    return res;
};

export const withdrawMoney = async (email: string, body: IwithdrawMoney) => {
    const res = await http.put('/transaction/withdrawMoney/' + email, body);
    console.log('res  withdrawMoney ', res);
    return res;
};

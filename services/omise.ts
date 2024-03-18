import { http } from '../config/axiosInstance';

interface Iaddcoin {
    amount: number;
    phonenumber: string
}


interface Icheck {
    Id : string;
}

interface Irecipien { 
    firstname : string;
    lastname: string;
    email: string;
    taxId:string;
    bank:string;
    accountname:string;
    accountnumber:string;
}

interface ITransfers {
    withdrawmoney:number;
    recipienId:string;
}


export const createdPromptPayQRCode = async (body: Iaddcoin) => {
    const res = await http.post('/omise/created/', body);
    return res;
};


export const CheckCharge  = async (body: Icheck) => {
    const res = await http.post('/omise/check/', body);
    return res;
};

export const createdRecipient = async (body: Irecipien) => {
    const res = await http.post('/omise/createrecipient/', body);
    return res;
};

export const Transfers = async (body: ITransfers) => {
    const res = await http.post('/omise/transfers/', body);
    console.log('res  transfers ', res);
    return res;
};

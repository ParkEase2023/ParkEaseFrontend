import { http } from '../config/axiosInstance'; 

interface IApplyMember {
    coins:string;
    price:string;
    roles:number;
}

interface IApplyPartner {
    coins:string;
    price:string;
    roles:number;
}

export const applyMember = async (email: string, body: IApplyMember) => {
    const res = await http.put('/membership/applyMember/' + email, body);
    console.log('res  applyMember ', res);
    return res;
};


export const applyPartner = async (email: string, body: IApplyPartner) => {
    const res = await http.put('/membership/applyPartner/' + email, body);
    console.log('res  applyPartner ', res);
    return res;
};
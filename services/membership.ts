import { http } from '../config/axiosInstance'; 

interface IApplyMember {
    coins:number;
    price:number;
    roles:any;
}

interface IApplyPartner {
    coins:number;
    price:number;
    roles:any;
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
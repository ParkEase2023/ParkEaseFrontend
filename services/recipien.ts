import { http } from '../config/axiosInstance';

interface Irecipien {
    userId: string;
    recipienId: string;
    firstname: string;
    lastname:string;
    email: string;
    taxId:string;
    bank:string;
    accountname:string;
    accountnumber:string;
}

interface Idestroy {
    userId: string;
    recipienId: string;
}


export const createRecipienOnDB = async (body: Irecipien) => {
    const res = await http.post('/recipien/createrecipienOnDB', body);
    return res;
};

export const getRecipienOnDB = async (UserId: any) => {
    const res = await http.get('/recipien/getRecipienOnDB/', {params: {userId: UserId}});
    return res;
};

export const destroyRecipien = async (body: Idestroy) => {
    const res = await http.post('/recipien/destroyRecipien', body);
    return res;
};
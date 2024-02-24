import { http } from '../config/axiosInstance';

interface Irecipien {
    useId: string;
    recipienId: string;
    firstname: string;
    lastname:string;
    email: string;
    taxId:string;
    bank:string;
    accountname:string;
    accountnumber:string;
}

export const createRecipienOnDB = async (body: Irecipien) => {
    const res = await http.post('/recipien/createrecipienOnDB', body);
    return res;
};

export const getRecipienOnDB = async (UserId: any) => {
    const res = await http.get('/recipien/getRecipienOnDB/', {params: {userId: UserId}});
    return res;
};
import { http } from '../config/axiosInstance';

interface Irecipien {
    useId: string;
    recipienId: string;
    approve_status: boolean;
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
    // console.log('res createComment ', res);
    return res;
};
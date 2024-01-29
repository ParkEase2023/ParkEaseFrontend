import { http } from '../config/axiosInstance';

interface Imylist {
    parkingId: string
    userId: string
}

export const addMyList = async (body: Imylist) => {
    const res = await http.post('/mylist/addmylist/', body);
    return res;
};
import { http } from '../config/axiosInstance';

interface Imylist {
    parkingId: string
    userId: string
}

export const addMyList = async (body: Imylist) => {
    const res = await http.post('/mylist/addmylist/', body);
    return res;
};

export const getMyList = async (UserId: any) => {
    const res = await http.get('/mylist/getmylist/', {params: {userId: UserId}});
    return res;
};

export const deleteMyList = async (myListId: any) => {
    const res = await http.delete('/mylist/deletemylist', {params: {_id: myListId}});
    return res;
};
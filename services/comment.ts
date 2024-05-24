import { http } from '../config/axiosInstance';

interface IcommentbyUser {
    createBy: string;
    parkingId: string;
    comment: string;
    rate: number;
}

export const createComment = async (body: IcommentbyUser) => {
    const res = await http.post('/comment/createcomment', body);
    // console.log('res createComment ', res);
    return res;
};

export const getComment = async (ParkingId: any) => {
    const res = await http.get('/comment/getcomment', {params: {parkingId: ParkingId}});
    return res;
  };
import { http } from '../config/axiosInstance';

interface Inotification {
    userId: string;
    Parking_ownerId: string;
    Topic: string;
    Booking: boolean;
    From: string;
    Parking_name: string;
    Coins: number;
}

export const createNotification = async (body: Inotification) => {
    const res = await http.post('/notification/createnotification/', body);
    return res;
};


export const getNotification = async (UserId: any) => {
    const res = await http.get('/notification/getnotification/', {params: {userId: UserId}});
    return res;
};
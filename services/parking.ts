import { http } from '../config/axiosInstance';

interface IParking {
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    phone: string;
    price: number;
    booking: boolean;
    type: string;
    opening_status: boolean;
    timeOpen: string;
    timeClose: string;
    providerBy: string;
    location_address: string;
    parking_picture1: string;
    parking_picture2: string;
    parking_picture3: string;
    opening_mo: boolean;
    opening_tu: boolean;
    opening_we: boolean;
    opening_th: boolean;
    opening_fr: boolean;
    opening_sa: boolean;
    opening_su: boolean;
}

export const getAllParking = async () => {
    const res = await http.get('/parking/getallparking');
    // console.log('res', res);
    return res;
};

export const createparking = async (body: IParking) => {
    const res = await http.post('/parking/createparking', body);
    console.log('res createparking ', res);
    return res;
};

export const getMyparking = async (CreateBy: any) => {
    const res = await http.get('/parking/getMyparking', {
        params: { createBy: CreateBy }
    });
    return res;
};

export const deleteMyparking = async (myParkingId: any) => {
    const res = await http.delete('/parking/deleteMyparking', {params: {_id: myParkingId}});
    return res;
};

export const openParking = async (id: string) => {
    const res = await http.put('/parking/openParking/' + id);
    // console.log('res  openParking ', res);
    return res;
};

export const closeParking = async (id: string) => {
    const res = await http.put('/parking/closeParking/' + id);
    // console.log('res  closeParking ', res);
    return res;
};
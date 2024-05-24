import { http } from '../config/axiosInstance';

interface IBooking {
    customerId: string;
    parking_name: string;
    timestart: string;
    timestop: string;
    ReservedBy: string;
    phoneNumber:string;
    carModel: string;
    carColor: string;
    carRegistration:string;
    totalPrice: number;
    dateStart:any;
    dateEnd:any;
}

interface IpaymentBookingOwner {
    coins:number;
    addcoins:number;
}

interface IpaymentBookingCustomer {
    coins:number;
    withdrawmoney:number;
}

export const paymentBookingOwner = async (email: string, body: IpaymentBookingOwner) => {
    const res = await http.put('/booking/paymentBookingOwner/' + email, body);
    console.log('res  paymentBookingOwner ', res);
    return res;
};

export const paymentBookingCustomer = async (email: string, body: IpaymentBookingCustomer) => {
    const res = await http.put('/booking/paymentBookingCustomer/' + email, body);
    console.log('res  paymentBookingCustomer ', res);
    return res;
};


export const createBooking = async (body: IBooking) => {
    const res = await http.post('/booking/createBooking', body);
    console.log('res createBooking ', res);
    return res;
};

export const getBooking = async (UserId: any) => {
    const res = await http.get('/booking/getBooking/', {params: {userId: UserId}});
    return res;
};



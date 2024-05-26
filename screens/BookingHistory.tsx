import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import { StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import ContentBookingHistory from '../components/ContentBookingHistory';
import { getProfile } from '../services/user';
import { getBooking } from '../services/booking';

export interface IProfile {
    _id: string;
}

interface ImyBooking {
    userId: string;
    parking_name: string;
    dateStart: any;
    dateEnd: any;
    totalPrice: number;
    ReservedBy: string;
    phoneNumber: string;
    carModel: string;
    carColor: string;
    carRegistration: string;
}

const BookingHistory = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [profile, setProfile] = React.useState<IProfile>({
        _id: ''
    });
    const [checkData, setCheckData] = useState('');
    // const [myBooking, setMyBooking] = useState<ImyBooking>({
    //     userId: '',
    //     parking_name: '',
    //     dateStart: '',
    //     dateEnd: '',
    //     totalPrice: 0,
    //     ReservedBy: '',
    //     phoneNumber: '',
    //     carModel: '',
    //     carColor: '',
    //     carRegistration: ''
    // });

    const [myBooking, setMyBooking] = useState<ImyBooking[]>([]);

    const getDataBooking = async () => {
        const { data } = await getProfile();
        const list: any = await getBooking(data._id);
        console.log(list);
        await setMyBooking(list.myBooking);
        await setCheckData(list.message);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await getDataBooking();
        });
        return unsubscribe;
    }, [navigation]);

    const RenderMyBooking = (): JSX.Element | null => {
        if (checkData === 'success') {
            return (
                <>
                    {myBooking.map((item: any, index) => {
                        return (
                            <ContentBookingHistory
                                key={index}
                                parking_name={item.parking_name}
                                timeStart={item.dateStart}
                                timeEnd={item.dateEnd}
                            />
                        );
                    })}
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} color="#10152F" />
                </TouchableOpacity>
                <View style={styles.center}>
                    <Text style={styles.headerText}>Booking History</Text>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.container}>
                <RenderMyBooking />
            </View>
        </ScrollView>
    );
};
export default BookingHistory;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#D7DAEF'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 40
    },
    center: {
        flex: 1,
        alignItems: 'center'
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F'
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        marginTop: 10
    },
    container: {
        // paddingVertical: 45,
        paddingHorizontal: 25
    }
});

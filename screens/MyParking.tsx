import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CaretLeft, Plus } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import ContentMyParking from '../components/ContentMyParking';
import { AddParkingParamList } from '../stack/AddparkingStack';
import { MenuParamList } from '../stack/MenuStack';
import { getMyparking } from '../services/parking';
import { ScrollView } from 'react-native-gesture-handler';

interface Myparking {
    id: string;
    latitude: number;
    longitude: number;
    title: string;
    phone_number: string;
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

const MyParking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const navigation2 = useNavigation<NativeStackNavigationProp<AddParkingParamList>>();
    const { params: params1 } = useRoute<RouteProp<AddParkingParamList, 'MyParking'>>();
    const { params: params2 } = useRoute<RouteProp<ProfileParamList, 'MyParking'>>();
    const [navi, setNavi] = useState('');
    const [userId, setUserId] = useState('');
    const [myParking, setMyparking] = useState<Myparking[]>([]);
    const [checkData, setCheckData] = useState('');

    useEffect(() => {
        addValue();
    }, []);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            fetchData();
        });
        return unsubscribe;
    }, [navigation]);

    const addValue = () => {
        if (params1.navi === 'parking') {
            setNavi(params1.navi);
            setUserId(params1.userId);
        } else if (params2.navi === 'profile') {
            setNavi(params2.navi);
            setUserId(params2.userId);
        }
    };

    const handlenavi = () => {
        console.log(navi);
        if (navi === 'parking') {
            navigation2.navigate('AddParking');
        } else {
            navigation.navigate('AddParkingStack', { state: undefined });
        }
    };

    const fetchData = async () => {
        try {
            const myParking: any = await getMyparking(params1.userId || params2.userId);
            console.log(myParking.Myparking);
            setMyparking(myParking.Myparking);
            setCheckData(myParking.message);
        } catch (err: any) {
            setCheckData(err.message);
            console.log(err.message);
        }
    };

    const RenderMyparking = (): JSX.Element | null => {
        // const navigation = useNavigation<NativeStackNavigationProp<HomeParamList>>();
        if (checkData === 'success') {
            return (
                <>
                    {myParking.map((item: any, index) => {
                        // const onClick = () => {
                        //   console.log('call api detail toilet', item);
                        //   if (item) {
                        //     navigation.navigate('DetailToilet', {
                        //       _id: item._id,
                        //       latitude: item.latitude,
                        //       longitude: item.longitude,
                        //       title: item.title,
                        //       contact: item.contact,
                        //       cost: item.cost,
                        //       handicap: item.handicap,
                        //       free: item.free,
                        //       type: item.type,
                        //       timeOpen: item.timeOpen,
                        //       timeClose: item.timeClose,
                        //       toiletpicture: item.toiletpicture,
                        //     });
                        //   }
                        // };
                        return (
                            <TouchableOpacity key={index}>
                                <ContentMyParking
                                    id={item.id}
                                    latitude={item.latitude}
                                    longitude={item.longitude}
                                    title={item.title}
                                    phone_number={item.phone_number}
                                    price={item.price}
                                    booking={item.booking}
                                    type={item.type}
                                    opening_status={item.opening_status}
                                    timeOpen={item.timeOpen}
                                    timeClose={item.timeClose}
                                    providerBy={item.providerBy}
                                    location_address={item.location_address}
                                    parking_picture1={item.parking_picture1}
                                    parking_picture2={item.parking_picture2}
                                    parking_picture3={item.parking_picture3}
                                    opening_mo={item.opening_mo}
                                    opening_tu={item.opening_tu}
                                    opening_we={item.opening_we}
                                    opening_th={item.opening_th}
                                    opening_fr={item.opening_fr}
                                    opening_sa={item.opening_sa}
                                    opening_su={item.opening_su}
                                    //   onSelected={value => {
                                    //     setModal(value);
                                    //   }}
                                    //   onSelected2={value => {
                                    //     settoiletID(value);
                                    //   }}
                                />
                            </TouchableOpacity>
                        );
                    })}
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.circleBig} />
                <View style={styles.circleSmallBotton} />
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={24} weight="bold" color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>My Parking</Text>
                    <TouchableOpacity style={styles.circleWhite} onPress={handlenavi}>
                        <Plus size={24} weight="bold" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                        <RenderMyparking></RenderMyparking>
                </View>
            </View>
        </View>
    );
};
export default MyParking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7DAEF'
    },
    mainContainer: {
        flex: 1,
        marginBottom: 25
    },
    circleBig: {
        position: 'absolute',
        width: 380,
        height: 380,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -72,
        left: -144
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 65,
        justifyContent: 'space-between'
    },
    title: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#fff'
    },
    circleWhite: {
        width: 48,
        height: 48,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleSmallBotton: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#262D57',
        bottom: 52,
        right: 25
    },
    bodyContainer: {
        flex: 1,
        // marginTop: 25,
        paddingHorizontal: 25
    }
});

import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CoinVertical, PencilSimple, Star, Trash } from 'phosphor-react-native';
import Switch from './Switch';
import { getComment } from '../services/comment';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import { closeParking, openParking } from '../services/parking';

interface IContentMyParking {
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
    onSelected: (value: boolean) => void;
    onSelected2: (value: boolean) => void;
    onSelected3: (value: string) => void;
}

interface Comment {
    rate: number;
}

const ContentMyParking = (props: IContentMyParking) => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    let Rate: number = 0;
    let sumRate: number = 0;
    const [isActive, setIsActive] = useState(props.opening_status);
    const [comment, setComment] = useState<Comment[]>([]);
    const [modal, setModal] = useState(false);
    const [ticker, setTicker] = useState(false);

    const [SumRate, setsumRate] = useState('0');
    const handlePress = async () => {
        if (isActive === true) {
            await closeParking(props.id);
            setIsActive(!isActive);
        } else {
            await openParking(props.id);
            setIsActive(!isActive);
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const comments: any = await getComment(props.id);
                setComment(comments.Comment);
                // setCheckData(comments.message);
            } catch (err: any) {
                // setCheckData(err.message);
                console.log(err.message);
            }
        };
        fetchData();
    }, []);

    const addValue = () => {
        comment.map((item: any, index) => {
            Rate += item.rate;
            sumRate = Rate / comment.length;
            setsumRate(sumRate.toFixed(1));
        });
    };

    useEffect(() => {
        addValue();
    }, [comment]);

    const Navi = () => {
        navigation.navigate('EditParkingDetails', {
            id: props.id,
            latitude: props.latitude,
            longitude: props.longitude,
            title: props.title,
            phone_number: props.phone_number,
            price: props.price,
            booking: props.booking,
            type: props.type,
            opening_status: props.opening_status,
            timeOpen: props.timeOpen,
            timeClose: props.timeClose,
            providerBy: props.providerBy,
            location_address: props.location_address,
            parking_picture1: props.parking_picture1,
            parking_picture2: props.parking_picture2,
            parking_picture3: props.parking_picture3,
            opening_mo: props.opening_mo,
            opening_tu: props.opening_tu,
            opening_we: props.opening_we,
            opening_th: props.opening_th,
            opening_fr: props.opening_fr,
            opening_sa: props.opening_sa,
            opening_su: props.opening_su
        });
    };

    return (
        <View style={styles.myParkingContainer}>
            <View style={styles.mainMyParkingContainer}>
                <View style={styles.topRow}>
                    <View style={styles.nameLocation}>
                        <Text style={styles.textNameLocation} numberOfLines={1}>
                            {props.title}
                        </Text>
                    </View>

                    <View style={styles.rate}>
                        <Star size={12} weight="fill" color="#FFA800" />
                        <Text style={styles.textRate}>{SumRate}</Text>
                    </View>
                </View>

                <View style={styles.lowerRow}>
                    <View style={styles.coin}>
                        <CoinVertical size={20} weight="fill" color="#FFA800" />
                        <Text style={styles.textCoins}>{props.price} Coins / hr</Text>
                    </View>
                    <Text style={[styles.textTime, { color: isActive ? '#239D60' : '#EA4C4C' }]}>
                        {isActive ? 'Open' : 'Close'}
                    </Text>
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <View style={styles.row}>

                    <TouchableOpacity style={[styles.button, styles.row]} onPress={Navi}>
                        <PencilSimple size={20} weight="fill" color="#262D57" />
                        <Text style={styles.textBtn}>Edit</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.button, styles.row]}
                        onPress={() => {
                            props.onSelected(true),
                                props.onSelected2(true),
                                props.onSelected3(props.id);
                        }}>
                        <Trash size={20} weight="fill" color="#262D57" />
                        <Text style={styles.textBtn}>Delete</Text>
                    </TouchableOpacity>
                    
                    <View style={styles.switchContainer}>
                        <Switch
                            activeColor="#239D60"
                            inActiveColor="#EA4C4C"
                            active={isActive}
                            onPress={handlePress}
                        />
                    </View>

                </View>
            </View>
        </View>
    );
};

export default ContentMyParking;

const styles = StyleSheet.create({
    myParkingContainer: {
        flex: 1,
        marginHorizontal: 16,
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 15
    },
    mainMyParkingContainer: {
        padding: 16
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6
    },
    textNameLocation: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57'
    },
    nameLocation: {
        width: '76%'
    },
    rate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textRate: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#262D57',
        marginLeft: 4
    },
    lowerRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    coin: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    textCoins: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#FFA800',
        marginLeft: 2
    },
    textTime: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
    },
    bottomContainer: {
        backgroundColor: '#EEF0FF',
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 12,
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textBtn: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        paddingLeft: 6,
        color: '#262D57'
    },
    button: {
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#7F85B2',
        paddingHorizontal: 25,
        paddingVertical: 6
    },
    switchContainer: {
        paddingLeft: 40
    }
});

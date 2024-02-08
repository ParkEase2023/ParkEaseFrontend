import {
    Dimensions,
    PermissionsAndroid,
    Platform,
    SafeAreaView,
    StyleSheet,
    Image,
    TextInput,
    TouchableOpacity,
    View,
    Text,
    ScrollView,
    RefreshControl
} from 'react-native';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import Geolocation from 'react-native-geolocation-service';
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import {
    CaretRight,
    Clock,
    CoinVertical,
    DotsThreeVertical,
    Heart,
    MagnifyingGlass,
    MapPin,
    NavigationArrow,
    Phone,
    Star,
    User
} from 'phosphor-react-native';
import { getAllParking } from '../services/parking';
import caretLeft from '../assets/Icons/caretLeft.png';
import crosshair from '../assets/Icons/crosshair.png';
import funnel from '../assets/Icons/funnel.png';
import { StatusBar } from 'expo-status-bar';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { LogBox } from 'react-native';
import PopupFilter from '../components/PopupFiler';
import BottomSheetScrollView, { BottomSheetMethods } from '../components/BottomSheetScrollView';
import Comment from '../components/Comment';
import DetailParking from '../components/DetailParking';
import { mapStyle } from '../constants/Constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MenuParamList } from '../stack/MenuStack';

interface Position {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

enum MapType {
    standard = 'standard',
    satellite = 'satellite',
    hybrid = 'hybrid',
    terrain = 'terrain'
}

const mapNomal = [{}];

async function requestPermissions() {
    if (Platform.OS === 'ios') {
        const auth = await Geolocation.requestAuthorization('whenInUse');
        if (auth === 'granted') {
            // do something if granted...
        }
    }

    if (Platform.OS === 'android') {
        await PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION);
        if ('granted' === PermissionsAndroid.RESULTS.GRANTED) {
            // do something if granted...
        }
    }
}

const { width } = Dimensions.get('window');
const aspectRatio = 300 / 500;
const height = width * aspectRatio;

LogBox.ignoreLogs(['Possible Unhandled Promise Rejection']);

const Home = () => {
    const [title, setTitle] = useState('');
    const [refreshing, setRefreshing] = useState(false);
    const [price, setPrice] = useState('');
    const [openingStatus, setOpeningStatus] = useState(false);
    const [picture1, setPicture1] = useState(
        'https://res.cloudinary.com/dqxh7vakw/image/upload/v1703827495/ParkEase/automatic-parking-6-1200x900_ukblma.jpg'
    );
    const [picture2, setPicture2] = useState(
        'https://res.cloudinary.com/dqxh7vakw/image/upload/v1703827495/ParkEase/automatic-parking-6-1200x900_ukblma.jpg'
    );
    const [picture3, setPicture3] = useState(
        'https://res.cloudinary.com/dqxh7vakw/image/upload/v1703827495/ParkEase/automatic-parking-6-1200x900_ukblma.jpg'
    );
    const [locationAddress, setLocationAddress] = useState('');
    const [timeOpen, setTimeOpen] = useState('');
    const [timeClose, setTimeClose] = useState('');
    const [providerBy, setProviderBy] = useState('');
    const [phoneCall, setPhonecall] = useState('');
    const [lat, setLat] = useState(0);
    const [long, setLong] = useState(0);
    const [mo, setMo] = useState(false);
    const [tu, setTu] = useState(false);
    const [we, setWe] = useState(false);
    const [th, setTh] = useState(false);
    const [fr, setFr] = useState(false);
    const [sat, setSat] = useState(false);
    const [sun, setSun] = useState(false);
    const [parkingId, setParkingId] = useState('');
    const [parkingMarkers, setParkingMarkers] = useState<Position[]>([]);
    const navigation = useNavigation<NativeStackNavigationProp<MenuParamList>>();
    const mapRef = useRef<MapView | null>(null);
    const [pos, setPos] = useState<Position>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    useEffect(() => {
        requestPermissions();
        Geolocation.getCurrentPosition(
            position => {
                setPos({
                    ...pos,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                console.log('position', position);
            },
            err => {
                console.log('err', err);
            },
            {
                enableHighAccuracy: true
            }
        );
    }, []);
    const bottomSheetRef3 = useRef<BottomSheetMethods>(null);
    const pressHandler3 = useCallback(() => {
        bottomSheetRef3.current?.expand();
    }, []);

    const [listparking, setListParking] = useState(parkingMarkers);

    useEffect(() => {
        const fetchData = async () => {
            const dataParking: any = await getAllParking();
            setListParking(dataParking.data);
        };
        fetchData();
    }, []);

    useEffect(() => {
        const fetchData = async () => {
            const dataParking: any = await getAllParking();
            setParkingMarkers(dataParking.data);
        };
        fetchData();
    }, [listparking]);

    const [show, setShow] = useState(false);
    const [ticker, setTicker] = useState(false);

    const [selectedOpen, setSelectedOpen] = useState(false);
    const [selectedBooking, setSelectedBooking] = useState(false);

    const [currentType, setCurrentType] = useState(MapType.standard);
    const [check, setCheck] = useState(true);

    const callBoth = () => {
        if (check === true) {
            setCurrentType(MapType.hybrid);
            setCheck(false);
        } else {
            setCurrentType(MapType.standard);
            setCheck(true);
        }
    };

    const handleOpen = () => {
        setTicker(true);
        setShow(!show);
    };

    const RenderParking = () => {
        return (
            <>
                {listparking.map((item: any, index) => {
                    const dayopen = {
                        mo: item.opening_mo,
                        tu: item.opening_tu,
                        we: item.opening_we,
                        th: item.opening_th,
                        fr: item.opening_fr,
                        sa: item.opening_sa,
                        su: item.opening_su
                    };
                    return (
                        <Marker
                            image={require('../assets/PinParkRemoveBG.png')}
                            key={index}
                            coordinate={{
                                latitude: item.latitude,
                                longitude: item.longitude
                            }}
                            title={item.title}
                            description={item._id}
                            onPress={() => {
                                pressHandler3(),
                                    setTitle(item.title),
                                    setOpeningStatus(item.opening_status),
                                    setPrice(item.price),
                                    setPicture1(item.parking_picture1),
                                    setPicture2(item.parking_picture2),
                                    setPicture3(item.parking_picture3),
                                    setLocationAddress(item.location_address);
                                setTimeOpen(item.timeOpen);
                                setTimeClose(item.timeClose);
                                setProviderBy(item.providerBy);
                                setPhonecall(item.phone_number);
                                setLat(item.latitude);
                                setLong(item.longitude);
                                setMo(item.opening_mo);
                                setTu(item.opening_tu);
                                setWe(item.opening_we);
                                setTh(item.opening_th);
                                setFr(item.opening_fr);
                                setSat(item.opening_sa);
                                setSun(item.opening_su);
                                setParkingId(item._id);
                            }}>
                            <Callout tooltip style={{ display: 'none' }}>
                                <View>
                                    <Text>Hidden</Text>
                                </View>
                            </Callout>
                        </Marker>
                    );
                })}
            </>
        );
    };

    const FilterParking = () => {
        let FilterParkingMarkers = parkingMarkers;
        //Open filter
        if (selectedOpen === true) {
            FilterParkingMarkers = FilterParkingMarkers.filter(
                (item: any) => item.opening_status === true
            );
        }
        //Booking filter
        if (selectedBooking === true) {
            FilterParkingMarkers = FilterParkingMarkers.filter(
                (item: any) => item.booking === true
            );
        }
        setListParking(FilterParkingMarkers);
    };

    useEffect(() => {
        FilterParking();
    }, [selectedOpen, selectedBooking]);

    const getCurrentPosition = () => {
        Geolocation.getCurrentPosition(
            position => {
                setPos({
                    ...pos,
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                });
                mapRef.current?.animateToRegion({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    longitudeDelta: 0.004,
                    latitudeDelta: 0
                });
            },
            error => {
                console.log(error);
            }
        );
    };

    const onRefresh = async () => {
        setRefreshing(true);
        setTimeout(() => {
          setRefreshing(false);
        }, 20);
    };



    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            onRefresh();
        });
        return unsubscribe;
    }, [navigation]);

    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
                <MapView
                    ref={mapRef}
                    showsUserLocation={true}
                    style={{ flex: 1 }}
                    minZoomLevel={15}
                    provider={PROVIDER_GOOGLE}
                    region={pos}
                    mapType={currentType}
                    // customMapStyle={mapStyle}
                    followsUserLocation={true}
                    showsMyLocationButton={false}
                    zoomControlEnabled={true}
                    showsBuildings={true}
                    toolbarEnabled={true}>
                    <RenderParking></RenderParking>
                </MapView>
                <View style={styles.container}>
                    <View style={styles.searchContainer}>
                        <View style={styles.inner}>
                            <TouchableOpacity style={styles.search}>
                                <MagnifyingGlass size={22} weight="bold" color="#A6A6A6" />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.field}
                                placeholder="Search"
                                placeholderTextColor="#A6A6A6"
                                // value={searchInput}
                                // onChangeText={text => setSearchInput(text)}
                            />
                        </View>
                    </View>
                </View>
                <View
                    style={{
                        position: 'absolute',
                        top: 25,
                        right: 12,
                        alignSelf: 'flex-end'
                    }}>
                    <SafeAreaView>
                        <TouchableOpacity style={styles.btnCrosshair} onPress={getCurrentPosition}>
                            <Image source={crosshair} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btnFunnel} onPress={handleOpen}>
                            <Image source={funnel} />
                        </TouchableOpacity>
                    </SafeAreaView>
                </View>
                <View style={styles.containerSlideBar}>
                    <StatusBar style="light" />
                    <BottomSheetScrollView
                        ref={bottomSheetRef3}
                        snapTo={'50%'}
                        backgroundColor={'#10152F'}
                        backDropColor={'none'}>
                        <DetailParking
                            Title={title}
                            Price={price}
                            Opening_status={openingStatus}
                            Parking_picture1={picture1}
                            Parking_picture2={picture2}
                            Parking_picture3={picture3}
                            Location_address={locationAddress}
                            TimeOpen={timeOpen}
                            TimeClose={timeClose}
                            ProviderBy={providerBy}
                            PhoneCall={phoneCall}
                            latitude={lat}
                            longitude={long}
                            mo={mo}
                            tu={tu}
                            we={we}
                            th={th}
                            fr={fr}
                            sa={sat}
                            su={sun}
                            parkingId={parkingId}></DetailParking>
                    </BottomSheetScrollView>
                </View>
                <PopupFilter
                    setVisible={show}
                    ticker={ticker}
                    selectOpen={value => {
                        setSelectedOpen(value);
                    }}
                    selectAvailable={value => {
                        setSelectedBooking(value);
                    }}></PopupFilter>
        </GestureHandlerRootView>
    );
};

export default Home;

const styles = StyleSheet.create({
    btnCrosshair: {
        position: 'absolute',
        width: 48,
        height: 48,
        backgroundColor: '#10152F',
        marginTop: 42,
        right: 0,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },

    btnFunnel: {
        position: 'absolute',
        width: 48,
        height: 48,
        backgroundColor: '#10152F',
        marginTop: 98,
        right: 0,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    btnCaretLeft: {
        position: 'absolute',
        width: 48,
        height: 48,
        backgroundColor: '#10152F',
        marginTop: 40,
        right: 0,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 12
    },
    container: {
        flex: 1,
        backgroundColor: '#10152F',
        position: 'absolute',
        width: '100%',
        alignSelf: 'flex-end'
    },
    searchContainer: {
        position: 'absolute',
        marginRight: 12,
        marginLeft: 16,
        marginTop: 10,
        elevation: 3
    },
    inner: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    field: {
        backgroundColor: '#10152F',
        height: 48,
        width: '100%',
        paddingLeft: 16,
        fontFamily: 'Fredoka-Regular',
        fontSize: 16,
        borderRadius: 12
    },
    search: {
        position: 'absolute',
        right: 12,
        zIndex: 2
    },
    containerSlideBar: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

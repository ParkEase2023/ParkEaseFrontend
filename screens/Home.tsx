import { Dimensions, PermissionsAndroid, Platform, SafeAreaView, StyleSheet, Image, TextInput, TouchableOpacity, View, Text } from 'react-native'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Clock, CoinVertical, Heart, MagnifyingGlass, MapPin, NavigationArrow, Phone, Star, User } from 'phosphor-react-native';
import { getAllParking } from '../services/parking';
import caretLeft from '../assets/Icons/caretLeft.png';
import crosshair from '../assets/Icons/crosshair.png';
import funnel from '../assets/Icons/funnel.png';
import SlideBar, { SlideBarRefProps } from '../components/SlideBar';
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { LogBox } from 'react-native';


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
  terrain = 'terrain',
}

const mapNomal = [{}]


const mapStyle = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1d2c4d"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
]

async function requestPermissions() {
  if (Platform.OS === 'ios') {
    const auth = await Geolocation.requestAuthorization('whenInUse');
    if (auth === 'granted') {
      // do something if granted...
    }
  }

  if (Platform.OS === 'android') {
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
    );
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
  const ref = useRef<SlideBarRefProps>(null)
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-300);
    }
  }, []);
  const [parkingMarkers, setParkingMarkers] = useState<Position[]>([]);
  const mapRef = useRef<MapView | null>(null);
  const [pos, setPos] = useState<Position>({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  useEffect(() => {
    requestPermissions();
    Geolocation.getCurrentPosition(
      position => {
        setPos({
          ...pos,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log('position', position);
      },
      err => {
        console.log('err', err);
      },
      {
        enableHighAccuracy: true,
      },
    );
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
  }

  const RenderParking = () => {
    return (
      <>
        {
          listparking.map((item: any, index) => {
            return (
              <Marker
                image={require('../assets/PinParkRemoveBG.png')}
                key={index}
                coordinate={{
                  latitude: item.latitude,
                  longitude: item.longitude,
                }}
                title={item.title}
                description={item._id}
                onPress={onPress}
              >
              </Marker>
            )
          })
        }
      </>
    )
  };

  const FilterParking = () => {
    let FilterParkingMarkers = parkingMarkers;
    //Open filter
    if (selectedOpen === true) {
      FilterParkingMarkers = FilterParkingMarkers.filter(
        (item: any) => item.opening_status === true,
      );
    }
    //Booking filter
    if (selectedBooking === true) {
      FilterParkingMarkers = FilterParkingMarkers.filter(
        (item: any) => item.booking === true,
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
          longitude: position.coords.longitude,
        });
        mapRef.current?.animateToRegion({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          longitudeDelta: 0.004,
          latitudeDelta: 0,
        });
      },
      error => {
        console.log(error)
      }
    )
  }

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
        toolbarEnabled={true}
      >
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
      <View style={{
        position: 'absolute', //use absolute position to show button on top of the map
        top: -30, //for center align
        left: 60,
        alignSelf: 'flex-start', //for align to right
      }}>
        <TouchableOpacity style={styles.btnCaretLeft}>
          <Image source={caretLeft} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          position: 'absolute', //use absolute position to show button on top of the map
          top: 25, //for center align
          right: 12,
          alignSelf: 'flex-end', //for align to right
        }}>
        {/* <SafeAreaView>
          <TouchableOpacity style={styles.btnStackSimple_44} onPress={getCurrentPosition}>
            <Crosshair size={24} weight="fill" color="#A6A6A6" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnStackSimple_45} onPress={callBoth}>
            <StackSimple size={22} weight="fill" color="#A6A6A6" />
          </TouchableOpacity>
        </SafeAreaView> */}
        <SafeAreaView>
          <TouchableOpacity style={styles.btnCrosshair}
            onPress={() => {
              setSelectedOpen(!selectedOpen);
              return true;
            }}>
            <Image source={crosshair} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.btnFunnel} onPress={() => {
            setSelectedBooking(!selectedBooking);
            return true;
          }}>
            <Image source={funnel} />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
      <View style={styles.containerSlideBar}>
        <StatusBar style="light" />
        <SlideBar ref={ref} >
          <SafeAreaView style={styles.mainContainer}>
            <View style={styles.title}>
              <Text style={styles.textTitle}>อาคารจอดรถ 5 ชั้น</Text>
              <View style={styles.rate}>
                <Star size={12} weight="fill" color="#FFDE00" />
                <Text style={styles.textRate}>4.5</Text>
              </View>
            </View>
            
            <View style={styles.rowCostOC}>
              <View style={styles.coins}>
                <CoinVertical size={20} weight="fill" color="#FFDE00" />
                <Text style={styles.textCoins}>10 Coins/hr</Text>
              </View>
              <Text style={styles.textOC}>Open</Text>
            </View>
            
            <TouchableOpacity style={styles.btnBooking}>
              <Text style={styles.textBooking}>BOOKING</Text>
            </TouchableOpacity>

            <View style={styles.containerBtn}>
              <TouchableOpacity style={styles.btnNavigate}>
                <NavigationArrow size={20} weight="fill" color="#262D57" />
                <Text style={styles.textNavigate}>Navigate</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnCall}>
                <Phone size={20} weight="fill" color="#262D57" />
                <Text style={styles.textCall}>Call</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnHeart}>
                <Heart size={20} weight="fill" color="#EEF0FF" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.containerImg}>
              <View style={styles.imgLeft}>
                <Image source={require('../assets/IMGParking_1.jpg')} />
              </View>
              <View style={styles.imgRight}>
                <View style={styles.imgTop}>
                  <Image source={require('../assets/IMGParking_2.jpg')} />
                </View>

                <View style={styles.imgLower}>
                  <Image source={require('../assets/IMGParking_3.jpg')} />
                </View>
              </View>
              
            </View>

            <View style={styles.location}>
              <MapPin size={20} weight="fill" color="#EEF0FF" />
              <Text style={styles.textLocation}>126 Pracha Uthit Rd, Khwaeng Bang Mot, Khet Thung Khru, Krung Thep Maha Nakhon 10140</Text>
            </View>

            <View style={styles.time}>
              <Clock size={20} weight="fill" color="#EEF0FF" />
              <Text style={styles.textTime}>Mo-Sat | 07:00 - 22:00</Text>
            </View>

            <View style={styles.provider}>
              <User size={20} weight="fill" color="#EEF0FF" />
              <Text style={styles.textProvider}>Provider by </Text>
              <Text style={styles.textProviderName}>Brandon Stanton</Text>
            </View>
          </SafeAreaView>
          

        </SlideBar>
      </View>
    </GestureHandlerRootView>
  )
}

export default Home

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
    borderRadius: 12,
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
    borderRadius: 12,
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
    borderRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: '#10152F',
    position: 'absolute',
    width: '87%',
    alignSelf: 'flex-end',
  },
  searchContainer: {
    position: 'absolute',
    marginRight: 12,
    marginLeft: 16,
    marginTop: 10,
    elevation: 3,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  field: {
    backgroundColor: '#10152F',
    height: 48,
    width: '100%',
    paddingLeft: 16,
    fontFamily: 'Fredoka-Regular',
    fontSize: 16,
    borderRadius: 12,
  },
  search: {
    position: 'absolute',
    right: 12,
    zIndex: 2,
  },
  containerSlideBar: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mainContainer: {
    marginHorizontal: 25,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginTop: 16,
    marginBottom: 12,
  },
  textTitle: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: '#EEF0FF',
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textRate: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#EEF0FF',
    marginLeft: 4,
  },
  rowCostOC: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 20,
  },
  coins: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textCoins: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#FEFA94',
    marginLeft: 6,
  },
  textOC: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#55FFAA',
  },

  btnBooking: {
    backgroundColor: '#FEFA94',
    paddingVertical: 12,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  textBooking: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 16,
    color: '#10152F',
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  btnNavigate: {
    backgroundColor: '#EEF0FF',
    flex: 2,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textNavigate: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#10152F',
    marginLeft: 6,
  },
  btnCall: {
    backgroundColor: '#EEF0FF',
    flex: 2,
    marginHorizontal: 8,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  textCall: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 16,
    color: '#10152F',
    marginLeft: 6,
  },
  btnHeart: {
    backgroundColor: '#7F85B2',
    width: 35,
    height: 35,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerImg: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  imgLeft: {
    width: 169.5,
    height: 240,
    borderRadius: 8,
    marginBottom: 25,
  },
  imgRight: {
    width: 169.5,
    height: 240,
    borderRadius: 8,
    marginBottom: 25,
  },
  imgTop: {
    width: 169.5,
    height: 118,
    borderRadius: 8,
    marginBottom: 25,
  },
  imgLower: {
    width: 169.5,
    height: 118,
    borderRadius: 8,
    marginBottom: 25,
  },
  location: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  textLocation: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#EEF0FF',
    marginLeft: 16,
  },
  time: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  textTime: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#EEF0FF',
    marginLeft: 16,
  },
  provider: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
  },
  textProvider: {
    fontFamily: 'RedHatText-Regular',
    fontSize: 14,
    color: '#EEF0FF',
    marginLeft: 16,
    marginRight: 8,
  },
  textProviderName: {
    fontFamily: 'RedHatText-Bold',
    fontSize: 14,
    color: '#EEF0FF',
  },
})
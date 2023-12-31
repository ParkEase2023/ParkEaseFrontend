import { Dimensions, PermissionsAndroid, Platform, SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Crosshair, MagnifyingGlass, StackSimple } from 'phosphor-react-native';




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

const {width} = Dimensions.get('window');
const aspectRatio = 300 / 500;
const height = width * aspectRatio;






const Home = () => {


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
  const [currentType, setCurrentType] = useState(MapType.standard);
  const [check, setCheck] = useState(true);
  function callBoth() {
    if (check === true) {
      setCurrentType(MapType.hybrid);
      setCheck(false);
    } else {
      setCurrentType(MapType.standard);
      setCheck(true);
    }
  }

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
    <View style={{ flex: 1 }}>
      <MapView
        ref={mapRef}
        showsUserLocation={true}
        style={{ flex: 1 }}
        provider={PROVIDER_GOOGLE}
        region={pos}
        mapType={currentType}
        // customMapStyle={mapNomal}
        followsUserLocation={true}
        showsMyLocationButton={false}
        zoomControlEnabled={true}
        showsBuildings={true}
        toolbarEnabled={true}

      >
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
          position: 'absolute', //use absolute position to show button on top of the map
          top: 25, //for center align
          right: 12,
          alignSelf: 'flex-end', //for align to right
        }}>
        <SafeAreaView>
          <TouchableOpacity style={styles.btnStackSimple_44} onPress={getCurrentPosition}>
            <Crosshair size={24} weight="fill" color="#A6A6A6" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnStackSimple_45} onPress={callBoth}>
            <StackSimple size={22} weight="fill" color="#A6A6A6" />
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  btnStackSimple_44: {
    position: 'absolute',
    width: 39,
    height: 39,
    backgroundColor: '#10152F',
    marginTop: 40,
    right: 0,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },

  btnStackSimple_45: {
    position: 'absolute',
    width: 39,
    height: 39,
    backgroundColor: '#10152F',
    marginTop: 90,
    right: 0,
    elevation: 3,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10
  },
  container: {
    flex: 1,
    backgroundColor: '#10152F',
    position: 'absolute',
    width:'100%',
    
    // borderRadius:50
  },
  searchContainer: {
    position: 'absolute',
    marginHorizontal: 16,
    marginTop: 10,
    elevation: 3,
    height:60
  },
  inner: {
    flexDirection: 'row',
  },
  field: {
    backgroundColor: '#10152F',
    height: 50,
    width: '100%',
    paddingLeft: 16,
    paddingRight: 50,
    paddingVertical: 10,
    fontFamily: 'Fredoka-Regular',
    fontSize:16,
    borderRadius: 10
  
  },
  search: {
    position: 'absolute',
    top: 15,
    right: 12,
    zIndex: 2,
  },

})
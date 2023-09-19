import { PermissionsAndroid, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import Geolocation from 'react-native-geolocation-service';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';



interface Position {
  latitude: number;
  longitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}

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




const Home = () => {
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
  return (
    <View style={{flex:1}}>
      <MapView showsUserLocation={true}
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        region={pos}
        mapType={'standard'}
        followsUserLocation={true}
        showsMyLocationButton={true}
        zoomControlEnabled={true}
        showsBuildings={true}
        toolbarEnabled={true}>
        
      </MapView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})
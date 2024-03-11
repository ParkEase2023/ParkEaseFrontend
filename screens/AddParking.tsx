import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, CaretLeft, CaretRight, StackSimple } from 'phosphor-react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';
import { getProfile } from '../services/user';
import { AddParkingParamList } from '../stack/AddparkingStack';
export interface IProfile {
    _id: string;
}

interface Position {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const AddParking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AddParkingParamList>>();

    const [profile, setProfile] = React.useState<IProfile>({
        _id: ''
    });
    const getUserProfile = async () => {
        const { data } = await getProfile();
        setProfile(data);
    };
    useEffect(() => {
        getUserProfile();
    }, []);

    const gotoAddParking = () => {
        console.log('latitude',pos.latitude);
        console.log('longitude',pos.longitude);
        navigation.navigate('SelectParkingType', {
            latitude: pos.latitude,
            longitude: pos.longitude
        });
    };

    const [pos, setPos] = useState<Position>({
        latitude: 0,
        longitude: 0,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
    });
    useEffect(() => {
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

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                    <CaretLeft size={24} color="#F4F6FD" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Adding a toilet</Text>
            </View>
            <MapView
                showsUserLocation={true}
                style={{ flex: 1 }}
                provider={PROVIDER_GOOGLE}
                region={pos}
                mapType={'standard'}
                followsUserLocation={true}
                showsMyLocationButton={true}
                showsBuildings={true}>
                <Marker coordinate={pos} />
            </MapView>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btnNext} onPress={gotoAddParking}>
                    <Text style={styles.txtSubmit}>NEXT</Text>
                    <CaretRight size={22} color="#F4F6FD" />
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default AddParking;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    },

    header: {
        backgroundColor: '#2C2F4A',
        height: 52,
        width: '100%',
        zIndex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        alignItems: 'stretch',
        justifyContent: 'flex-end',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        elevation: 4
    },
    btnBack: {
        position: 'absolute',
        left: 16,
        top: 14
    },
    headerTitle: {
        fontFamily: 'Fredoka-Medium',
        fontSize: 24,
        color: '#F4F6FD',
        left: 26
    },

    btnStackSimple_44: {
        position: 'relative',
        width: 39,
        height: 39,
        borderRadius: 3,
        backgroundColor: '#fff',
        top: 88,
        left: 13.5,
        elevation: 3,
        justifyContent: 'center',
        alignItems: 'center',
        opacity: 0.8
    },
    container: {
        marginHorizontal: 12
    },
    btnNext: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#6D7DD3',
        width: '100%',
        height: 44,
        borderRadius: 8,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        elevation: 4
    },
    txtSubmit: {
        fontFamily: 'Fredoka-SemiBold',
        color: '#F4F6FD',
        fontSize: 16
    }
});

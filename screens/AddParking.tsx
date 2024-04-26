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
import { ProfileParamList } from '../stack/ProfileStack';
import RequireLogin from '../components/RequireLogin';
export interface IProfile {
    _id: string;
    roles: any;
    verification_status: boolean;
    email: string;
}

interface Position {
    latitude: number;
    longitude: number;
    latitudeDelta: number;
    longitudeDelta: number;
}

const AddParking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AddParkingParamList>>();
    const navigationVerify = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [profile, setProfile] = React.useState<IProfile>({
        _id: '',
        roles: [],
        verification_status: false,
        email: ''
    });
    const getUserProfile = async () => {
        const { data } = await getProfile();
        setProfile(data);
    };

    useEffect(() => {
        checkVerificationStatus();
    }, [profile]);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', async () => {
            await getUserProfile();
        });
        return unsubscribe;
    }, [navigation]);

    const gotoAddParking = () => {
        console.log('latitude', pos.latitude);
        console.log('longitude', pos.longitude);
        navigation.navigate('SelectParkingType', {
            latitude: pos.latitude,
            longitude: pos.longitude
        });
    };

    const checkVerificationStatus = async () => {
        if (profile.verification_status === false && profile._id != '') {
            navigationVerify.navigate('SelectForVerify', { email: profile.email });
        } else if (profile.verification_status === true && profile.roles.length === 1) {
            navigationVerify.navigate('ApplyForMembership');
        }
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
        <RequireLogin>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>
                    <View style={styles.rowHeader}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <CaretLeft size={28} color="#F4F6FD" />
                        </TouchableOpacity>
                        <Text style={styles.headerTitle}>Add Parking Location</Text>
                    </View>
                    <Text style={styles.Pretitle}>
                        Add your parking location to where you are right now.
                    </Text>
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
                    <TouchableOpacity style={styles.btnSelect} onPress={gotoAddParking}>
                        <Text style={styles.txtSelect}>SELECT</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </RequireLogin>
    );
};

export default AddParking;

const styles = StyleSheet.create({
    map: {
        ...StyleSheet.absoluteFillObject
    },

    header: {
        backgroundColor: '#10152F',
        // height: 52,
        width: '100%',
        zIndex: 1,
        paddingHorizontal: 24,
        paddingVertical: 12,
        // alignItems: 'stretch',
        // justifyContent: 'flex-end',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        elevation: 4
    },
    rowHeader: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    headerTitle: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#F4F6FD',
        marginLeft: 16
    },
    Pretitle: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#F4F6FD',
        marginTop: 8
    },

    container: {
        marginHorizontal: 16
    },
    btnSelect: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: '#10152F',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 16,
        alignItems: 'center',
        position: 'absolute',
        bottom: 20,
        elevation: 4
    },
    txtSelect: {
        fontFamily: 'RedHatText-Bold',
        color: '#FEFA94',
        fontSize: 16
    }
});

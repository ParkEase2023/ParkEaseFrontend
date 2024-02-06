import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RequireLogin from '../components/RequireLogin';
import React, { useEffect, useState } from 'react';
import ContentMyList from '../components/ContentMyList';
import { getProfile } from '../services/user';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MenuParamList } from '../stack/MenuStack';
import { getMyList } from '../services/mylist';

export interface IProfile {
    _id: string;
  }

interface myList {
    parkingId: string;
    userId: string;
}

const MyList = () => {
    const [myList, setMyList] = useState<myList[]>([]);
    const [checkData, setCheckData] = useState('');
    const navigation = useNavigation<NativeStackNavigationProp<MenuParamList>>();

    const getUserProfile = async () => {
        const {data} = await getProfile();
        const list: any = await getMyList(data._id);
        await setMyList(list.myList);
        await setCheckData(list.message);
    };
    
    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
          getUserProfile();
        });
        return unsubscribe;
      }, [navigation]);

      const RenderMyList = (): JSX.Element | null => {
        if (checkData === 'success' && myList[0] !== undefined) {
            return(
                <>
                     {myList.map((item: any, index) => {
                            return(
                                <ContentMyList
                                key={index}
                                _id={item.myList[0]._id}
                                latitude={item.myList[0].latitude}
                                longitude={item.myList[0].longitude}
                                title={item.myList[0].title}
                                phone_number={item.myList[0].phone_number}
                                price={item.myList[0].price}
                                booking={item.myList[0].booking}
                                type={item.myList[0].type}
                                opening_status={item.myList[0].opening_status}
                                timeOpen={item.myList[0].timeOpen}
                                timeClose={item.myList[0].timeClose}
                                providerBy={item.myList[0].providerBy}
                                location_address={item.myList[0].location_address}
                                parking_picture1={item.myList[0].parking_picture1}
                                parking_picture2={item.myList[0].parking_picture2}
                                parking_picture3={item.myList[0].parking_picture3}
                                opening_mo={item.myList[0].opening_mo}
                                opening_tu={item.myList[0].opening_tu}
                                opening_we={item.myList[0].opening_we}
                                opening_th={item.myList[0].opening_th}
                                opening_fr={item.myList[0].opening_fr}
                                opening_sa={item.myList[0].opening_sa}
                                opening_su={item.myList[0].opening_su}
                                />
                            )
                     })}
                </>
            )
        }
        else {
            return null
        }
    }
        

    return (
        <RequireLogin>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.circleBig} />
                    <Text style={styles.title}>My List</Text>
                    <ScrollView>
                        <RenderMyList></RenderMyList>
                    </ScrollView>
                    <View style={styles.circleSmall} />
                </View>
            </View>
        </RequireLogin>
    );
};

export default MyList;

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
        width: 287,
        height: 287,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -72,
        left: -144
    },
    title: {
        paddingHorizontal: 16,
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#fff',
        marginTop: 65,
        marginBottom: 40
    },
    circleSmall: {
        zIndex: -1,
        position: 'absolute',
        width: 95,
        height: 95,
        borderRadius: 100,
        backgroundColor: '#7F85B2',
        bottom: 8,
        right: -20
    }
});

import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RequireLogin from '../components/RequireLogin';
import React, { useEffect, useState } from 'react';
import ContentMyList from '../components/ContentMyList';
import { getProfile } from '../services/user';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MenuParamList } from '../stack/MenuStack';
import { getMyList, deleteMyList } from '../services/mylist';
import Modal from 'react-native-modal';
import BreakHeart from '../assets/ฺBreakHeart.png';

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
    const [modal, setModal] = useState(false);
    const [myListID, setMyListID] = useState('');

    const getDataMyList = async () => {
        const { data } = await getProfile();
        const list: any = await getMyList(data._id);
        await setMyList(list.myList);
        await setCheckData(list.message);
    };

    const setDelete = async() => {
        console.log(myListID), 
        await deleteMyList(myListID), 
        setModal(false);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataMyList();
        });
        return unsubscribe;
    }, [navigation]);

    useEffect(() => {
        getDataMyList()
    }, [modal])
    

    const RenderMyList = (): JSX.Element | null => {
        if (checkData === 'success' && myList[0] !== undefined) {
            return (
                <>
                    {myList.map((item: any, index) => {
                        // console.log(item._id);
                        return (
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
                                myListId={item._id}
                                onSelected={value => {
                                    setModal(value);
                                }}
                                onClick={value => {
                                    setMyListID(value);
                                }}
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
                <Modal isVisible={modal}>
                    <View style={styles.modalContainer}>
                        <Image source={BreakHeart} style={styles.imageBreakHeart} />
                        <Text style={styles.titlePopup}>Remove parking</Text>
                        <Text style={styles.labelPopup}>Do you want to remove this parking ?</Text>
                        <View style={styles.rowBtn}>
                            <TouchableOpacity
                                style={styles.btnCancel}
                                onPress={() => setModal(false)}>
                                <Text style={styles.textCancel}>CANCEL</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={setDelete} style={styles.btnYes}>
                                <Text style={styles.textYes}>YES, REMOVE</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
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
    },

    // Modal
    modalContainer: {
        backgroundColor: '#EEF0FF',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 32
    },
    imageBreakHeart: {
        width: 220,
        height: 180,
        marginTop: -120,
        alignSelf: 'center'
    },
    titlePopup: {
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#2C2F4A',
        marginTop: 16,
        textAlign: 'center'
    },
    labelPopup: {
        fontSize: 16,
        fontFamily: 'RedHatText-Regular',
        color: '#2C2F4A',
        marginTop: 12,
        textAlign: 'center'
    },
    rowBtn: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 28
    },
    btnCancel: {
        width: 130,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#7F85B2',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    textCancel: {
        fontSize: 16,
        fontFamily: 'Fredoka-SemiBold',
        color: '#2C2F4A'
    },
    btnYes: {
        width: 130,
        backgroundColor: '#EA4C4C',
        borderWidth: 1,
        borderColor: '#fff',
        paddingVertical: 12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 12
    },
    textYes: {
        fontSize: 16,
        fontFamily: 'Fredoka-SemiBold',
        color: '#F4F6FD'
    }
});

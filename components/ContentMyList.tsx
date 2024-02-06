import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CoinVertical, Heart, Star } from 'phosphor-react-native';

interface IContentMyList {
    // myListId: string;
    _id: string;
    latitude: number;
    longitude: number;
    title: string;
    phone_number: string;
    price: string;
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
    // onSelected: (value: boolean) => void;
    // onClick: (value: string) => void;
  }

const ContentMyList = (props: IContentMyList) => {
    const [heart, setHeart] = useState(false);
    const [myListID, setMyListID] = useState('');
    const checkBtnHeart: boolean = true;
    useEffect(() => {
        if (heart === true) {
          console.log(checkBtnHeart);
        //   props.onSelected(checkBtnHeart);
        //   props.onClick(myListID);
        }
      }, [Heart]);

      const ReadreBtn = (): JSX.Element | null => {
        if (props.opening_status == true) {
            return <Text style={styles.textOpen}>Open</Text>;
        } else {
            return <Text style={styles.textClose}>Close</Text>;
        }
    };

    return (
        <TouchableOpacity style={styles.myListContainer}>

            <View style={styles.mainMyListContainer}>
                <View style={styles.topRow}>
                    <View style={styles.nameLocation}>
                        <Text style={styles.textNameLocation} numberOfLines={1}>{props.title}</Text>
                    </View>
                    
                    <View style={styles.rate}>
                        <Star size={12} weight="fill" color="#FFA800" />
                        <Text style={styles.textRate}>4.5</Text>
                    </View>
                </View>

                <View style={styles.lowerRow}>
                    <View style={styles.coin}>
                        <CoinVertical size={20} weight="fill" color="#FFA800" />
                        <Text style={styles.textCoins}>{props.price}</Text>
                    </View>
                    <ReadreBtn></ReadreBtn>
                </View>
            </View>

            <TouchableOpacity>
                <View style={styles.bgBtnLike}>
                    <Heart size={20} weight="fill" color="#EA4C4C" style={styles.btnLike} />
                </View>
            </TouchableOpacity>

        </TouchableOpacity>
    );
};

export default ContentMyList;

const styles = StyleSheet.create({
    myListContainer: {
        marginHorizontal: 16,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 10
    },
    mainMyListContainer: {
        padding: 16,
    },
    topRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 6,
    },
    nameLocation: {
        width: '76%',
    },
    textNameLocation: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#262D57'
    },
    rate: {
        position: 'absolute',
        flexDirection: 'row',
        alignItems: 'center',
        right: -38,
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
        alignItems: 'center',
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
    textOpen: {
        position: 'absolute',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#239D60',
        right: -38,
    },
    textClose: {
        position: 'absolute',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#FF6A6A',
        right: -38,
    },
    bgBtnLike: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 81,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#EEF0FF'
    },
    btnLike: {
        marginHorizontal: 12,
    },
});

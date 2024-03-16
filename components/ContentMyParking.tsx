import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CoinVertical, PencilSimple, Star, Trash } from 'phosphor-react-native';
import Switch from './Switch';
import { getComment } from '../services/comment';

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
}

interface Comment {
  rate: number;
}


const ContentMyParking = (props: IContentMyParking) => {
  let Rate: number = 0;
  let sumRate: number = 0;
  const [isActive, setIsActive] = useState(props.opening_status);
  const [comment, setComment] = useState<Comment[]>([]);
  const [SumRate, setsumRate] = useState('0');
  const handlePress = () => {
    setIsActive(!isActive);
  };


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res_comments: any = await getComment(props.id);
        // console.log('line 68', res_comments);
        setComment(res_comments.Comment);
        if (res_comments) {
          // console.log('line71', res_comments);
          res_comments.Comment.map((item: any, index: number) => {
            Rate += item.rate;
            sumRate = Rate / res_comments.Comment.length;
          });
          // setsumRate(sumRate);
          // console.log(SumRate);
          setsumRate(sumRate.toFixed(1));
        }
      } catch (err: any) {
        // console.log(err.message);
      }
    };
    fetchData();
  }, []);
  
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text style={styles.textBody}>{props.title}</Text>
              <View style={styles.row}>
                <Star size={14} weight="fill" color="#FFA800" />
                <Text style={styles.textBody}>{SumRate}</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.row}>
                <CoinVertical size={24} weight="fill" color="#FFA800" />
                <Text style={[styles.textBody, { color: '#FFA800' }]}>{props.price} Coins / hr</Text>
              </View>
              <Text style={[styles.textBody, { color: isActive ? '#239D60' : '#EA4C4C' }]}>
                {isActive ? 'Open' : 'Close'}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={[styles.row, styles.textContainer]}>
            <TouchableOpacity style={[styles.button, styles.row]}>
              <PencilSimple size={24} weight="fill" color="#262D57" />
              <Text style={styles.textBody}>Edit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, styles.row]}>
              <Trash size={24} weight="fill" color="#262D57" />
              <Text style={styles.textBody}>Delete</Text>
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
    </View>
  );
};

export default ContentMyParking;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    height: 127,
    justifyContent: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    flexDirection: 'column',
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 20,
    width: 361,
  },
  topContainer: {
    height: 77,
    justifyContent: 'space-between',
  },
  textContainer: {
    padding: 10,
  },
  textBody: {
    fontFamily: 'RedHatText',
    fontSize: 16,
    color: '#262D57',
    paddingVertical: 5,
    paddingLeft: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  bottomContainer: {
    backgroundColor: '#EEF0FF',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    height: 60,
    flex: 1,
  },
  button: {
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#7F85B2',
    paddingHorizontal: 25,
  },
  switchContainer: {
    paddingLeft: 45
  }
});


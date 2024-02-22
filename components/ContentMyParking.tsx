import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { CoinVertical, PencilSimple, Star, Trash } from 'phosphor-react-native';
import Switch from './Switch';

interface IContentMyParking {
}


const ContentMyParking = (props: IContentMyParking) => {
  const [isActive, setIsActive] = useState(false);

  const handlePress = () => {
    setIsActive(!isActive);
  };
  return (
    <View style={styles.container}>
      <View style={styles.boxContainer}>
        <View style={styles.topContainer}>
          <View style={styles.textContainer}>
            <View style={styles.row}>
              <Text style={styles.textBody}>ที่จอดบ้านฉันเอง</Text>
              <View style={styles.row}>
                <Star size={14} weight="fill" color="#FFA800" />
                <Text style={styles.textBody}>0</Text>
              </View>
            </View>
            <View style={styles.row}>
              <View style={styles.row}>
                <CoinVertical size={24} weight="fill" color="#FFA800" />
                <Text style={[styles.textBody, { color: '#FFA800' }]}>10 Coins / hr</Text>
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


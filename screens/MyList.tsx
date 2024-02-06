import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import RequireLogin from '../components/RequireLogin';
import React, { useState } from 'react';
import ContentMyList from '../components/ContentMyList';

interface myList {
    parkingId: string;
    userId: string;
  }

const MyList = () => {
    const [myList, setMyList] = useState<myList[]>([]);
    const [checkData, setCheckData] = useState('');
    return (
        <RequireLogin>
            <View style={styles.container}>
                <View style={styles.mainContainer}>
                    <View style={styles.circleBig} />
                    <Text style={styles.title}>My List</Text>
                    <ScrollView>
                        <ContentMyList></ContentMyList>
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

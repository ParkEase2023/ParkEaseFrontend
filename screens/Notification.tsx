import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Pressable } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { AuthTabParamList } from '../stack/AuthStack';
import { ArrowLeft, Circle } from 'phosphor-react-native';
import TabEditProfilePicture from '../components/TabEditProfilePicture';
import Popupverify from '../components/Popupverify';

const Notification = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
    return (
        // <View style={{flex:1}}>
        //     <View style={styles.container}>
        //         <TabEditProfilePicture></TabEditProfilePicture>
        //     </View>
        // </View>
        <Popupverify></Popupverify>
    );
};

export default Notification;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 120,
        backgroundColor: '#EEF0FF',
        position:'absolute',
        bottom: 0
    }
});

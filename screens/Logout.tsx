import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { RootStackList } from '../stack/RootStack';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const Logout = () => {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
    const { isLoggedIn, setLoggedIn } = useContext(AuthContext);
    const handleLogout = async () => {
        setLoggedIn(false);
        await AsyncStorage.removeItem('token');
        navigation.replace('MenuStack', { screen: 'HomeStack' });
    };
    return (
        <View>
            <TouchableOpacity onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Logout

const styles = StyleSheet.create({})
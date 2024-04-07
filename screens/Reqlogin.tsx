import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from 'react-native';
import { CaretLeft } from 'phosphor-react-native';
import { RootStackList } from '../stack/RootStack';

function Reqlogin() {
    const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();
    return (
        <View style={styles.bg}>
            <View style={styles.circleBig} />
            <View style={styles.flexMain}>
                <ScrollView style={styles.container}>
                    <TouchableOpacity style={styles.btnBack} onPress={() => navigation.goBack()}>
                        <CaretLeft size={24} weight="bold" color="#EEF0FF" />
                    </TouchableOpacity>

                    <Image style={styles.reqLogIn} source={require('../assets/Login.png')} />

                    <Text style={styles.title}>Log In Now!</Text>
                    <Text style={styles.subtitle}>You must log in first to use this feature.</Text>

                    <TouchableOpacity
                        style={styles.btnLogIn}
                        onPress={() => navigation.navigate('AuthStack', { screen: 'SignIn' })}>
                        <Text style={styles.textLogIn}>LOG IN</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.btnSignUp}
                        onPress={() => navigation.navigate('AuthStack', { screen: 'SignUp' })}>
                        <Text style={styles.textSignUp}>SIGN UP</Text>
                    </TouchableOpacity>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    container: {
        paddingHorizontal: 40
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
    flexMain: {
        flex: 8
    },
    btnBack: {
        marginTop: 40
    },
    reqLogIn: {
        width: 320,
        height: 320,
        alignSelf: 'center',
        marginTop: 30
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 40,
        color: '#10152F',
        marginTop: 40,
        textAlign: 'center'
    },
    subtitle: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 20,
        color: '#262D57',
        marginTop: 10,
        marginBottom: 55,
        textAlign: 'center'
    },
    btnLogIn: {
        backgroundColor: '#10152F',
        borderRadius: 12,
        paddingVertical: 16,
        marginBottom: 16
    },
    textLogIn: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94'
    },
    btnSignUp: {
        backgroundColor: '#7F85B2',
        borderRadius: 12,
        paddingVertical: 16,
        marginBottom: 10
    },
    textSignUp: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#fff'
    },
    circleSmall: {
        zIndex: -1,
        position: 'absolute',
        width: 95,
        height: 95,
        borderRadius: 100,
        backgroundColor: '#262D57',
        top: 15,
        left: 8
    }
});

export default Reqlogin;

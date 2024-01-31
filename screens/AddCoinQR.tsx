import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    Image,
    TouchableOpacity,
    Alert
} from 'react-native';
import { CaretLeft, DownloadSimple } from 'phosphor-react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import RNFS from 'react-native-fs';

const AddCoinQR = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();

    const saveImage = () => {
        const img = require('../assets/IMGParking_1.jpg');
        const filename = 'test.jpeg';
        const picturesDirectoryPath = RNFS.PicturesDirectoryPath || RNFS.DocumentDirectoryPath;
        RNFS.moveFile(img, `${picturesDirectoryPath}/${filename}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={32} color="#011303" />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>Add coins to your account</Text>
                    <TouchableOpacity onPress={saveImage}>
                        <DownloadSimple size={32} color="#011303" style={{ paddingLeft: 80 }} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.qrcode}>
                <Image
                    source={require('../assets/Qrcod.png')}
                    style={{
                        width: 300,
                        height: 300,
                        marginRight: 50,
                        marginLeft: 50,
                        borderRadius: 18
                    }}
                />
            </View>
            <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btnConfirm}>
                <Text style={styles.textConfirm}>FINSHED</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingHorizontal: 25,
        padding: 27,
        backgroundColor: '#EEF0FF'
    },
    header: {
        width: '100%',
        paddingVertical: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%'
    },
    headerText: {
        fontFamily: 'RedHatText',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#10152F',
        marginLeft: 50
    },
    line: {
        borderBottomWidth: 1,
        borderBottomColor: '#CED2EA',
        width: '150%'
    },
    buttonContainer: {
        flexDirection: 'row', // Arrange children in a row
        justifyContent: 'space-between', // Space evenly between children
        padding: 30
    },
    button: {
        backgroundColor: '#DAE0FF',
        color: 'black',
        padding: 10,
        paddingLeft: 20,
        paddingRight: 20,
        borderRadius: 10,
        marginHorizontal: 10
    },
    buttonText: {
        color: 'black',
        textAlign: 'center'
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'RedHatText',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FEFA94',
        letterSpacing: 0.64
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 15,
        elevation: 2,
        width: 343,
        height: 55,
        padding: 16
    },
    qrcode: {
        padding: 130,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 80
    }
});

export default AddCoinQR;

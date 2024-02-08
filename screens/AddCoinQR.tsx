import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Pressable,
    TextInput,
    Image,
    TouchableOpacity,
    Alert,
    PermissionsAndroid,
    Platform
} from 'react-native';
import { CaretLeft, DownloadSimple } from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import RNFS from 'react-native-fs';
import RNFetchBlob from 'rn-fetch-blob';
import { CheckCharge } from '../services/omise';
import Toast from 'react-native-toast-message';

const AddCoinQR = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'AddCoinQR'>>();
    const [isVisible, setIsVisible] = useState(
        'https://api.omise.co/charges/chrg_test_5yo48yeud2kbp3ze500/documents/docu_test_5yo48ygmypagffsatjo/downloads/5A1FB23047E8EE1E'
    );
    const [ToastC, setToastC] = useState(true);

    const saveImage = async () => {
        let imgUrl = params.qrCode;

        let newImgUri = imgUrl.lastIndexOf('/');
        let imageName = imgUrl.substring(newImgUri);

        let dirs = RNFetchBlob.fs.dirs;
        let path =
            Platform.OS === 'ios' ? dirs['MainBundleDir'] + imageName : dirs.PictureDir + imageName;

        RNFetchBlob.config({
            fileCache: true,
            appendExt: 'jpg',
            indicator: true,
            IOSBackgroundTask: true,
            path: path,
            addAndroidDownloads: {
                useDownloadManager: true,
                notification: true,
                path: path,
                description: 'Image'
            }
        })
            .fetch('GET', imgUrl)
            .then(res => {
                console.log(res, 'end downloaded');
            });
    };

    const showToast = () => {
        Toast.show({
            type: 'success',
            text1: '🥳  Add My Favorite Successfully!!!',
            text2: 'Can you see my favorite.',
            autoHide: true,
            visibilityTime: 3000
        });
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            checkPayment();
            
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const checkPayment = async () => {
        // console.log(params.id);
        const CheckPayment: any = await CheckCharge({ Id: params.id });
        if (CheckPayment.message === 'success') {
            // await showToast()
            navigation.navigate('Profile');
        } else {
            console.log(CheckPayment.message);
        }
    };

    const requestStoragePermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                {
                    title: 'Storage Permission',
                    message: 'App needs access to your storage to save the image.',
                    buttonNeutral: 'Ask Me Later',
                    buttonNegative: 'Cancel',
                    buttonPositive: 'OK'
                }
            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log('Storage permission granted');
            } else {
                console.log('Storage permission denied');
            }
        } catch (err) {
            console.warn(err);
        }
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerContent}>
                    <Toast/>
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
                    // source={require('../assets/Qrcod.png')}
                    source={{ uri: params.qrCode }}
                    style={{
                        width: 300,
                        height: 300,
                        marginRight: 50,
                        marginLeft: 50,
                        borderRadius: 18
                    }}
                />
            </View>
            <TouchableOpacity onPress={showToast} style={styles.btnConfirm}>
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

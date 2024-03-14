import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import React, { useEffect, useState } from 'react';
import {
    CaretLeft,
    CaretRight,
    Clock,
    CoinVertical,
    MapPin,
    Phone,
    PlusCircle
} from 'phosphor-react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { AddParkingParamList } from '../stack/AddparkingStack';
import { getProfile } from '../services/user';
import PopupTimeOpen from '../components/PopupTimeOpen';
import PopupTimeClose from '../components/PopupTimeClose';
import { createparking } from '../services/parking';
import { launchImageLibrary } from 'react-native-image-picker';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export interface IProfile {
    _id: string;
    firstname: string;
    lastname: string;
}

const AddParkingDetails = () => {
    const navigation = useNavigation<NativeStackNavigationProp<AddParkingParamList>>();
    const { params } = useRoute<RouteProp<AddParkingParamList, 'AddParkingDetails'>>();
    const [providername, setProvidername] = useState('');
    const [timeOpen, setTimeOpen] = useState('Open');
    const [timeClose, setTimeClose] = useState('Close');
    const [day1, setDay1] = useState(false);
    const [day2, setDay2] = useState(false);
    const [day3, setDay3] = useState(false);
    const [day4, setDay4] = useState(false);
    const [day5, setDay5] = useState(false);
    const [day6, setDay6] = useState(false);
    const [day7, setDay7] = useState(false);
    const [title, setTitle] = useState('');
    const [phone, setPhone] = useState('');
    const [price, setPrice] = useState(0);
    const [openingStatus, setOpeningStatus] = useState(true);
    const [booking, setBooking] = useState(false);
    const [locationAddress, setLocationAddress] = useState('');
    const [picture1, setPicture1] = useState(
        'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.sanook.com%2Fnews%2F&psig=AOvVaw2LozT_eZjCaKky5wHekfdr&ust=1675358692831000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCPD1ltLr9PwCFQAAAAAdAAAAABAE'
    );
    const [picture2, setPicture2] = useState('');
    const [picture3, setPicture3] = useState('');
    const [profile, setProfile] = React.useState<IProfile>({
        _id: '',
        firstname: '',
        lastname: ''
    });
    const [visible, setVisible] = useState(false);
    const [ticker, setTicker] = useState(false);
    const [visibleC, setVisibleC] = useState(false);
    const [tickerC, setTickerC] = useState(false);

    const getUserProfile = async () => {
        const { data } = await getProfile();
        setProfile(data);
    };
    useEffect(() => {
        getUserProfile();
        addValue();
    }, []);

    const addValue = () => {
        if (params.type === 'BK') {
            setBooking(true);
        } else {
            setBooking(false);
        }
    };

    const popUpopen = () => {
        setTicker(true);
        setVisible(!visible);
    };

    const popUpclose = () => {
        setTickerC(true);
        setVisibleC(!visibleC);
    };

    const chooseImage1 = async () => {
        let options: any = {
            includeBase64: true,
            title: 'Select Image',
            customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, async (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source: any = 'data:image/jpeg;base64,' + response.assets[0].base64;
                setPicture1(source);
            }
        });
    };

    const chooseImage2 = async () => {
        let options: any = {
            includeBase64: true,
            title: 'Select Image',
            customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, async (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source: any = 'data:image/jpeg;base64,' + response.assets[0].base64;
                setPicture2(source);
            }
        });
    };

    const chooseImage3 = async () => {
        let options: any = {
            includeBase64: true,
            title: 'Select Image',
            customButtons: [{ name: 'customOptionKey', title: 'Choose Photo from Custom Option' }],
            storageOptions: {
                skipBackup: true,
                path: 'images'
            }
        };
        launchImageLibrary(options, async (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton);
            } else {
                const source: any = 'data:image/jpeg;base64,' + response.assets[0].base64;
                setPicture3(source);
            }
        });
    };

    const handleAddparking = async () => {
        const data: any = await createparking({
            id: profile._id,
            latitude: params.latitude,
            longitude: params.longitude,
            title: title,
            phone: phone,
            price: price,
            booking: booking,
            type: params.type,
            opening_status: openingStatus,
            timeOpen: timeOpen,
            timeClose: timeClose,
            providerBy: profile.firstname + ' ' + profile.lastname,
            location_address: locationAddress,
            parking_picture1: picture1,
            parking_picture2: picture2,
            parking_picture3: picture3,
            opening_mo: day1,
            opening_tu: day2,
            opening_we: day3,
            opening_th: day4,
            opening_fr: day5,
            opening_sa: day6,
            opening_su: day7
        });
        if (data.message === 'created parking By user') {
            navigation.navigate("MyParking")
        }
    };

    const RenderInput = (): JSX.Element | null => {
        if (params.type === 'Booking') {
            return (
                <View style={styles.simpleTextBox}>
                    <CoinVertical size={24} color="#565E8B" />
                    <TextInput placeholder="Price" style={styles.lastTextInput} />
                    <Text style={styles.textCoin}>Coin/hr</Text>
                </View>
            );
        } else {
            return null;
        }
    };
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity>
                    <CaretLeft size={28} weight="bold" color="#EEF0FF" />
                </TouchableOpacity>
                <Text style={styles.topic}>Add Parking Details</Text>
            </View>
            <View style={styles.circle} />
            <ScrollView style={styles.container}>
                <Text style={styles.titlePicture}>Picture of parking place</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btnAddPicture} onPress={chooseImage1}>
                        <Image source={{ uri: picture1 }} />
                        <PlusCircle size={24} weight="bold" color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAddPicture} onPress={chooseImage2}>
                        <PlusCircle size={24} weight="bold" color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAddPicture} onPress={chooseImage3}>
                        <PlusCircle size={24} weight="bold" color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleDate}>Opening Date</Text>
                <View style={styles.row}>
                    <TouchableOpacity
                        style={[styles.btnDate, day1 ? styles.btnDateActive : null]}
                        onPress={() => setDay1(!day1)}>
                        <Text style={[styles.textDate, day1 ? styles.textDateActive : null]}>
                            Su
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnDate, day2 ? styles.btnDateActive : null]}
                        onPress={() => setDay2(!day2)}>
                        <Text style={[styles.textDate, day2 ? styles.textDateActive : null]}>
                            Mo
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnDate, day3 ? styles.btnDateActive : null]}
                        onPress={() => setDay3(!day3)}>
                        <Text style={[styles.textDate, day3 ? styles.textDateActive : null]}>
                            Tu
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnDate, day4 ? styles.btnDateActive : null]}
                        onPress={() => setDay4(!day4)}>
                        <Text style={[styles.textDate, day4 ? styles.textDateActive : null]}>
                            We
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnDate, day5 ? styles.btnDateActive : null]}
                        onPress={() => setDay5(!day5)}>
                        <Text style={[styles.textDate, day5 ? styles.textDateActive : null]}>
                            Th
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnDate, day6 ? styles.btnDateActive : null]}
                        onPress={() => setDay6(!day6)}>
                        <Text style={[styles.textDate, day6 ? styles.textDateActive : null]}>
                            Fr
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.btnDate, day7 ? styles.btnDateActive : null]}
                        onPress={() => setDay7(!day7)}>
                        <Text style={[styles.textDate, day7 ? styles.textDateActive : null]}>
                            Sa
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.rowTimeOC}>
                    <Text style={styles.titleTime}>Time</Text>
                    <TouchableOpacity style={styles.btnTimeOpen} onPress={popUpopen}>
                        <View style={styles.rowTime}>
                            <Clock size={20} weight="fill" color="#239D60" />
                            <Text style={styles.textOpen}>{timeOpen}</Text>
                        </View>
                        <CaretRight size={14} weight="bold" color="#7F85B2" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnTimeClose} onPress={popUpclose}>
                        <View style={styles.rowTime}>
                            <Clock size={20} weight="fill" color="#EA4C4C" />
                            <Text style={styles.textClose}>{timeClose}</Text>
                        </View>
                        <CaretRight size={14} weight="bold" color="#7F85B2" />
                    </TouchableOpacity>
                </View>

                <View style={styles.noIconTextBox}>
                    <TextInput
                        placeholder="Provider name"
                        style={styles.noIconTextInput}
                        value={profile.firstname + ' ' + profile.lastname}
                        editable={false}
                    />
                </View>
                <View style={styles.simpleTextBox}>
                    <Phone size={24} color="#565E8B" />
                    <TextInput placeholder="Phone Number" style={styles.textInput} />
                </View>
                <View style={styles.noIconTextBox}>
                    <TextInput placeholder="Parking place name" style={styles.noIconTextInput} />
                </View>

                <TextInput
                    style={styles.textInputMultiLine}
                    placeholder="Location"
                    placeholderTextColor="#565E8B"
                    cursorColor={'#10152F'}
                    multiline={true}
                    numberOfLines={500}
                />
                <RenderInput></RenderInput>
                <TouchableOpacity style={styles.btnConfirm} onPress={handleAddparking}>
                    <Text style={styles.textConfirm}>CONFIRM</Text>
                </TouchableOpacity>
            </ScrollView>
            <PopupTimeOpen
                setVisible={visible}
                ticker={ticker}
                timeOpen={value => {
                    setTimeOpen(value);
                }}></PopupTimeOpen>
            <PopupTimeClose
                setVisible={visibleC}
                ticker={tickerC}
                timeClose={value => {
                    setTimeClose(value);
                }}></PopupTimeClose>
        </View>
    );
};

export default AddParkingDetails;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    rowTopic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16
    },
    topic: {
        marginLeft: 16,
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#EEF0FF'
    },
    circle: {
        position: 'absolute',
        width: 378,
        height: 378,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -245,
        left: -50,
        zIndex: -1
    },
    container: {
        paddingHorizontal: 25
    },
    titlePicture: {
        color: '#EEF0FF',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        marginTop: 12
    },
    btnAddPicture: {
        width: 106,
        height: 106,
        borderRadius: 26,
        backgroundColor: '#CED2EA',
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleDate: {
        color: '#262D57',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        marginTop: 20
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12
    },
    btnDate: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#7F85B2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    btnDateActive: {
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#7F85B2',
        backgroundColor: '#7F85B2',
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10
    },
    textDate: {
        color: '#565E8B',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14
    },
    textDateActive: {
        color: '#ffffff',
        fontFamily: 'RedHatText-Regular',
        fontSize: 14
    },
    rowTimeOC: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20
    },
    titleTime: {
        color: '#262D57',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16
    },
    rowTime: {
        flexDirection: 'row'
    },
    btnTimeOpen: {
        flex: 1,
        marginHorizontal: 16,
        paddingHorizontal: 12,
        paddingVertical: 6,
        backgroundColor: '#DAE0FF',
        borderRadius: 20,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textOpen: {
        color: '#239D60',
        marginLeft: 4,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16
    },
    btnTimeClose: {
        flex: 1,
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 20,
        backgroundColor: '#DAE0FF',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row'
    },
    textClose: {
        color: '#EA4C4C',
        marginLeft: 4,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16
    },

    noIconTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        marginTop: 20
    },
    simpleTextBox: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#DAE0FF',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginTop: 20
    },
    noIconTextInput: {
        flex: 1,
        color: '#565E8B',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        marginHorizontal: 16
    },
    textInput: {
        flex: 1,
        color: '#565E8B',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        marginHorizontal: 10
    },
    textInputMultiLine: {
        height: 100,
        padding: 10,
        borderRadius: 12,
        backgroundColor: '#DAE0FF',
        textAlignVertical: 'top',
        paddingLeft: 20,
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        marginTop: 20
    },
    lastTextInput: {
        flex: 1,
        color: '#565E8B',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        marginLeft: 10
    },
    textCoin: {
        color: '#10152F',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        marginLeft: 10
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        width: '100%',
        paddingVertical: 16,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginTop: 40
    },
    textConfirm: {
        color: '#FEFA94',
        fontFamily: 'RedHatText-Bold',
        fontSize: 18
    }
});

import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
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
import { RouteProp, useRoute } from '@react-navigation/native';
import { AddParkingParamList } from '../stack/AddparkingStack';
import { getProfile } from '../services/user';
import PopupTimeOpen from '../components/PopupTimeOpen';
import PopupTimeClose from '../components/PopupTimeClose';

export interface IProfile {
    _id: string;
    firstname: string;
    lastname: string;
}

const AddParkingDetails = () => {
    const { params } = useRoute<RouteProp<AddParkingParamList, 'AddParkingDetails'>>();
    const [providername, setProvidername] = useState('');
    const [timeOpen, setTimeOpen] = useState('Open');
    const [timeClose, setTimeClose] = useState('Close');
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
    }, []);

    const popUpopen = () => {
        setTicker(true);
        setVisible(!visible);
    };

    const popUpclose = () => {
        setTickerC(true);
        setVisibleC(!visibleC);
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
                    <TouchableOpacity style={styles.btnAddPicture}>
                        <PlusCircle size={24} weight="bold" color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAddPicture}>
                        <PlusCircle size={24} weight="bold" color="#fff" />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnAddPicture}>
                        <PlusCircle size={24} weight="bold" color="#fff" />
                    </TouchableOpacity>
                </View>
                <Text style={styles.titleDate}>Opening Date</Text>
                <View style={styles.row}>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>Su</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>Mo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>Tu</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>We</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>Th</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>Fr</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnDate}>
                        <Text style={styles.textDate}>Sa</Text>
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
                <TouchableOpacity style={styles.btnConfirm}>
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
    textDate: {
        color: '#565E8B',
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

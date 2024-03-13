import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native';
import React, { useState } from 'react';
import { CaretLeft, Circle, CheckCircle } from 'phosphor-react-native';
import ForBooking from '../assets/ForBooking.png';
import ForInformation from '../assets/ForInformation.png';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AddParkingParamList } from '../stack/AddparkingStack';

const SelectParkingType = () => {
    const [isPressed, setIsPressed] = useState(true);
    const [isPressed2, setIsPressed2] = useState(false);
    const navigation = useNavigation<NativeStackNavigationProp<AddParkingParamList>>();
    const { params } = useRoute<RouteProp<AddParkingParamList, 'SelectParkingType'>>();
    const handlePress = () => {
        setIsPressed(!isPressed);
        setIsPressed2(!isPressed2);
    };

    const addDetails = () => {
        if (isPressed === true) {
            navigation.navigate('AddParkingDetails', {
                type: 'BK',
                latitude: params.latitude,
                longitude: params.longitude
            });
        }
        else if (isPressed2 === true) {
            navigation.navigate('AddParkingDetails', {
                type: 'IF',
                latitude: params.latitude,
                longitude: params.longitude
            });
        }
    };

    const RenderIconBK = (): JSX.Element | null => {
        if (isPressed === false) {
            return <Circle size={32} weight="fill" color="#CED2EA" style={styles.check} />;
        } else if (isPressed === true) {
            return <CheckCircle size={32} weight="fill" color="#262D57" style={styles.check} />;
        } else {
            return null;
        }
    };
    const RenderIconIF = (): JSX.Element | null => {
        if (isPressed2 === false) {
            return <Circle size={32} weight="fill" color="#CED2EA" style={styles.check} />;
        } else if (isPressed2 === true) {
            return <CheckCircle size={32} weight="fill" color="#262D57" style={styles.check} />;
        } else {
            return null;
        }
    };
    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity>
                    <CaretLeft size={28} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.topic}>Select Parking Type</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.conFlex}>
                <View style={styles.mainFlex}>
                    <View>
                        <ScrollView style={styles.container}>
                            <TouchableOpacity
                                style={[styles.btnForBI, isPressed ? styles.btnForBIActive : null]}
                                onPress={handlePress}>
                                <RenderIconBK></RenderIconBK>
                                <Image source={ForBooking} style={styles.imageForBooking} />
                                <Text style={styles.textForBooking}>For Booking</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={[styles.btnForBI, isPressed2 ? styles.btnForBIActive : null]}
                                onPress={handlePress}>
                                <RenderIconIF></RenderIconIF>
                                <Image source={ForInformation} style={styles.imageForInformation} />
                                <Text style={styles.textForInformation}>For Information</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.btnFlex}>
                    <TouchableOpacity
                        style={styles.btnNextStepActive}
                        onPress={addDetails}>
                        <Text style={styles.textNextStepActive}>NEXT STEP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default SelectParkingType;

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
        color: '#10152F'
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1
    },
    conFlex: {
        flexDirection: 'column',
        flex: 1
    },
    mainFlex: {
        flex: 9,
        justifyContent: 'center'
    },
    btnFlex: {
        flex: 1
    },
    container: {
        paddingHorizontal: 25
    },
    btnForBI: {
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#CED2EA',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 46.5,
        marginBottom: 25
    },
    btnForBIActive: {
        borderRadius: 16,
        borderWidth: 3,
        borderColor: '#262D57',
        backgroundColor: '#DFE2F8',
        alignItems: 'center',
        paddingVertical: 25,
        paddingHorizontal: 46.5,
        marginBottom: 25
    },
    check: {
        position: 'absolute',
        top: 12,
        left: 12
    },
    imageForBooking: {
        width: 250,
        height: 180,
        borderRadius: 10,
        marginBottom: 25
    },
    textForBooking: {
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#262D57'
    },
    imageForInformation: {
        width: 250,
        height: 178,
        borderRadius: 10,
        marginBottom: 25
    },
    textForInformation: {
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#262D57',
        marginLeft: 16
    },
    btnNextStep: {
        marginHorizontal: 25,
        backgroundColor: '#D7DAEF',
        paddingVertical: 16,
        alignItems: 'center',
        borderRadius: 16
    },
    textNextStep: {
        fontSize: 18,
        fontFamily: 'RedHatText-Bold',
        color: '#7F85B2'
    },
    btnNextStepActive: {
        marginHorizontal: 25,
        backgroundColor: '#10152F',
        paddingVertical: 18,
        alignItems: 'center',
        borderRadius: 16
    },
    textNextStepActive: {
        fontSize: 18,
        fontFamily: 'RedHatText-Bold',
        color: '#FEFA94'
    }
});

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Moment from 'react-moment';
import { CoinVertical, MapPin, PencilSimple, Star, Trash } from 'phosphor-react-native';
import Switch from './Switch';

interface IContentMyParking {
    parking_name: string;
    timeStart: any;
    timeEnd: any;
}

const ContentBookingHistory = (props: IContentMyParking) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxContainer}>
                <View style={styles.topContainer}>
                    <View style={styles.textContainer}>
                        <View style={styles.row}>
                            <MapPin size={24} weight="fill" />
                            <Text style={styles.textHeader}>{props.parking_name}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.dottedLine}></View>
                <View style={styles.bottomContainer}>
                    <View style={[styles.row, styles.textContainer]}>
                        <Text style={styles.textBody}>Start:</Text>
                        <Text style={[styles.textBody, styles.bold]}>
                            <Moment format="DD MMM YYYY" element={Text}>
                                {props.timeStart}
                            </Moment>{' '}
                            |{' '}
                            <Moment format="HH:mm" element={Text}>
                                {props.timeStart}
                            </Moment>
                        </Text>
                        <Text style={styles.textBody}>End :</Text>
                        <Text style={[styles.textBody, styles.bold]}>
                            <Moment format="DD MMM YYYY" element={Text}>
                                {props.timeEnd}
                            </Moment>{' '}
                            |{' '}
                            <Moment format="HH:mm" element={Text}>
                                {props.timeEnd}
                            </Moment>
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default ContentBookingHistory;

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        height: 127,
        justifyContent: 'center',
        alignItems: 'center'
    },
    boxContainer: {
        flexDirection: 'column',
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 20,
        width: 361
    },
    topContainer: {
        height: 63.5,
        justifyContent: 'space-between'
    },
    textContainer: {
        padding: 10
    },
    textBody: {
        fontFamily: 'RedHatText',
        fontSize: 12,
        color: '#10152F',
        paddingVertical: 5,
        paddingLeft: 10
    },
    bold: {
        fontFamily: 'RedHatText-Bold'
    },
    row: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        padding: 5
    },
    textHeader: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 5,
        paddingLeft: 5
    },
    dottedLine: {
        borderStyle: 'dotted',
        borderBottomColor: '#7F85B2',
        borderBottomWidth: 0.5
    },
    bottomContainer: {
        backgroundColor: '#fff',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        height: 63.5
    },
    button: {
        borderRadius: 12,
        borderWidth: 1,
        borderColor: '#7F85B2',
        paddingHorizontal: 20
    }
});

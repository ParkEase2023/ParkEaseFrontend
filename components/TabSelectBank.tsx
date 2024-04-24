import {
    ScrollView,
    ScrollViewComponent,
    StyleSheet,
    Text,
    TouchableHighlight,
    View,
    Image
} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Coins, Images } from 'phosphor-react-native';

interface IBank {
    selectBank: (value: string) => void;
    setIsHidden: (value: boolean) => void;
}

const TabSelectBank = (props: IBank) => {
    return (
        <View style={styles.mainContainer}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('BBL'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                        <Image
                            source={require('../assets/bank/BBL.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>BBL</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('KBANK'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/KBANK.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>KBANK</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('RBS'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/RBC1.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>RBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('KTB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/Krung_Thai_Bank_logo1.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>KTB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('JPM'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/J.P.Morgan.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>JPM</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('MUFG'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/MUFG.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>MUFG</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('TTB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/TTB.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>TTB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('SCB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/SCB.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>SCB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('CITI'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/CITI.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>CITI</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('SMBC'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/SMBC.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>SMBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('SC'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/SCBT.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>SC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('CIMB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/CIMBT.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>CIMB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('UOB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/UOBT.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>UOB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('BAY'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/BAY.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>BAY</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('MEGA'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/megainternationalcommercial1.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>MEGA</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('BOA'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/bank-of-america-logo1.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>BOA</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('CACIB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/creditagricole.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>CACIB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('GSB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/GSB.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>GSB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('HSBC'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/HSBC.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>HSBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('DB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/DBBK.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>DB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('GHB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/GHB.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>GHB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('BAAC'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/BAAC.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>BAAC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('MB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/MUFG.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>MB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('BNP'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/bnp.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>BNP</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('IBANK'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/ibank.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>IBANK</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('TISCO'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/TISCO.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>TISCO</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('KK'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/kkbank.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>KK</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('ICBC'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/ICBC.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>ICBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('TCRB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/TCRB.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>TCRB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => { props.selectBank('LHB'), props.setIsHidden(true) }}>
                    <View style={styles.boxSizing}>
                    <Image
                            source={require('../assets/bank/LHBANK.png')}
                            style={styles.icon}
                        />
                        <Text style={styles.textbody}>LHB</Text>
                    </View>
                </TouchableHighlight>
            </ScrollView>
        </View>
    );
};

export default TabSelectBank;

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        paddingHorizontal: 25,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24
    },
    textbody: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    boxSizing: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    touchableHighlight: {
        borderRadius: 10,
        overflow: 'hidden'
    },
    icon: {
        marginRight: 20,
    }
});

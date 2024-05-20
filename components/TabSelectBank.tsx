import { ScrollView, StyleSheet, Text, TouchableHighlight, View, Image } from 'react-native';
import React from 'react';

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
                    onPress={() => {
                        props.selectBank('BBL'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/BBL.png')} />
                        <Text style={styles.textBody}>BBL</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('KBANK'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/KBANK.png')} />
                        <Text style={styles.textBody}>KBANK</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('RBS'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/RBC1.png')} />
                        <Text style={styles.textBody}>RBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('KTB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/Krung_Thai_Bank_logo1.png')} />
                        <Text style={styles.textBody}>KTB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('JPM'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/J.P.Morgan.png')} />
                        <Text style={styles.textBody}>JPM</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('MUFG'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/MUFG.png')} />
                        <Text style={styles.textBody}>MUFG</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('TTB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/TTB.png')} />
                        <Text style={styles.textBody}>TTB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('SCB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/SCB.png')} />
                        <Text style={styles.textBody}>SCB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('CITI'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/CITI.png')} />
                        <Text style={styles.textBody}>CITI</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('SMBC'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/SMBC.png')} />
                        <Text style={styles.textBody}>SMBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('SC'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/SCBT.png')} />
                        <Text style={styles.textBody}>SC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('CIMB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/CIMBT.png')} />
                        <Text style={styles.textBody}>CIMB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('UOB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/UOBT.png')} />
                        <Text style={styles.textBody}>UOB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('BAY'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/BAY.png')} />
                        <Text style={styles.textBody}>BAY</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('MEGA'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image
                            source={require('../assets/bank/megainternationalcommercial1.png')}
                        />
                        <Text style={styles.textBody}>MEGA</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('BOA'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/bank-of-america-logo1.png')} />
                        <Text style={styles.textBody}>BOA</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('CACIB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/creditagricole.png')} />
                        <Text style={styles.textBody}>CACIB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('GSB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/GSB.png')} />
                        <Text style={styles.textBody}>GSB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('HSBC'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/HSBC.png')} />
                        <Text style={styles.textBody}>HSBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('DB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/DBBK.png')} />
                        <Text style={styles.textBody}>DB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('GHB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/GHB.png')} />
                        <Text style={styles.textBody}>GHB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('BAAC'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/BAAC.png')} />
                        <Text style={styles.textBody}>BAAC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('MB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/MUFG.png')} />
                        <Text style={styles.textBody}>MB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('BNP'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/bnp.png')} />
                        <Text style={styles.textBody}>BNP</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('IBANK'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/ibank.png')} />
                        <Text style={styles.textBody}>IBANK</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('TISCO'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/TISCO.png')} />
                        <Text style={styles.textBody}>TISCO</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('KK'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/kkbank.png')} />
                        <Text style={styles.textBody}>KK</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('ICBC'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/ICBC.png')} />
                        <Text style={styles.textBody}>ICBC</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('TCRB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/TCRB.png')} />
                        <Text style={styles.textBody}>TCRB</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => {
                        props.selectBank('LHB'), props.setIsHidden(true);
                    }}>
                    <View style={styles.boxSizing}>
                        <Image source={require('../assets/bank/LHBANK.png')} />
                        <Text style={styles.textBody}>LHB</Text>
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
        paddingVertical: 20
    },
    textBody: {
        marginLeft: 16,
        alignSelf: 'center',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    boxSizing: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingVertical: 10
    },
    touchableHighlight: {
        borderRadius: 10,
        overflow: 'hidden'
    }
});

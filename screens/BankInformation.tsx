import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import { Bank, CaretLeft, EnvelopeSimple, IdentificationCard,} from "phosphor-react-native";

const BankInformation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const handleConfirm = async () => {
        console.log('confirm');
    };
    return (
        <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled">
        <View style={styles.headerContent}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
                <CaretLeft size={22} color="#10152F" />
            </TouchableOpacity>
            <View style={styles.center}>
                    <Text style={styles.headerText}>Bank Information</Text>
                </View>
            </View>
                <View style={styles.line}></View>
            <View>
                <View style={styles.mainContainer}>
                        <View style={styles.bodytext}>
                            <Text style={styles.headerTextbody}>Payer’s Information</Text>
                        </View>
                        <View style={styles.boxText}>
                            <Text style={styles.bodytext}>First Name:</Text>
                            <Text style={styles.textleft}>Kierra</Text>
                        </View>
                        <View style={styles.boxText}>
                            <Text style={styles.bodytext}>Last Name:</Text>
                            <Text style={styles.textleft}>Aminoff</Text>
                        </View>
                        <View style={styles.boxText}>
                            <EnvelopeSimple size={24} color="#565E8B" />
                            <View style={styles.spaceInLine}></View>
                            <Text style={styles.bodytext}>Email:</Text>
                            <Text style={styles.textleft}>kierra.ami@gmail.com</Text>
                        </View>
                        <View style={styles.boxText}>
                            <IdentificationCard size={24} color="#565E8B"/>
                            <View style={styles.spaceInLine}></View>
                            <Text style={styles.bodytext}>Email:</Text>
                            <Text style={styles.textleft}>3-1503-11211-567</Text>
                        </View>
                        <View style={styles.space}>
                        <View style={styles.bodytext}>
                            <Text style={styles.headerTextbody}>Bank Account</Text>
                        </View>                        
                        <View style={styles.boxText}>
                            <Bank size={32} color="#565E8B"/>
                            <View style={styles.spaceInLine}></View>
                            <Text style={styles.bodytext}>Bank:</Text>
                            <View style={styles.centerSide}>
                                <Image
                                    source={require('../assets/Kasikorn.png')}
                                    style={{ width: 32, height: 32 }}
                                />
                                <View style={styles.spaceInLine}></View>
                                <Text style={styles.textleft}>KBANK</Text>
                            </View>
                        </View>
                        <View style={styles.boxText}>
                            <Text style={styles.bodytext}>Account Name:</Text>
                            <Text style={styles.textleft}>kierra Aminoff</Text>
                        </View>

                        <View style={styles.boxText}>
                            <Text style={styles.bodytext}>Account Number:</Text>
                            <Text style={styles.textleft}>043-2-156788</Text>
                        </View>
                    </View>
                    <View>
                        <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirm}>
                            <Text style={styles.textConfirm}>Change Account</Text>
                        </TouchableOpacity>
                    </View>                   
                </View>
            </View>
        </ScrollView>
    );
};

export default BankInformation;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#EEF0FF',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        top: 40,
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        lineHeight: 30,
        color: '#10152F',
    },
    line: {
        borderBottomColor: '#D9DBE9',
        borderBottomWidth: 1,
        top: 50,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mainContainer: {
        paddingVertical: 45,
        paddingHorizontal: 25,
    },
    headerTextbody: {
        flex: 9,
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingTop: 20,
        paddingVertical: 5,

    },
    boxText: {
        flexDirection: 'row',
        paddingVertical: 10,
        alignItems: 'center',
    },
    textleft: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 5,
    },
    bodytext: {
        flex: 1, 
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#565E8B',
        paddingVertical: 5,
    },
    centerSide: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    space: {
        top: 20,
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 15,
        elevation: 2,
        marginTop: 80,
        width: '100%',
        height: 55,
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94',
        lineHeight: 55,
    },
    spaceInLine: {
        width: 10,
    }

});

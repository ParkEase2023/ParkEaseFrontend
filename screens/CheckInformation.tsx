import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CaretLeft } from "phosphor-react-native";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import PaymentBill from "../components/PaymentBill";

const CheckInformation = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const handleAddCoin = async  () => {}
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} color="#141414" />
                </TouchableOpacity>
            </View>
            <View style={styles.line}></View>
            <View style={styles.mainContainer}>
                <PaymentBill></PaymentBill>
            </View>
            <View style={styles.totalPrice}>
                <View style={styles.textRow}>
                    <Text style={styles.bodytext}>amount:</Text>
                    <Text style={styles.textleft}>500 THB</Text>
                </View>
                <View style={styles.textRow}>
                    <Text style={styles.bodytext}>fee:</Text>
                    <Text style={styles.textleft}>0 THB</Text>
                </View>
            </View>
            <View style={styles.buttonContrainer}>
                <TouchableOpacity style={styles.btnConfirm} onPress={handleAddCoin}>
                    <Text style={styles.textConfirm}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default CheckInformation;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF',
    },
    scrollViewContainer: {
        flexGrow: 1,
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        top: 40,
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#10152F',
        paddingLeft: 90,
    },
    line: {
        borderBottomColor: '#EEF0FF',
        borderBottomWidth: 1,
        width: '150%',
        paddingTop: 50,
    },
    mainContainer: {
        paddingVertical: 45,
        paddingHorizontal: 25,
    },
    totalPrice: {
        paddingHorizontal: 25,
        paddingVertical: 14,
        backgroundColor: '#CED2EA',
    },
    textRow: {
        flexDirection: 'row',
    },
    bodytext: {
        flex: 9,
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 5
    },
    textleft: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 5  
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 15,
        elevation: 2,
        marginTop: 80,
        width: '100%',
        height: 55
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'RedHatText',
        fontWeight: 'bold',
        fontSize: 16,
        color: '#FEFA94',
        top: 15,
        letterSpacing: 0.64
    },
    buttonContrainer: {
        paddingHorizontal: 25,
        paddingTop: 40
    }
});


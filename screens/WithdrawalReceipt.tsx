import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { CaretLeft } from "phosphor-react-native";
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import PaymentBill from "../components/PaymentBill";

const WithdrawalReceipt = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const handleAddCoin = async () => {
    };
    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} color="#141414" />
                </TouchableOpacity>
                <Text style={styles.headerText}>Withdrawal Receipt</Text>
            </View>
            <View style={styles.line}></View>
            <View style={styles.mainContainer}>
                <View style={styles.square}>
                <PaymentBill></PaymentBill>
                <View style={styles.space}>
                    <View style={styles.totalPrice}>
                        <Text style={styles.bodytext}>amount:</Text>
                        <Text style={styles.textleft}>500 THB</Text>
                        <View style={styles.lineInPayment}></View>
                    </View>
                    <View style={styles.totalPrice}>
                        <Text style={styles.bodytext}>fee:</Text>
                        <Text style={styles.textleft}>0 THB</Text>
                        <View style={styles.lineInPayment}></View>
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text style={styles.bodytextNoBlod}>Remaining Balance: 290 Coins</Text>
                </View>
            </View>
            <View>
                <TouchableOpacity style={styles.btnConfirm} onPress={handleAddCoin}>
                    <Text style={styles.textConfirm}>FINISHED</Text>
                </TouchableOpacity>
            </View>
        </View>
        </ScrollView>
    );
};

export default WithdrawalReceipt;

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
        borderBottomColor: '#D9DBE9',
        borderBottomWidth: 1,
        width: '150%',
        paddingTop: 50,
    },
    lineInPayment: {
        borderBottomColor: '#D9DBE9',
        borderBottomWidth: 1,
        width: '100%',
    },
    mainContainer: {
        paddingVertical: 45,
        paddingHorizontal: 25,
        backgroundColor: '#EEF0FF',
    },
    square: {
        backgroundColor: 'white',
        paddingVertical: 45,
        paddingHorizontal: 25,
        borderRadius: 20,
    },
    space: {
        top: 20
    },
    totalPrice: {
        backgroundColor: 'white',
        paddingHorizontal: 25,
        paddingVertical: 14,
    },
    bodytext: {
        flex: 9,
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#7F85B2',
    },
    textleft: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        textAlign: 'right'
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
    bodytextNoBlod: {
        fontFamily: 'RedHatText',
        fontSize: 14,
        color: '#262D57',
        marginTop: 10,
    }
});


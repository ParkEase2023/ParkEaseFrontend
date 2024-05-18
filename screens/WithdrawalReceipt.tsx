import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { CaretLeft } from 'phosphor-react-native';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ProfileParamList } from '../stack/ProfileStack';
import PaymentBill from '../components/PaymentBill';

const WithdrawalReceipt = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'WithdrawalReceipt'>>();

    return (
        <ScrollView
            style={styles.container}
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <Text style={styles.headerText}>Withdrawal Receipt</Text>
            <View style={styles.line} />

            <View style={styles.mainContainer}>
                <View style={styles.square}>
                    <PaymentBill
                        userId={params._id}
                        firstname={params.firstname}
                        lastname={params.lastname}
                        phoneNumber={params.phoneNumber}></PaymentBill>
                    <View style={styles.lower}>
                        <Text style={styles.bodyText}>amount:</Text>
                        <Text style={styles.textLeft}>{params.withdrawMoney} THB</Text>
                        <View style={styles.lineInPayment}></View>
                        <View style={styles.space} />
                        <Text style={styles.bodyText}>fee:</Text>
                        <Text style={styles.textLeft}>30 THB</Text>
                        <View style={styles.lineInPayment}></View>
                    </View>
                </View>
                <Text style={styles.description}>
                    Remaining Balance: {params.coins - params.withdrawMoney} Coins
                </Text>
            </View>

            <View style={styles.btnContainer}>
                <TouchableOpacity
                    style={styles.btnConfirm}
                    onPress={() => navigation.navigate('Profile')}>
                    <Text style={styles.textConfirm}>FINISHED</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

export default WithdrawalReceipt;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#DFE2F8'
    },
    scrollViewContainer: {
        flexGrow: 1
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 16,
        color: '#10152F',
        paddingVertical: 12
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    mainContainer: {
        flex: 8,
        paddingTop: 45,
        paddingHorizontal: 25
    },
    square: {
        backgroundColor: 'white',
        paddingTop: 50,
        paddingBottom: 35,
        paddingHorizontal: 25,
        borderRadius: 12
    },
    lower: {
        paddingTop: 45
    },
    bodyText: {
        fontFamily: 'RedHatText-SemiBold',
        fontSize: 16,
        color: '#7F85B2'
    },
    textLeft: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F',
        textAlign: 'right'
    },
    lineInPayment: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    space: {
        height: 14
    },
    description: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#10152F',
        marginTop: 10
    },
    btnContainer: {
        flex: 1,
        paddingHorizontal: 25
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16,
        width: '100%'
    },
    textConfirm: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    }
});

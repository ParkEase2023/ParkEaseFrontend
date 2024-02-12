import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ArrowCircleDown, CaretLeft} from "phosphor-react-native";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import { ProfileParamList } from "../stack/ProfileStack";
import { SafeAreaView } from "react-native-safe-area-context";

interface PaymentBillProps {
}


const PaymentBill = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.logo}>
                    <View style={styles.circle} />
                    <Image source={require('../assets/LogoPark_DarkMode.png')} style={{width: 50, height: 50}}  />
                </View>
                <View style={styles.spaceTextSender}>
                    <Text style={styles.headerText}>Kierra Aminoff</Text>
                    <Text style={styles.bodyText}>089-555-0120</Text>
                </View>
            </View>
            <View style={styles.linePosition}>
                <View style={styles.lineContainer}>
                    <View style={styles.VerticalLine} />
                </View>
                <View style={styles.arrowCirclePosition}>
                    <ArrowCircleDown size={32} color="#156132" />
                </View>
                <View style={styles.lineContainer}>
                    <View style={styles.VerticalLine} />
                </View>
            </View>
            <View style={styles.recipientRow}>
                <View style={styles.logo}>
                    {/* <View style={styles.circle} /> */}
                    <Image source={require('../assets/Kasikorn.png')} style={{width: 90, height: 90}}  />
                </View>
                <View style={styles.spaceText}>
                    <Text style={styles.headerText}>Kierra Aminoff</Text>
                    <Text style={styles.bodyText}>Kasikorn Bank</Text>
                    <Text style={styles.bodyText}>089-555-0120</Text>
                </View>
            </View>
        </View>
    );
}
    
export default PaymentBill;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingVertical: 12,
    },
    logo: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    circle: {
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#10152F',
        position: 'absolute',
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 18,
        color: '#10152F',
    },
    spaceTextSender: {
        marginLeft: 60,
    },
    bodyText: {
        fontFamily: 'RedHatText',
        textAlign: 'center',
        fontSize: 14,
        color: '#262D57',
        marginTop: 10,
    },
    linePosition: {
        paddingHorizontal: 45,
        paddingVertical: 12,
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    VerticalLine: {
        borderBottomColor: '#156132',
        borderBottomWidth: 40,
        width: '1%', 
        backgroundColor: '#262D57',
    },
    arrowCirclePosition: {
        marginLeft: -15, 
    },
    recipientRow: {
        flexDirection: 'row',
        alignItems: 'center',  
    },
    spaceText: {
        marginLeft: 40,
    },
});
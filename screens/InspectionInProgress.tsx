import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { CaretLeft } from 'phosphor-react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';


const InspectionInProgress = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    return (
        <ScrollView
            contentContainerStyle={styles.scrollViewContainer}
            keyboardShouldPersistTaps="handled">
            <View style={styles.headerContent}>
                <Text style={styles.headerText}>Bind An Account</Text>
            </View>
            <View style={styles.line}/>
            <View style={styles.container}>
                <View style={styles.ImageContainer}>
                    <Image
                        source={require('../assets/Hourglass.png')}
                        style={{ width: 300, height: 300 }}
                    />
                </View>
                <Text style={styles.title}>Inspection In Progress</Text>
                <Text style={styles.bodyText}> Please wait about 2 - 3 days {"\n"} to proceed.</Text>
            </View>
            <View style={styles.btnContainer}>
                <TouchableOpacity style={styles.btnConfirm} onPress={() => navigation.navigate("Profile")}>
                    <Text style={styles.textConfirm}>CONFIRM</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};
export default InspectionInProgress;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#EEF0FF'
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 16,
        color: '#10152F',
        fontFamily: 'RedHatText-Bold',
        paddingVertical: 12
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%'
    },
    container: {
        flex: 8,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ImageContainer: {
        paddingBottom: 35
    },
    title: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#10152F',
        paddingBottom: 16
    },
    bodyText: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
        textAlign: 'center'
    },
    btnContainer: {
        flex: 1,
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        paddingVertical: 16,
        marginHorizontal: 25,
        alignItems: 'center'
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#FEFA94'
    },
});

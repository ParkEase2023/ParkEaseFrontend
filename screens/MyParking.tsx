import { StyleSheet, Text, Touchable, TouchableOpacity, View } from "react-native";
import React from "react";
import { CaretLeft, Plus } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ProfileParamList } from "../stack/ProfileStack";
import ContentMyParking from "../components/ContentMyParking";

const MyParking = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    return (
        <View style={styles.container}>
            <View style={styles.mainContainer}>
                <View style={styles.circleBig} />
                <View style={styles.circleSmallBotton} />
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <CaretLeft size={24} weight="bold" color="white" />
                    </TouchableOpacity>
                    <Text style={styles.title}>My Parking</Text>
                    <TouchableOpacity style={styles.circleWhite}>
                        <Plus size={24} weight="bold" />
                    </TouchableOpacity>
                </View>
                <View style={styles.bodyContainer}>
                    <ContentMyParking />
                </View>
            </View>
        </View>
    );
}
export default MyParking;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#D7DAEF'
    },
    mainContainer: {
        flex: 1,
        marginBottom: 25
    },
    circleBig: {
        position: 'absolute',
        width: 380,
        height: 380,
        borderRadius: 200,
        backgroundColor: '#262D57',
        top: -72,
        left: -144
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        marginTop: 65,
        justifyContent: 'space-between'
    },
    title: {
        flex: 1,
        paddingHorizontal: 16,
        fontFamily: 'RedHatText-Bold',
        fontSize: 24,
        color: '#fff',

    },
    circleWhite: {
        width: 48,
        height: 48,
        borderRadius: 25,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circleSmallBotton: {
        position: 'absolute',
        width: 100,
        height: 100,
        borderRadius: 100,
        backgroundColor: '#262D57',
        bottom: 52,
        right: 25
    },
    bodyContainer: {
        flex: 1,
        // marginTop: 25,
        paddingHorizontal: 25
    }
});
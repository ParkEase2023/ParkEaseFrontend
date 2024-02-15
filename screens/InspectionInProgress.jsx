import React from 'react';
import { 
    View, 
    Text, 
    ScrollView, 
    StyleSheet, 
    TouchableOpacity,
    Image,
} from 'react-native';
import { CaretLeft, } from 'phosphor-react-native';

const InspectionInProgress = () => {
    const handleConfirm = () => {
        console.log('Confirm');
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
                    <Text style={styles.headerText}>Bind An Account</Text>
                </View>
            </View>
                <View style={styles.line}></View>
                <View style={styles.container}>
                    <View style={styles.ImageContainer}>
                    <Image
                        source={require('../assets/Hourglass.png')}
                        style={{ width: 300,height: 300 }}
                    />
                    </View>
                    <Text style={styles.headerText}>Inspection In Progress</Text>
                    <View style={styles.space}></View>
                    <Text style={styles.bodyText}> Please wait about 2 - 3 days to proceed.</Text>
                    
                </View>
                <View style={styles.buttonContrainer}>
                    <TouchableOpacity style={styles.btnConfirm} onPress={handleConfirm}>
                        <Text style={styles.textConfirm}>Confirm</Text>
                    </TouchableOpacity>   
                </View>
        </ScrollView>
    );
}
export default InspectionInProgress;

const styles = StyleSheet.create({
    scrollViewContainer: {
        flexGrow: 1,
        backgroundColor: '#EEF0FF',
    },
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF'
    },
    mainContainer: {
        paddingHorizontal: 25,
        paddingVertical: 40
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 25,
        paddingTop: 40
    },
    center: {
        flex: 1,
        alignItems: 'center',
    },
    headerText: {
        fontSize: 18,
        color: '#10152F',
    },
    line: {
        borderBottomColor: '#7F85B2',
        borderBottomWidth: 1,
        paddingTop: 15,
        width: '100%'
    },
    ImageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 20,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 20,
        color: '#10152F',
    },
    bodyText: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F',
        textAlign: 'center',
    },
    buttonContrainer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 50,
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 10,
        padding: 15,
        marginHorizontal: 25,
        alignItems: 'center',
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94',
    },
    spaceInLine: {
        paddingVertical: 10,
    },
    space: {
        paddingVertical: 10,
    },

});
import { CaretLeft } from "phosphor-react-native";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

interface buttonProps {
    onClose: () => void;
}
const InspectionInProgress = (props : buttonProps ) => {
    return (
        <View style={ styles.container}>
            <View style={styles.headerContent}>
                <CaretLeft size={32} color="#10152F"  />
                <Text style={styles.headerText}>Bind An Account</Text>
            </View>
            <View style={styles.line} />
            <View style={styles.mainContainer}>
                <Image 
                    source={require('../assets/Hourglass.png')} 
                    style={{width: 445, height: 314, top: 211,}}
                />
                <View style={styles.textPosition}>
                    <Text style={styles.textbold}>Inspection in progress</Text>
                    <Text style={styles.text}>Please wait about 2 - 3 days</Text>
                    <Text style={styles.text}>to proceed.</Text>
                </View>
                <TouchableOpacity onPress={props.onClose} style={styles.btnConfirm}>
                        <Text style={styles.textConfirm}>FINSIHED</Text>
                    </TouchableOpacity>
            </View>
        </View>
    );
};

export default InspectionInProgress;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEF0FF',
    },
    headerContent: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 40,
        paddingHorizontal: 25,
    },
    headerText: {
        fontFamily: 'RedHatText-Bold',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        color: '#10152F',
        paddingLeft: 80,
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1,
        width: '100%',
        top: 50,
    },
    mainContainer: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 25,
    },
    textPosition: {
        // flexDirection: 'row',
        alignItems: 'center',
        top: 227,
    },
    textbold: {
        fontFamily: 'RedHatText',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#10152F',
    },
    text: {
        fontFamily: 'RedHatText',
        fontSize: 16,
        color: '#565E8B',
        top: 16,
    },
    btnConfirm: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        width: 343,
        height: 65,
        justifyContent: 'center',
        alignItems: 'center',
        top: 360,
    },
    textConfirm: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 18,
        color: '#FEFA94',
    },
});
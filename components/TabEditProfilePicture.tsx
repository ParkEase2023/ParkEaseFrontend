import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Camera, Image } from 'phosphor-react-native';

interface IEditpic {
    takePhoto : (value: boolean) => void;
    chooseImage: (value: boolean) => void;

}
const TabEditProfilePicture = (props:IEditpic) => {

    return (
            <View style={styles.mainContainer}>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => props.takePhoto(true)}>
                    <View style={styles.boxSizing}>
                        <Camera size={32} weight="fill" style={styles.icon} />
                        <Text style={styles.textbody}>Take a new photo</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => props.chooseImage(true)}>
                    <View style={styles.boxSizing}>
                        <Image size={32} weight="fill" style={styles.icon} />
                        <Text style={styles.textbody}>Select a photo from the gallery.</Text>
                    </View>
                </TouchableHighlight>
            </View>
    );
};

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16,
        // borderBottomLeftRadius: 40,
        // borderBottomRightRadius: 40,
        paddingHorizontal: 25,
        paddingTop: 25,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 12 },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,
        elevation: 24
    },
    textbody: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    boxSizing: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 20
    },
    touchableHighlight: {
        borderRadius: 10, 
        overflow: 'hidden',
    },
    icon: {
        marginRight: 20,
        marginTop: -5
    }
});

export default TabEditProfilePicture;

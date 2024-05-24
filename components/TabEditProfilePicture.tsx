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
                        <Camera size={32} weight="fill" color='#10152F' />
                        <Text style={styles.textBody}>Take a new photo</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF"
                    onPress={() => props.chooseImage(true)}>
                    <View style={styles.boxSizing}>
                        <Image size={32} weight="fill" color='#10152F' />
                        <Text style={styles.textBody}>Select a photo from the gallery.</Text>
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
        paddingHorizontal: 25,
        paddingVertical: 20,
    },
    textBody: {
        marginLeft: 16,
        alignSelf: 'center',
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#10152F'
    },
    boxSizing: {
        flexDirection: 'row',
        alignSelf: 'flex-start',
        paddingVertical: 10,
    },
    touchableHighlight: {
        borderRadius: 10,
        overflow: 'hidden'
    },
});

export default TabEditProfilePicture;

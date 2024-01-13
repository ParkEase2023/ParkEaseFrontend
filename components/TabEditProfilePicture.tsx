import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Camera, Image } from 'phosphor-react-native';

const TabEditProfilePicture = () => {
    return (
            <View style={styles.mainContainer}>
                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF" // Highlight color
                    onPress={() => console.log('Take a new photo pressed')}>
                    <View style={styles.boxSizing}>
                        <Camera size={32} weight="fill" style={styles.icon} />
                        <Text style={styles.textbody}>Take a new photo</Text>
                    </View>
                </TouchableHighlight>

                <TouchableHighlight
                    style={styles.touchableHighlight}
                    activeOpacity={0.7}
                    underlayColor="#EFEFEF" // Highlight color
                    onPress={() => console.log('Select a photo pressed')}>
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
        borderRadius: 10, // Adjust as needed
        overflow: 'hidden' // Clip the content to the borderRadius
    },
    icon: {
        marginRight: 20,
        marginTop: -5
    }
});

export default TabEditProfilePicture;

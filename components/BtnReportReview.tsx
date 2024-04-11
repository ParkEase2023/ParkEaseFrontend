import { StyleSheet, Text } from 'react-native';
import React from 'react';
import { Menu, MenuOption, MenuTrigger, MenuProvider, MenuOptions } from 'react-native-popup-menu';
import { DotsThreeVertical } from 'phosphor-react-native';

const BtnReportReview = () => {
    return (
        <MenuProvider>
            <Menu>
                <MenuTrigger style={styles.btnPoints}>
                    <DotsThreeVertical size={24} weight="bold" color="#565E8B" />
                </MenuTrigger>
                <MenuOptions
                    customStyles={{
                        optionsContainer: {
                            backgroundColor: '#D7DAEF',
                            width: 122,
                            height: 30,
                        }
                    }}>
                    <MenuOption style={styles.dropdown}>
                        <Text style={styles.textReport}>report review</Text>
                    </MenuOption>
                </MenuOptions>
            </Menu>
        </MenuProvider>
    );
};

export default BtnReportReview;

const styles = StyleSheet.create({
    btnPoints: {
        alignItems: 'flex-end'
    },
    dropdown: {
        alignItems: 'center',
    },
    textReport: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#565E8B',
    }
});

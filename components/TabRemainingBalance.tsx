import React from 'react';
import { StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import { Bank, Coins, HandCoins } from 'phosphor-react-native';

interface IEditpic {
    addCoins: (value: boolean) => void;
    BindAccount: (value: boolean) => void;
    WithdrawMoney: (value: boolean) => void;
}
const TabRemainingBalance = (props: IEditpic) => {
    return (
        <View style={styles.mainContainer}>
            <TouchableHighlight
                style={styles.touchableHighlight}
                activeOpacity={0.7}
                underlayColor="#EFEFEF"
                onPress={() => props.addCoins(true)}>
                <View style={styles.boxSizing}>
                    <Coins size={32} weight="fill" color='#10152F' />
                    <Text style={styles.textBody}>Add Coins</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.touchableHighlight}
                activeOpacity={0.7}
                underlayColor="#EFEFEF"
                onPress={() => props.BindAccount(true)}>
                <View style={styles.boxSizing}>
                    <Bank size={32} weight="fill" color='#10152F' />
                    <Text style={styles.textBody}>Bind An Account</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.touchableHighlight}
                activeOpacity={0.7}
                underlayColor="#EFEFEF"
                onPress={() => props.WithdrawMoney(true)}>
                <View style={styles.boxSizing}>
                    <HandCoins size={32} weight="fill" color='#10152F' />
                    <Text style={styles.textBody}>Withdraw Money</Text>
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

export default TabRemainingBalance;

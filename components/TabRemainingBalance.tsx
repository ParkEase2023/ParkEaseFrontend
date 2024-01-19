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
                    <Coins size={32} weight="fill" style={styles.icon} />
                    <Text style={styles.textbody}>Add Coins</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.touchableHighlight}
                activeOpacity={0.7}
                underlayColor="#EFEFEF"
                onPress={() => props.BindAccount(true)}>
                <View style={styles.boxSizing}>
                    <Bank size={32} weight="fill" style={styles.icon} />
                    <Text style={styles.textbody}>Bind An Account</Text>
                </View>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.touchableHighlight}
                activeOpacity={0.7}
                underlayColor="#EFEFEF"
                onPress={() => props.WithdrawMoney(true)}>
                <View style={styles.boxSizing}>
                    <HandCoins size={32} weight="fill" style={styles.icon} />
                    <Text style={styles.textbody}>Withdraw Money</Text>
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
        overflow: 'hidden'
    },
    icon: {
        marginRight: 20,
        marginTop: -5
    }
});

export default TabRemainingBalance;

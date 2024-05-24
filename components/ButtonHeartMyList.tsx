import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { Heart } from 'phosphor-react-native';

interface IHeart {
    myListId: string;
    onSelected2: (value: boolean) => void;
    onSelected: (value: boolean) => void;
    onClick: (value: string) => void;
}

const ButtonHeartMyList = (props: IHeart) => {
    const [first, setfirst] = useState(false);
    const clickHeart = async() => {
        await setfirst(!first);
        props.onSelected(true);
        props.onSelected2(first);
        props.onClick(props.myListId);
    };
    return (
        <Pressable style={styles.bgBtnLike} onPress={() => clickHeart()}>
            <Heart size={20} weight="fill" color="#EA4C4C" style={styles.btnLike} />
        </Pressable>
    );
};

export default ButtonHeartMyList;

const styles = StyleSheet.create({
    bgBtnLike: {
        alignItems: 'center',
        justifyContent: 'center',
        height: 81,
        borderTopRightRadius: 12,
        borderBottomRightRadius: 12,
        backgroundColor: '#EEF0FF'
    },
    btnLike: {
        marginHorizontal: 12
    }
});

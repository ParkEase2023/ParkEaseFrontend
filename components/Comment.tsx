import { Image, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import { DotsThreeVertical, Star } from 'phosphor-react-native';
import Starsmall from './Starsmall';
import Moment from 'react-moment';

interface IComment {
    image: string;
    username: string;
    rating: number;
    date: string;
    comment: string;
}

const Comment = (props: IComment) => {
    const [rating, setRating] = useState(props.rating);
    return (
        <View>
            <View style={styles.rowComment}>
                <Image source={{uri: props.image}} style={styles.smallProfile} />

                <View style={styles.rowDetailComment}>
                    <Text style={styles.nameComment}>{props.username}</Text>
                    <View style={styles.rowLower}>
                        <View style={styles.rowSmallStar}>
                            <Text>
                                {Array(5)
                                    .fill(0)
                                    .map((_, index) => (
                                        <Starsmall key={index} filled={index < rating} />
                                    ))}
                            </Text>
                        </View>
                        <Moment format="DD/MM/YYYY" style={styles.timeComment} element={Text}>
                            {props.date}
                        </Moment>
                    </View>
                </View>

                <DotsThreeVertical size={24} weight="bold" color="#565E8B" />
            </View>
            <Text style={styles.textComment}>
                {props.comment}
            </Text>
            <View style={styles.line2} />
        </View>
    );
};

export default Comment;

const styles = StyleSheet.create({
    rowComment: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    smallProfile: {
        width: 32,
        height: 32,
        borderRadius: 100,
        marginRight: 16
    },
    rowDetailComment: {
        flex: 1
    },
    nameComment: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EEF0FF'
    },
    rowLower: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rowSmallStar: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    timeComment: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 12,
        color: '#EEF0FF',
        marginLeft: 8
    },
    textComment: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#EEF0FF',
        marginBottom: 16
    },
    line2: {
        width: '100%',
        height: 1,
        backgroundColor: '#262D57',
        marginBottom: 16
    }
});

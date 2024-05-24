import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Moment from 'react-moment';
import StarSmallMyList from './StarSmallMyList';
import { DotsThreeVertical } from 'phosphor-react-native';

const CommentMyList = () => {
  return (
    <View>
            <View style={styles.rowComment}>
                {/* <Image source={{uri: props.image}} style={styles.smallProfile} /> */}

                <View style={styles.rowDetailComment}>
                    {/* <Text style={styles.nameComment}>{props.username}</Text> */}
                    <View style={styles.rowLower}>
                        <View style={styles.rowSmallStar}>
                            {/* <Text>
                                {Array(5)
                                    .fill(0)
                                    .map((_, index) => (
                                        <StarSmallMyList key={index} filled={index < rating} />
                                    ))}
                            </Text> */}
                        </View>
                        <Moment format="DD/MM/YYYY" style={styles.timeComment} element={Text}>
                            {/* {props.date} */}
                        </Moment>
                    </View>
                </View>

                <DotsThreeVertical size={24} weight="bold" color="#565E8B" />
            </View>
            <Text style={styles.textComment}>
                {/* {props.comment} */}
            </Text>
            <View style={styles.line2} />
        </View>
  )
}

export default CommentMyList

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
        color: '#10152F'
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
        color: '#7F85B2',
        marginLeft: 8
    },
    textComment: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 14,
        color: '#10152F',
        marginBottom: 16
    },
    line2: {
        width: '100%',
        height: 1,
        backgroundColor: '#CED2EA',
        marginBottom: 16
    }
})
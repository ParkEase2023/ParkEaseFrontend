import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { DotsThreeVertical, Star } from 'phosphor-react-native';

const Comment = () => {
    return (
        <View>
            <View style={styles.rowComment}>
                <Image source={require('../assets/smallProfile.png')} style={styles.smallProfile} />

                <View style={styles.rowDetailComment}>
                    <Text style={styles.nameComment}>Charlie Gouse</Text>
                    <View style={styles.rowLower}>
                        <View style={styles.rowSmallStar}>
                            <Star size={12} weight="fill" color="#FFDE00" />
                            <Star size={12} weight="fill" color="#FFDE00" />
                            <Star size={12} weight="fill" color="#FFDE00" />
                            <Star size={12} weight="fill" color="#FFDE00" />
                            <Star size={12} weight="fill" color="#FFDE00" />
                        </View>
                        <Text style={styles.timeComment}>24/10/23</Text>
                    </View>
                </View>

                <DotsThreeVertical size={24} weight="bold" color="#565E8B" />
            </View>
            <Text style={styles.textComment}>
                ที่จอดรถดีมาก กว้าง สะอาด มีการดูแลเอาใจใส่ลูกค้าดีคร้าบ
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

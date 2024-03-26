import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Star } from 'phosphor-react-native';

const StarSmallMyList = ({ filled }: any) => {
    return <Star size={14} weight={filled ? 'fill' : 'regular'} color={filled ? '#FFA800' : '#565E8B'} />;
};

export default StarSmallMyList;

const styles = StyleSheet.create({});
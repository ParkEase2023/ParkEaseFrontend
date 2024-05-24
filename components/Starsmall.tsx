import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';
import { Star } from 'phosphor-react-native';

const Starsmall = ({ filled }: any) => {
    return <Star size={14} weight={filled ? 'fill' : 'regular'} color={filled ? '#FFDE00' : '#565E8B'} />;
};

export default Starsmall;

const styles = StyleSheet.create({});

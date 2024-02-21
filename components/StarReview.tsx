import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable, TouchableOpacity } from 'react-native';
import { Star } from 'phosphor-react-native';

const StarReview = ({ filled, onClick }: any) => {
  return (
    <TouchableOpacity style={styles.star} onPress={onClick}>
      <Star size={34} weight={filled ? 'fill' : 'regular'} color={filled ? '#FFDE00' : '#565E8B'} />
    </TouchableOpacity>
  );
};

export default StarReview;

const styles = StyleSheet.create({
  star: {
    paddingHorizontal: 18,
  },
});

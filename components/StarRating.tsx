import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import StarReview from './StarReview';
interface IStar {
  onSelected: (value: number) => void;
}
const StarRating = (props: IStar) => {
  const [rating, setRating] = useState(Number);
  const [star, setStar] = useState(rating);
  useEffect(() => {
    console.log(rating);
    props.onSelected(rating);
  }, [rating]);
  return (
    <View>
      <Text>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <StarReview
              key={index}
              filled={index < rating}
              onClick={() => {
                setRating(index + 1);
              }}
            />
          ))}
      </Text>
    </View>
  );
};

export default StarRating;

const styles = StyleSheet.create({});

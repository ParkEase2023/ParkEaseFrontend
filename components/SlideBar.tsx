import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useEffect, useImperativeHandle } from 'react'
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'

const { height: SCREEN_HEIGHT } = Dimensions.get('window')
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;

type SlideBarProps = {};
export type SlideBarRefProps = {
  scrollTo: (destination: number) => void;
  isActive: () => boolean;
};

const SlideBar = React.forwardRef <SlideBarRefProps, SlideBarProps> (
  ({}, ref) => {
  const translateY = useSharedValue(0);
  const active = useSharedValue(false);

  const scrollTo = useCallback((destination: number) => {
    "worklet";
    active.value = destination !== 0;

    translateY.value = withSpring(destination, { damping: 50 });
  }, []);

  const isActive = useCallback(() => {
    return active.value;
  }, []);

  useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

  const context = useSharedValue({ y: 0 });
  const gesture = Gesture.Pan()
  .onStart(() => {
    context.value = { y: translateY.value };
  })
  .onUpdate((event) => {
    translateY.value = event.translationY + context.value.y;
    translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
  }).onEnd(() => {
    if (translateY.value > -SCREEN_HEIGHT / 2) {
      scrollTo(-SCREEN_HEIGHT / 3);
    } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
      scrollTo(-SCREEN_HEIGHT);
    }
  });

  const rBottomSheetStyles = useAnimatedStyle(() => {
    const borderRadius = interpolate( translateY.value, [MAX_TRANSLATE_Y, -SCREEN_HEIGHT], [16,0], Extrapolate.CLAMP);
    return {
      borderRadius,
      transform: [{ translateY: translateY.value }],
    };
  });

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyles]}>
        <View style={styles.line} />
      </Animated.View>
    </GestureDetector>
  )
})

export default SlideBar

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: '100%',
    backgroundColor: '#10152F',
    position: 'absolute',
    top: SCREEN_HEIGHT,
    borderRadius: 16,
  },
  line: {
    width: 60,
    height: 4,
    backgroundColor: '#565E8B',
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 12,
    marginBottom: 25,
  },
})
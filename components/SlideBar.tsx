import React, { forwardRef, useCallback, useImperativeHandle } from 'react';
import { Dimensions, StyleSheet, View, ScrollView } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedScrollHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import BackDrop from './BackDrop';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 100;

type SlideBarProps = {
    children?: React.ReactNode;
};

export type SlideBarRefProps = {
    scrollTo: (destination: number) => void;
    isActive: () => boolean;
};

const SlideBar = forwardRef<SlideBarRefProps, SlideBarProps>(({ children,...rest}, ref) => {
    const translateY = useSharedValue(0);
    const scrollBegin = useSharedValue(0);
    const scrollY = useSharedValue(0);
    const active = useSharedValue(false);

    const scrollTo = useCallback((destination: number) => {
        'worklet';
        active.value = destination !== 0;

        translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    const isActive = useCallback(() => {
        return active.value;
    }, []);

    const animationStyle = useAnimatedStyle(() => {
      const top = translateY.value;
      return {
        top,
      };
    });

    useImperativeHandle(ref, () => ({ scrollTo, isActive }), [scrollTo, isActive]);

    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate(event => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 2) {
                scrollTo(-SCREEN_HEIGHT / 3);
            } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                scrollTo(-SCREEN_HEIGHT);
            }
        });

    const onScroll = useAnimatedScrollHandler({
        onBeginDrag: event => {
            scrollBegin.value = event.contentOffset.y;
        },
        onScroll: event => {
            scrollY.value = event.contentOffset.y;
        }
    });

    const panScroll = Gesture.Pan()
        .onBegin(() => {
            context.value = { y: translateY.value };
        })
        .onUpdate(event => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, -SCREEN_HEIGHT);
        })
        .onEnd(() => {
            if (translateY.value > -SCREEN_HEIGHT / 2) {
                scrollTo(-SCREEN_HEIGHT / 3);
            } else if (translateY.value < -SCREEN_HEIGHT / 1.5) {
                scrollTo(-SCREEN_HEIGHT);
            }
        });

    const scrollViewGesture = Gesture.Native();

    const rBottomSheetStyles = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y, -SCREEN_HEIGHT],
            [16, 0],
            Extrapolate.CLAMP
        );
        return {
            borderRadius,
            transform: [{ translateY: translateY.value }]
        };
    });

    return (
        // <GestureDetector gesture={gesture}>
        //   <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyles]}>
        //     <ScrollView>
        //       <View style={styles.line} />
        //       {children}
        //     </ScrollView>
        //   </Animated.View>
        // </GestureDetector>
        <>
        {/* <BackDrop
          topAnimation={topAnimation}
          backDropColor={backDropColor}
          closeHeight={closeHeight}
          openHeight={openHeight}
          close={close}
        /> */}
        <GestureDetector gesture={gesture}>
            <Animated.View
                style={[
                    styles.container,
                    animationStyle,
                    {
                        // backgroundColor: backgroundColor,
                        // paddingBottom: inset.bottom
                    }
                ]}>
                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                </View>
                <GestureDetector gesture={Gesture.Simultaneous(scrollViewGesture, panScroll)}>
                    <Animated.ScrollView
                        {...rest}
                        scrollEnabled={true}
                        bounces={false}
                        scrollEventThrottle={16}
                        onScroll={onScroll}>
                        {children}
                    </Animated.ScrollView>
                </GestureDetector>
            </Animated.View>
        </GestureDetector>
        </>
    );
});

export default SlideBar;

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#10152F',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 16
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
    },
    lineContainer: {
      marginVertical: 10,
      alignItems: 'center',
    },
    line: {
      width: 50,
      height: 4,
      backgroundColor: 'black',
      borderRadius: 20,
    },
});

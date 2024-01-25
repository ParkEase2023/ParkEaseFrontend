import { Dimensions, StyleSheet, View } from 'react-native';
import React, { forwardRef, useImperativeHandle, useCallback, useState } from 'react';
import Animated, {
    useSharedValue,
    useAnimatedStyle,
    withSpring,
    withTiming,
    useAnimatedScrollHandler,
    AnimatedScrollViewProps,
    runOnJS
} from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import BackDrop from './BackDrop';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props extends AnimatedScrollViewProps {
    snapTo: string;
    backgroundColor: string;
    backDropColor: string;
}

export interface BottomSheetMethods {
    expand: () => void;
    close: () => void;
}

const BottomSheetScrollView = forwardRef<BottomSheetMethods, Props>(
    ({ snapTo, children, backgroundColor, backDropColor, ...rest }: Props, ref) => {
        const { height: screenHeight } = Dimensions.get('window');
        const inset = useSafeAreaInsets();
        const { height } = Dimensions.get('screen');
        const percentage = parseFloat(snapTo.replace('%', '')) / 100;
        const closeHeight = height;
        const openHeight = height - height * percentage;
        const topAnimation = useSharedValue(closeHeight);
        const context = useSharedValue(0);
        const scrollBegin = useSharedValue(0);
        const scrollY = useSharedValue(0);
        const [enableScroll, setEnableScroll] = useState(true);
        const translateY = useSharedValue(0);
        const active = useSharedValue(false);

        const expand = useCallback(() => {
            'worklet';
            topAnimation.value = withTiming(openHeight);
        }, [openHeight, topAnimation]);

        const close = useCallback(() => {
            'worklet';
            topAnimation.value = withTiming(closeHeight);
        }, [closeHeight, topAnimation]);

        useImperativeHandle(
            ref,
            () => ({
                expand,
                close
            }),
            [expand, close]
        );

        const animationStyle = useAnimatedStyle(() => {
            const top = topAnimation.value;
            return {
                top
            };
        });

        const pan = Gesture.Pan()
            .onBegin(() => {
                context.value = topAnimation.value;
            })
            .onUpdate(event => {
                const newHeight = context.value + event.translationY;
                // Calculate the maximum allowable height (90% of screen height)
                const maxAllowedHeight = 50;
                const dragHeight = 290;
                // console.log(maxAllowedHeight);
                // Check if the new height exceeds the maximum allowed height
                if (newHeight < maxAllowedHeight) {
                    // If exceeded, limit it to the maximum allowed height
                    topAnimation.value = withSpring(55, {
                        damping: 100,
                        stiffness: 400
                    });
                }
                // else if (newHeight < dragHeight) {
                //     // // If exceeded, limit it to the maximum allowed height
                //     topAnimation.value = withSpring(55, {
                //         damping: 100,
                //         stiffness: 400
                //     });
                // }
                else {
                    // Otherwise, update the animation within the valid range
                    topAnimation.value = withSpring(newHeight, {
                        damping: 100,
                        stiffness: 2000
                    });
                }
            })
            .onEnd(() => {
                // Check if the bottom sheet is dragged beyond the open and close heights
                if (topAnimation.value > openHeight) {
                    // If it's dragged down, keep it at openHeight
                    topAnimation.value = withSpring(openHeight, {
                        damping: 100,
                        stiffness: 400
                    });
                } else if (topAnimation.value < closeHeight) {
                    // If it's dragged up, keep it at closeHeight
                    // topAnimation.value = withSpring(closeHeight, {
                    //     damping: 100,
                    //     stiffness: 400
                    // });
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
                context.value = topAnimation.value;
            })
            .onUpdate(event => {
                if (event.translationY > 0) {
                    // topAnimation.value = withSpring(openHeight, {
                    //   damping: 100,
                    //   stiffness: 400,
                    // });
                } else if (event.translationY > 0 && scrollY.value === 0) {
                    runOnJS(setEnableScroll)(false);
                    topAnimation.value = withSpring(
                        Math.max(
                            context.value + event.translationY - scrollBegin.value,
                            openHeight
                        ),
                        {
                            damping: 100,
                            stiffness: 400
                        }
                    );
                }
            })
            .onEnd(() => {
                runOnJS(setEnableScroll)(true);
                if (topAnimation.value > openHeight + 50) {
                    topAnimation.value = withSpring(closeHeight, {
                        damping: 100,
                        stiffness: 400
                    });
                } else {
                    // topAnimation.value = withSpring(openHeight, {
                    //   damping: 100,
                    //   stiffness: 400,
                    // });
                }
            });

        const scrollViewGesture = Gesture.Native();

        return (
            <>
                <BackDrop
                    topAnimation={topAnimation}
                    backDropColor={backDropColor}
                    closeHeight={closeHeight}
                    openHeight={openHeight}
                    close={close}
                />
                <GestureDetector gesture={pan}>
                    <Animated.View
                        style={[
                            styles.container,
                            animationStyle,
                            {
                                backgroundColor: backgroundColor,
                                paddingBottom: inset.bottom
                            }
                        ]}>
                        <View style={styles.lineContainer}>
                            <View style={styles.line} />
                        </View>
                        <GestureDetector
                            gesture={Gesture.Simultaneous(scrollViewGesture, panScroll)}>
                            <Animated.ScrollView
                                {...rest}
                                scrollEnabled={enableScroll}
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
    }
);

export default BottomSheetScrollView;

const styles = StyleSheet.create({
    container: {
        ...StyleSheet.absoluteFillObject,
        borderTopLeftRadius: 16,
        borderTopRightRadius: 16
    },
    lineContainer: {
        marginVertical: 10,
        alignItems: 'center'
    },
    line: {
        width: 50,
        height: 4,
        backgroundColor: '#565E8B',
        borderRadius: 20
    }
});

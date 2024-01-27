import React, {
    useRef,
    forwardRef,
    PropsWithChildren,
    useCallback,
    useImperativeHandle,
    useMemo,
    useState,
  } from 'react';
  import { Dimensions, StyleSheet, View } from 'react-native';
  import {
    GestureHandlerRootView,
    NativeViewGestureHandler,
    PanGestureHandler,
    PanGestureHandlerGestureEvent,
    TapGestureHandler,
  } from 'react-native-gesture-handler';
  import Animated, {
    runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring,
  } from 'react-native-reanimated';
  import { useSafeAreaInsets } from 'react-native-safe-area-context';
  
  const DAMPING_COEFFICIENT = 20;
  const { height: HEIGHT } = Dimensions.get('window');
  
  const useSheetPosition = () => {
    const { top } = useSafeAreaInsets();
  
    return useMemo(
      () => ({
        startSnap: HEIGHT / 2,
        hideSnap: HEIGHT / 1.5,
        maxSnap: top,
      }),
      [top],
    );
  };
  
  interface SheetProps extends PropsWithChildren<{}> {
    onOpened?: (state: boolean) => void;
  }
  
  export interface SheetRefProps {
    setCollapse: (state: boolean) => void;
  }
  
  
  const Sheet = forwardRef<PropsWithChildren<SheetRefProps>, SheetProps>(
    ({ children, onOpened }, ref) => {
      const { top } = useSafeAreaInsets();
      const { startSnap, maxSnap, hideSnap } = useSheetPosition();
  
      const [currentSnap, setCurrentSnap] = useState(startSnap);
      const scrollStartOffset = useSharedValue(0);
      const scrollOffset = useSharedValue(0);
      const opacity = useSharedValue(1);
      const translateY = useSharedValue(startSnap);
  
      const tapMainRef = useRef();
      const panHeaderRef = useRef();
      const nativeScrollRef = useRef();
      const panContainerRef = useRef();
  
      const transformTo = useCallback(
        (destination: number) => {
          'worklet';
  
          translateY.value = withSpring(destination, { mass: 0.5 });
        },
        [translateY],
      );
  
      const setCollapse = useCallback(
        (state: boolean) => {
          if (state) {
            transformTo(hideSnap);
            opacity.value = 0.8;
          } else {
            transformTo(startSnap);
            opacity.value = 1;
          }
        },
        [hideSnap, opacity, startSnap, transformTo],
      );
  
      useImperativeHandle(ref, () => ({ setCollapse }), [setCollapse]);
  
      const onHandlerEndOnJS = ({ open, snap }: { open: boolean; snap: number }) => {
        if (onOpened) onOpened(open);
        setCurrentSnap(snap);
      };
  
      const gestureHandler = useAnimatedGestureHandler<
        PanGestureHandlerGestureEvent,
        { startY: number }
      >({
        onStart: (_, ctx) => {
          ctx.startY = translateY.value;
        },
        onActive: (event, ctx) => {
          if (
            ((translateY.value > top - DAMPING_COEFFICIENT && translateY.value <= startSnap) ||
            (translateY.value > startSnap && translateY.value < startSnap + DAMPING_COEFFICIENT)) &&
            scrollOffset.value === 0
          ) {
            translateY.value = event.translationY + ctx.startY - scrollStartOffset.value;
          }
        },
        onEnd: () => {
          if (translateY.value < HEIGHT / 3) {
            transformTo(maxSnap);
            runOnJS(onHandlerEndOnJS)({
              open: true,
              snap: maxSnap,
            });
          } else {
            transformTo(startSnap);
            runOnJS(onHandlerEndOnJS)({
              open: false,
              snap: startSnap,
            });
          }
        },
      });
  
      const sheetAnimatedStyle = useAnimatedStyle(() => {
        return {
          transform: [{ translateY: translateY.value }],
          opacity: opacity.value,
        };
      });
  
      return (
        <View
          style={{ flex: 1, position: 'absolute', top: 0, zIndex: 11, left: 0, right: 0 }}
          pointerEvents="box-none"
        >
          <GestureHandlerRootView style={{ flex: 1 }}>
            <TapGestureHandler
              ref={tapMainRef}
              maxDurationMs={100000}
              maxDeltaY={currentSnap - maxSnap}
            >
              <Animated.View style={[styles.container, sheetAnimatedStyle]}>
                <PanGestureHandler
                  ref={panHeaderRef}
                  simultaneousHandlers={[nativeScrollRef, tapMainRef]}
                  shouldCancelWhenOutside={false}
                  enableTrackpadTwoFingerGesture
                  onGestureEvent={gestureHandler}
                >
                  <Animated.View style={styles.handle} />
                </PanGestureHandler>
                <PanGestureHandler
                  ref={panContainerRef}
                  simultaneousHandlers={[nativeScrollRef, tapMainRef]}
                  shouldCancelWhenOutside={false}
                  onGestureEvent={gestureHandler}
                  enableTrackpadTwoFingerGesture
                >
                  <Animated.View style={styles.innerContainer}>
                    <NativeViewGestureHandler
                      ref={nativeScrollRef}
                      waitFor={tapMainRef}
                      simultaneousHandlers={panContainerRef}
                    >
                      <Animated.ScrollView
                        style={styles.scrollContainer}
                        bounces={false}
                        scrollEventThrottle={1}
                        onScrollBeginDrag={e => {
                          scrollStartOffset.value = e.nativeEvent.contentOffset.y;
                        }}
                        onScroll={e => {
                          scrollOffset.value = e.nativeEvent.contentOffset.y;
                        }}
                      >
                        {children}
                      </Animated.ScrollView>
                    </NativeViewGestureHandler>
                  </Animated.View>
                </PanGestureHandler>
              </Animated.View>
            </TapGestureHandler>
          </GestureHandlerRootView>
        </View>
      );
    },
  );
  
  const styles = StyleSheet.create({
        container: {
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: HEIGHT,
          paddingBottom: 48,
          backgroundColor: '#fff',
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
        handle: {
           height: 30,
           background: '#f0f0f0',
        },
        innerContainer: {
          flex: 1,
        },
        scrollContainer: {
          flex: 1,
          maxHeight: '100%',
        },
  });
  
  export default Sheet;
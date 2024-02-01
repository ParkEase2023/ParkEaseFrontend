import { StyleSheet, View, Pressable } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Heart } from 'phosphor-react-native';
import Animated, {
    Extrapolate,
    interpolate,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from 'react-native-reanimated';
import { addMyList } from '../services/mylist';

interface Iheart {
    heartIcon: Boolean;
    userId: string;
    parkingId: string;
    onSelected: (value: boolean) => void;
}

const ButtonHeart = (props: Iheart) => {
    const liked = useSharedValue(0);
    const [ticker, setTicker] = useState(false);

    // useEffect(() => {
    //     if (props.heartIcon === true) {
    //         setTicker(t)
    //     } else {
    //         liked.value = withSpring(0);
    //     dsada}
    // }, [props.heartIcon])
    
    const outlineStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    scale: interpolate(liked.value, [0, 1], [1, 0], Extrapolate.CLAMP)
                }
            ]
        };
    });

    const fillStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: liked.value }],
            opacity: liked.value
        };
    });

    const actionMyList = async () => {
        if (props.heartIcon === false) {
            addMyList({
                userId: props.userId,
                parkingId: props.parkingId
            });
            props.onSelected(true);
        }
        // if(props.heartIcon===true){
        //   deleteMyList(props.myListID);
        //   props.onSelected(false);
        // }
    };

    const HeartBotton = (): JSX.Element | null => {
        if (props.heartIcon === true) {
            return (
                <Pressable
                    style={styles.btnHeartonClick}
                    onPress={() => {
                        actionMyList();
                    }}>
                    <View style={styles.containerHeart}>
                        <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
                            <Heart size={20} weight="fill" color={'#FF5F5F'} />
                        </Animated.View>
                    </View>

                    <Animated.View style={fillStyle}>
                        <Heart size={20} weight="fill" color={'#EEF0FF'} />
                    </Animated.View>
                </Pressable>
            );
        } else {
            return (
                <Pressable
                    style={styles.btnHeart}
                    onPress={() => {
                        actionMyList();
                    }}>
                    <View style={styles.containerHeart}>
                        <Animated.View style={[StyleSheet.absoluteFillObject, outlineStyle]}>
                            <Heart size={20} weight="fill" color={'#EEF0FF'} />
                        </Animated.View>
                    </View>

                    <Animated.View style={fillStyle}>
                        <Heart size={20} weight="fill" color={'#FF5F5F'} />
                    </Animated.View>
                </Pressable>
            );
        }
    };

    return <HeartBotton></HeartBotton>;
};

export default ButtonHeart;

const styles = StyleSheet.create({
    btnHeart: {
        backgroundColor: '#7F85B2',
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnHeartonClick: {
        backgroundColor: '#EEF0FF',
        width: 35,
        height: 35,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerHeart: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingRight: 20
    }
});

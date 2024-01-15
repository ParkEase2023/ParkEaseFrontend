import React, { useState, useEffect, useMemo } from 'react';
import { View, StyleSheet, Text } from 'react-native';

interface Itimer {
    duration: number;
    setDuration: React.Dispatch<React.SetStateAction<number>>;
    onTimerOut: (value: boolean) => void;
}

const CountdownTimer = ({ onTimerOut, duration, setDuration }: Itimer) => {



    const formatTime = (seconds: number) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${remainingSeconds
            .toString()
            .padStart(2, '0')}`;
    };

    const timer = useMemo(() => formatTime(duration), [duration]);

    useEffect(() => {
        const coutdownInterval = setInterval(() => {
            if (duration > 0) {
                setDuration(prevTime => prevTime - 1);
            }
            if(duration <= 0)
            {
                onTimerOut(true)
            }
        }, 1000);
        return () => {
            clearInterval(coutdownInterval);
        };
    }, [duration]);

    

    return <Text>{timer}</Text>
};

export default CountdownTimer;

const styles = StyleSheet.create({});

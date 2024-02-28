import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { CaretLeft } from 'phosphor-react-native';
import ContentNotificationAddCoins from '../components/ContentNotificationAddCoins';
import ContentNotificationWithdraw from '../components/ContentNotificationWithdraw';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import ContentNotificationOutgoing from '../components/ContentNotificationOutgoing';
import ContentNotificationIncoming from '../components/ContentNotificationIncoming';
import { getNotification } from '../services/notification';

interface myNotification {
    userId: string;
}

const Notification = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const { params } = useRoute<RouteProp<ProfileParamList, 'Notification'>>();
    const [myNotification, setMyNotification] = useState<myNotification[]>([]);
    const [checkData, setCheckData] = useState('');

    const getDataNotification = async () => {
        const list: any = await getNotification(params.userId);
        await setMyNotification(list.myNotification);
        await setCheckData(list.message);
    };

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            getDataNotification();
        });
        return unsubscribe;
    }, [navigation]);

    const RenderMyNotification = (): JSX.Element | null => {
        if (checkData === 'success' && myNotification[0] !== undefined) {
            return (
                <>
                    {myNotification.map((item: any, index) => {
                        if (item.Booking === false && item.Topic === 'Add coins') {
                            return (
                                <ContentNotificationAddCoins
                                    key={index}
                                    coins={item.Coins}
                                    date={item.updatedAt}
                                />
                            );
                        } else if (item.Booking === false && item.Topic === 'Withdraw Money') {
                            return (
                                <ContentNotificationWithdraw
                                    key={index}
                                    coins={item.Coins}
                                    date={item.updatedAt}
                                    to={item.From}
                                />
                            );
                        }
                    })}
                </>
            );
        } else {
            return null;
        }
    };

    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={28} weight="bold" color="#10152F" />
                </TouchableOpacity>
                <Text style={styles.topic}>Notification</Text>
            </View>
            <View style={styles.line} />
            <ScrollView style={styles.container}>
                <RenderMyNotification></RenderMyNotification>
            </ScrollView>
        </View>
    );
};

export default Notification;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#DFE2F8'
    },
    rowTopic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16
    },
    topic: {
        marginLeft: 16,
        fontSize: 24,
        fontFamily: 'RedHatText-Bold',
        color: '#10152F'
    },
    line: {
        borderBottomColor: '#CED2EA',
        borderBottomWidth: 1
    },
    container: {
        paddingTop: 20,
        paddingHorizontal: 16
    },
    textDate: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    }
});

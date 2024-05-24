import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import { CaretLeft, CoinVertical, Check } from 'phosphor-react-native';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { ProfileParamList } from '../stack/ProfileStack';
import { getProfile } from '../services/user';

export interface IProfile {
    email: string;
    coins: number;
    roles: string[];
}

const ApplyForMembership = () => {
    const navigation = useNavigation<NativeStackNavigationProp<ProfileParamList>>();
    const [profile, setProfile] = React.useState<IProfile>({
        email: '',
        coins: 0,
        roles: []
    });
    const getUserProfile = async () => {
        const { data } = await getProfile();
        setProfile(data);
    };
    useEffect(() => {
        getUserProfile();
    }, []);

    return (
        <View style={styles.bg}>
            <View style={styles.rowTopic}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <CaretLeft size={22} weight="bold" color="#EEF0FF" />
                </TouchableOpacity>
                <Text style={styles.topic}>Apply For Membership</Text>
            </View>
            <View style={styles.line} />
            <ScrollView style={styles.container}>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={[
                        '#FEFA94',
                        'hsl(144.33962264150944, 98.14814814814815%, 78.82352941176471%)',
                        '#95EDFF'
                    ]}
                    style={styles.borderLinearGradient}>
                    <View style={styles.member}>
                        <View style={styles.rowPrice}>
                            <CoinVertical size={36} weight="fill" color="#FEFA94" />
                            <Text style={styles.textPrice}>49</Text>
                            <Text style={styles.textMonth}>/mo</Text>
                        </View>
                        <Text style={styles.title}>Member</Text>

                        <View style={styles.rowCondition}>
                            <Check size={20} weight="bold" color="#94FEBF" />
                            <Text style={styles.textCondition}>Can reservations</Text>
                        </View>
                        <View style={styles.rowCondition}>
                            <Check size={20} weight="bold" color="#94FEBF" />
                            <Text style={styles.textCondition}>Can do transactions</Text>
                        </View>
                        <View style={styles.rowCondition}>
                            <Check size={20} weight="bold" color="#94FEBF" />
                            <Text style={styles.textCondition}>
                                Can add parking locations for information
                            </Text>
                        </View>

                        <TouchableOpacity
                            onPress={() =>
                                navigation.navigate('Member', {
                                    coins: profile.coins,
                                    email: profile.email,
                                    roles: profile.roles
                                })
                            }>
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={['#FEFA94', '#94FEBF', '#95EDFF']}
                                style={styles.btnLinearGradient}>
                                <Text style={styles.textStart}>GET STARTED NOW</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
                <LinearGradient
                    start={{ x: 0, y: 0.5 }}
                    end={{ x: 1, y: 0.5 }}
                    colors={[
                        '#FEFA94',
                        'hsl(144.33962264150944, 98.14814814814815%, 78.82352941176471%)',
                        '#95EDFF'
                    ]}
                    style={styles.borderLinearGradient}>
                    <View style={styles.partner}>
                        <View style={styles.rowPrice}>
                            <CoinVertical weight="fill" color="#FEFA94" />
                            <Text style={styles.textPrice}>99</Text>
                            <Text style={styles.textMonth}>/mo</Text>
                        </View>
                        <Text style={styles.title}>Partner</Text>

                        <View style={styles.rowCondition}>
                            <Check weight="bold" color="#94FEBF" />
                            <Text style={styles.textCondition}>
                                Partner have the same rights as members.
                            </Text>
                        </View>
                        <View style={styles.rowCondition}>
                            <Check weight="bold" color="#94FEBF" />
                            <Text style={styles.textCondition}>
                                Can add parking locations for booking
                            </Text>
                        </View>

                        <TouchableOpacity onPress={() => navigation.navigate('Partner',{
                                    coins: profile.coins,
                                    email: profile.email,
                                    roles: profile.roles
                                })}>
                            <LinearGradient
                                start={{ x: 0, y: 0.5 }}
                                end={{ x: 1, y: 0.5 }}
                                colors={['#FEFA94', '#94FEBF', '#95EDFF']}
                                style={styles.btnLinearGradient}>
                                <Text style={styles.textStart}>GET STARTED NOW</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </View>
                </LinearGradient>
            </ScrollView>
        </View>
    );
};

export default ApplyForMembership;

const styles = StyleSheet.create({
    bg: {
        flex: 1,
        backgroundColor: '#10152F'
    },
    container: {
        padding: 25
    },
    rowTopic: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 12,
        marginHorizontal: 16
    },
    topic: {
        flex: 1,
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#EEF0FF'
    },
    line: {
        borderBottomColor: '#262D57',
        borderBottomWidth: 1
    },
    borderLinearGradient: {
        borderRadius: 16,
        padding: 3,
        marginBottom: 25
    },
    member: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        padding: 16
    },
    partner: {
        backgroundColor: '#10152F',
        borderRadius: 16,
        padding: 16
    },
    rowPrice: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    textPrice: {
        fontFamily: 'RedHatText-Bold',
        fontSize: 64,
        color: '#EEF0FF',
        marginLeft: 8
    },
    textMonth: {
        fontFamily: 'RedHatText-Medium',
        fontSize: 20,
        color: '#CED2EA'
    },
    title: {
        fontFamily: 'RedHatText-Medium',
        fontSize: 24,
        color: '#DFE2F8',
        marginTop: 16,
        marginBottom: 8
    },
    rowCondition: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10
    },
    textCondition: {
        fontFamily: 'RedHatText-Regular',
        fontSize: 16,
        color: '#DFE2F8',
        marginLeft: 12,
        flex: 1
    },
    btnLinearGradient: {
        borderRadius: 12,
        paddingVertical: 12,
        marginTop: 20
    },
    textStart: {
        textAlign: 'center',
        fontFamily: 'RedHatText-Bold',
        fontSize: 16,
        color: '#10152F'
    }
});

import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, Bookmark, Heart, MapTrifold, Plus, User } from 'phosphor-react-native';
import HomeStack, { HomeParamList } from '../stack/HomeStack';
import MyList from '../screens/MyList';
import AddParking from '../screens/AddParking';
import Profile from '../screens/Profile';
import LinearGradient from 'react-native-linear-gradient';
import { SvgUri } from 'react-native-svg';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgetPassword from '../screens/ForgetPassword';
import CreateNewPassword from '../screens/CreateNewPassword';
import SelectForVerify from '../screens/SelectForVerify';
import VerifyYourIdentify from '../screens/VerifyYourIdentity';
import { NavigatorScreenParams, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import ProfileStack, { ProfileParamList } from './ProfileStack';
import Reqlogin from '../screens/Reqlogin';
import RateReview from '../screens/RateReview';
import Withdraw from '../screens/WithdrawMoney';
import CheckInformation from '../screens/CheckInformation';
import PaymentBill from '../components/PaymentBill';
import WithdrawalReceipt from '../screens/WithdrawalReceipt';
import WithdrawMoney from '../screens/WithdrawMoney';
import MyBooking from '../screens/MyBooking';
export type MenuParamList = {
    HomeStack: NavigatorScreenParams<HomeParamList>;
    MyList: undefined;
    AddParkingStack: undefined;
    BookingStack: undefined;
    ProfileStack: NavigatorScreenParams<ProfileParamList>;
};

const MenuStack = () => {
    const Stack = createBottomTabNavigator<MenuParamList>();
    return (
        <>
            <StatusBar barStyle="light-content" />
            <Stack.Navigator
                initialRouteName="HomeStack"
                screenOptions={{
                    headerShown: false,
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    // tabBarActiveTintColor: '#FFA897',
                    // tabBarInactiveTintColor: '#BABCCA',
                    tabBarStyle: {
                        backgroundColor: '#10152F',
                        height: 55
                    }
                }}>
                <Stack.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={({ route }) => ({
                        tabBarStyle: (() => {
                            const routeName = getFocusedRouteNameFromRoute(route);

                            if (routeName === 'Review') {
                                return { display: 'none' , tabBarHideOnKeyboard: false };
                            }

                            return { backgroundColor: '#10152F', height: 55 };
                        })(),
                        tabBarIcon: ({ focused, color, size }) => (
                            <User color={focused ? '#FEFA94' : '#BABCCA'} size={27} weight="fill" />
                        )
                    })}
                />
                <Stack.Screen
                    name="MyList"
                    component={MyList}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Heart
                                color={focused ? '#FEFA94' : '#BABCCA'}
                                size={27}
                                weight="fill"
                            />
                        )
                    }}
                />
                <Stack.Screen
                    name="AddParkingStack"
                    component={ AddParking }
                    // onPress={() =>
                    //   navigation.navigate('AddToiletStack', {screen: 'AddToilet'})
                    // }
                    options={{
                        tabBarStyle: { display: 'none' },
                        tabBarHideOnKeyboard: true,
                        tabBarIcon: ({ focused, color, size }) => (
                            <Plus color={focused ? '#FEFA94' : '#BABCCA'} size={27} weight="fill" />
                        )
                    }}
                />
                <Stack.Screen
                    name="BookingStack"
                    component={ MyBooking }
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Bookmark  color={focused ? '#FEFA94' : '#BABCCA'} size={27} weight="fill" />
                        )
                    }}
                />
                <Stack.Screen
                    name="ProfileStack"
                    component={ ProfileStack }
                    options={({ route }) => ({
                        tabBarStyle: (() => {
                            const routeName = getFocusedRouteNameFromRoute(route);

                            if (routeName === 'EditProfile' || routeName === 'AddCoin' || routeName === 'Notification') {
                                return { display: 'none' , tabBarHideOnKeyboard: false };
                            }

                            return { backgroundColor: '#10152F', height: 55 };
                        })(),
                        tabBarIcon: ({ focused, color, size }) => (
                            <User color={focused ? '#FEFA94' : '#BABCCA'} size={27} weight="fill" />
                        )
                    })}
                />
            </Stack.Navigator>
        </>
    );
};


export default MenuStack;

const styles = StyleSheet.create({});

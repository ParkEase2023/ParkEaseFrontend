import { StatusBar, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Bell, Bookmark, Heart, MapTrifold, Plus, User } from 'phosphor-react-native';
import HomeStack from '../screens/Home';
import MyList from '../screens/MyList';
import AddParking from '../screens/AddParking';
import Notification from '../screens/Notification';
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

export type MenuParamList = {
    HomeStack: undefined;
    MyList: undefined;
    AddParkingStack: undefined;
    NotificationStack: undefined;
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
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <MapTrifold
                                color={focused ? '#FEFA94' : '#BABCCA'}
                                size={27}
                                weight="fill"
                            />
                        )
                    }}
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
                    component={AddParking}
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
                    name="NotificationStack"
                    component={RateReview}
                    options={{
                        tabBarIcon: ({ focused, color, size }) => (
                            <Bookmark  color={focused ? '#FEFA94' : '#BABCCA'} size={27} weight="fill" />
                        )
                    }}
                />
                <Stack.Screen
                    name="ProfileStack"
                    component={ProfileStack}
                    options={({ route }) => ({
                        tabBarStyle: (() => {
                            const routeName = getFocusedRouteNameFromRoute(route);

                            if (routeName === 'EditProfile' || routeName === 'AddCoin') {
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

// const getTabBarVisibility = (route: any) => {
//     const routeName = route.state ? route.state.routes[route.state.index].name : '';

//     if (routeName === 'EditProfile') {
//         return false;
//     }

//     return true;
// };

export default MenuStack;

const styles = StyleSheet.create({});

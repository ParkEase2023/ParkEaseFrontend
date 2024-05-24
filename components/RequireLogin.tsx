import {View, Text, TouchableHighlight} from 'react-native';
import React, {useContext, useEffect} from 'react';
import AuthContext from '../context/AuthContext';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackList} from '../stack/RootStack';
import Reqlogin from '../screens/Reqlogin';

interface IProps {
  children: JSX.Element;
}

const RequireLogin = (props: IProps) => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackList>>();

  const {isLoggedIn} = useContext(AuthContext);

  useEffect(() => {}, [isLoggedIn]);

  if (isLoggedIn === false) {
    return (
      <View style={{flex: 1}}>
        <Reqlogin></Reqlogin>
      </View>
    );
  }

  return props.children;
};

export default RequireLogin;

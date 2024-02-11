// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { Pressable } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { AuthTabParamList } from '../stack/AuthStack';
// import { ArrowLeft, Circle } from 'phosphor-react-native';
// import TabEditProfilePicture from '../components/TabEditProfilePicture';
// import PopupVerify from '../components/PopupVerify';
// import PopupFilter from '../components/PopupFiler';

// const Notification = () => {
//     const navigation = useNavigation<NativeStackNavigationProp<AuthTabParamList>>();
//     const [show, setShow] = useState(false);
//     const [ticker, setTicker] = useState(false);

//     const handleOpen = () => {
//         setTicker(true);
//         setShow(!show);
//     };
//     return (
//         // <View style={{flex:1}}>
//         //     <View style={styles.container}>
//         //         <Text>Noti</Text>
//         //     </View>
//         // </View>

//         <View>
//             <TouchableOpacity onPress={handleOpen}>
//                 <View>
//                     <Text>
//                         button
//                     </Text>
//                 </View>
//             </TouchableOpacity>
//             {/* <PopupFilter setVisible={show} ticker={ticker}></PopupFilter> */}
//         </View>

//     );
// };

// export default Notification;

// const styles = StyleSheet.create({
//     container: {
//         width: '100%',
//         height: 120,
//         backgroundColor: '#EEF0FF',
//         position:'absolute',
//         bottom: 0
//     }
// });

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const Notification = () => {
    const [key, setKey] = React.useState(0);
    const reload = React.useCallback(() => setKey(prevKey => prevKey + 1), []);
    return <Child reload={reload} key={key} />;
};

const Child = ({ reload }: any) => {
    // const getRandomId = () => parseInt(Math.random() * 100, 10);
    // We use useRef to showcase that the view is fully re-rendered. Use ref is initialized once per lifecycle of the React component
    // const id = React.useRef(getRandomId());
    return (
        <View>
            {/* <Text>My random id is {id.current.toString()}</Text> */}
            <TouchableOpacity onPress={reload}>
                <View>
                    <Text>button</Text>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default Notification;

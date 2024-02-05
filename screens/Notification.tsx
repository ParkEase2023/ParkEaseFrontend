// import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import React, { useState } from 'react';
// import { useNavigation } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { Pressable } from 'react-native';
// import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
// import { AuthTabParamList } from '../stack/AuthStack';
// import { ArrowLeft, Circle } from 'phosphor-react-native';
// import TabEditProfilePicture from '../components/TabEditProfilePicture';
// import Popupverify from '../components/Popupverify';
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

import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import ImageView from 'react-native-image-viewing';
import RNFS from 'react-native-fs';
import axios from 'axios';

interface ImageDisplayProps {}

const ImageDisplay: React.FC<ImageDisplayProps> = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [imageUri, setImageUri] = useState<string>("");

  const imageUrl = 'https://api.omise.co/charges/chrg_test_5yo48yeud2kbp3ze500/documents/docu_test_5yo48ygmypagffsatjo/downloads/5A1FB23047E8EE1E';
  const outputFilePath = `${RNFS.DocumentDirectoryPath}/downloaded_image.jpg`;

  const downloadImage = async () => {
    try {
      const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
      const base64Data = `data:${response.headers['content-type']};base64,${Buffer.from(response.data, 'binary').toString('base64')}`;
      setImageUri(base64Data);
    } catch (error:any) {
      console.error('Error downloading image:', error.message);
    }
  };

  useEffect(() => {
    downloadImage();
  }, []);

  const openImage = () => {
    setIsVisible(true);
  };

  const closeImage = () => {
    setIsVisible(false);
  };

  return (
    <View>
      <Text>React Native Image Display</Text>
      <Button title="Open Image" onPress={openImage} />

      <ImageView
        images={[{ uri: imageUri }]}
        imageIndex={0}
        visible={isVisible}
        onRequestClose={closeImage}
      />
    </View>
  );
};

export default ImageDisplay;


import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import PopupFilter from '../components/PopupFilter';
import StraightLine from '../components/StraightLine';
import Option from '../components/Option'
import { RadioButton } from 'react-native-paper';
const Popup = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };
  const [checked, setChecked] = React.useState('first');
  return (
    <View>
      <Button title="Open Popup" onPress={togglePopup} />
      <PopupFilter isVisible={isPopupVisible} onClose={togglePopup} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // Add other styles as needed
  },
})

export default Popup;
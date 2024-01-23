import * as React from 'react';
import { View, Text, StyleSheet} from 'react-native';
import { RadioButton } from 'react-native-paper';

const Option = () => {
  const [checked, setChecked] = React.useState('first');

  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' } }>
      <Text style={styles.container}>Parking Open        </Text>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Text style={styles.container}>Available Booking</Text>
        <RadioButton
          value="second"
          status={checked === 'second' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('second')}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 20,
    textAlign: 'center',
    fontFamily: 'RedHatText',
    fontSize: 14,
    color: '#10152F',
    paddingBottom: 15
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  optionText: {
    marginLeft: 8,
    fontSize: 16,
  }
});

export default Option;
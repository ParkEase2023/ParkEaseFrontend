import React, { useState } from 'react';
import { Modal, View, Text, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const TimePickerModal = ({ visible, onClose }: { visible: boolean, onClose: (time: string) => void }) => {
  const [selectedHour, setSelectedHour] = useState(0);
  const [selectedMinute, setSelectedMinute] = useState(0);

  const hours = Array.from(Array(24).keys());
  const minutes = Array.from(Array(60).keys());

  const handleConfirm = () => {
    const selectedTime = `${selectedHour}:${selectedMinute}`;
    onClose(selectedTime);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Select Time</Text>
        <View style={{ flexDirection: 'row' }}>
          <Picker
            selectedValue={selectedHour}
            onValueChange={(itemValue) => setSelectedHour(itemValue)}>
            {hours.map((hour) => (
              <Picker.Item key={hour} label={`${hour}`} value={hour} />
            ))}
          </Picker>
          <Picker
            selectedValue={selectedMinute}
            onValueChange={(itemValue) => setSelectedMinute(itemValue)}>
            {minutes.map((minute) => (
              <Picker.Item key={minute} label={`${minute}`} value={minute} />
            ))}
          </Picker>
        </View>
        <Button title="Confirm" onPress={handleConfirm} />
      </View>
    </Modal>
  );
};

export default TimePickerModal;

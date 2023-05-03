import React, {useState} from 'react';
import { Text, View, Button, Modal, TouchableOpacity, TextInput,  StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

interface Event {
  title: string;
  month: number;
  day: number;
  location: string;
  startTime: Date;
  endTime: Date;
}

function Calendar () {
  const [modalVisible, setModalVisible] = useState(false);
  const [event, setEvent] = useState<Event | null>(null);
  const [title, setTitle] = useState('');
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [location, setLocation] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [showTimePickerStart, setShowTimePickerStart] = useState(false);
  const [showTimePickerEnd, setShowTimePickerEnd] = useState(false);

  const handleCreateUser = () => {
    const newEvent: Event = {
      title,
      month: Number(month),
      day: Number(day),
      location,
      startTime,
      endTime,
    };
    setEvent(newEvent);
    setModalVisible(false);
  };

  const handleStartTimePicker = (event: any, selectedTime: any) => {
    setShowTimePickerStart(false);
    if (selectedTime) {
      setStartTime(selectedTime);
    }
  };

  const handleEndTimePicker = (event: any, selectedTime: any) => {
    setShowTimePickerEnd(false);
    if (selectedTime) {
      setEndTime(selectedTime);
    }
  };

  const showPickerStart = () => {
    setShowTimePickerStart(true);
  };

  const showPickerEnd = () => {
    setShowTimePickerEnd(true);
  };

    return (
      <View style={styles.container}>
      <Button title="Create Event" onPress={() => setModalVisible(true)} />
      {event && (
        <View>
          <Text>Title: {event.title}</Text>
          <Text>Month: {event.month}</Text>
          <Text>Day: {event.day}</Text>
          <Text>Location: {event.location}</Text>
        </View>
      )}
      <Modal animationType="slide" visible={modalVisible}>
        <View style={styles.modal}>
          <Text style={styles.modalTitle}>Enter User Data:</Text>
          <TextInput
            style={styles.input}
            placeholder="Title"
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Month"
            keyboardType="numeric"
            onChangeText={setMonth}
          />
          <TextInput
            style={styles.input}
            placeholder="Day"
            keyboardType="numeric"
            onChangeText={setDay}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            onChangeText={setLocation}
          />
          <TouchableOpacity onPress={showPickerStart} style={styles.input}>
            <Text>
              {Platform.OS === 'ios'
                ? startTime.toLocaleTimeString()
                : startTime.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showTimePickerStart && (
            <DateTimePicker
              value={startTime}
              mode="time"
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleStartTimePicker}
            />
          )}
          <TouchableOpacity onPress={showPickerEnd} style={styles.input}>
            <Text>
              {Platform.OS === 'ios'
                ? endTime.toLocaleTimeString()
                : endTime.toLocaleDateString()}
            </Text>
          </TouchableOpacity>
          {showTimePickerEnd && (
            <DateTimePicker
              value={endTime}
              mode="time"
              is24Hour={true}
              minuteInterval={1}
              display={Platform.OS === 'ios' ? 'spinner' : 'default'}
              onChange={handleEndTimePicker}
            />
          )}
          <Button title="Create" onPress={handleCreateUser} />
          <Button title="Cancel" onPress={() => setModalVisible(false)} />
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#101010'
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  modalTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginVertical: 8,
    width: '80%'
  }
});

export default Calendar;
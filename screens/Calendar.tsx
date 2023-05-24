import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Event {
  id: string;
  title: string;
  location: string;
  date: string;
  startTime: Date;
  endTime: Date;
}

const EventScreen = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState('');
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [modalVisible, setModalVisible] = useState(false);
  const [showStartTimePicker, setShowStartTimePicker] = useState(true);
  const [showEndTimePicker, setShowEndTimePicker] = useState(true);

  const handleAddEvent = () => {
    const newEvent: Event = {
      id: Date.now().toString(),
      title,
      location,
      date,
      startTime,
      endTime,
    };

    setEvents(prevEvents => [...prevEvents, newEvent]);
    setTitle('');
    setLocation('');
    setDate('');
    setStartTime(new Date());
    setEndTime(new Date());
    setModalVisible(false);
  };

  const handleStartTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || startTime;
    setShowStartTimePicker(Platform.OS === 'ios');
    setStartTime(currentTime);
    setShowEndTimePicker(false);
  };

  const handleEndTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || endTime;
    setShowEndTimePicker(Platform.OS === 'ios');
    setEndTime(currentTime);
    setShowStartTimePicker(false);
  };

  const handleRemoveEvent = (eventId: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  return (

    <SafeAreaView style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Create Event</Text>

          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            placeholderTextColor="#101010"
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
            placeholderTextColor="#101010"
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
            placeholderTextColor="#101010"
          />
          <View style={styles.datePickerContainer}>
          <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>Start Time:</Text>

              <DateTimePicker
                value={startTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleStartTimeChange}
              />

          </View>
          </View>

          <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>End Time:</Text>

              <DateTimePicker
                value={endTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleEndTimeChange}
              />
            
          </View>


          <TouchableOpacity
            style={styles.button}
            onPress={handleAddEvent}
          >
            <Text style={styles.buttonText}>Add Event</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Text style={styles.header}>All Events</Text>
      <FlatList
        data={events}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <View style={styles.eventContainer}>
            <View style={styles.eventHeader}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <TouchableOpacity
                style={styles.removeButton}
                onPress={() => handleRemoveEvent(item.id)}
              >
                <Text style={styles.removeButtonText}>-</Text>
              </TouchableOpacity>
            </View>
            <Text style={styles.eventText}>{item.location}</Text>
            <Text style={styles.eventText}>{item.date}</Text>
            <Text style={styles.eventText}>
              {item.startTime.toLocaleTimeString()} - {item.endTime.toLocaleTimeString()}
            </Text>
          </View>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Create Event</Text>
      </TouchableOpacity>
    </SafeAreaView>

  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#101010',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#101010',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    justifyContent: 'center',
    color: '#ffffff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    width: '100%',
    backgroundColor: '#ffffff',
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: '#ffffff',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#950000',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ffffff',
  },
  eventText: {
    color: '#ffffff',
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePickerLabel: {
    flex: 1,
    marginRight: 10,
    color: '#ffffff',
  },
  button: {
    backgroundColor: '#950000',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    alignSelf: 'center',
    marginBottom: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  removeButton: {
    backgroundColor: 'red',
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  removeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default EventScreen;

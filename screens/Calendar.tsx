import React, { useState } from 'react';
import { View, Text, Button, TextInput, StyleSheet, FlatList, Modal, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

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
  const [showStartTimePicker, setShowStartTimePicker] = useState(false);
  const [showEndTimePicker, setShowEndTimePicker] = useState(false);

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
  };

  const handleEndTimeChange = (event: any, selectedTime: any) => {
    const currentTime = selectedTime || endTime;
    setShowEndTimePicker(Platform.OS === 'ios');
    setEndTime(currentTime);
  };

  const handleRemoveEvent = (eventId: string) => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  return (
    <View style={styles.container}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={styles.header}>Create Event</Text>

          <TextInput
            style={styles.input}
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
          />
          <TextInput
            style={styles.input}
            placeholder="Location"
            value={location}
            onChangeText={setLocation}
          />
          <TextInput
            style={styles.input}
            placeholder="Date"
            value={date}
            onChangeText={setDate}
          />
           <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>Start Time:</Text>
            <Button
              title={startTime.toLocaleTimeString()}
              onPress={() => setShowStartTimePicker(true)}
            />
            {showStartTimePicker && (
              <DateTimePicker
                value={startTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleStartTimeChange}
              />
            )}
          </View>

          <View style={styles.datePickerContainer}>
            <Text style={styles.datePickerLabel}>End Time:</Text>
            <Button
              title={endTime.toLocaleTimeString()}
              onPress={() => setShowEndTimePicker(true)}
            />
            {showEndTimePicker && (
              <DateTimePicker
                value={endTime}
                mode="time"
                is24Hour={true}
                display="default"
                onChange={handleEndTimeChange}
                />
              )}
            </View>
  
            <Button title="Add Event" onPress={handleAddEvent} />
            <Button title="Cancel" onPress={() => setModalVisible(false)} />
          </View>
        </Modal>
  
        <Button title="Create Event" onPress={() => setModalVisible(true)} />
  
        <Text style={styles.header}>All Events</Text>
  
        <FlatList
          data={events}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.eventContainer}>
              <View style={styles.eventHeader}>
              <Text style={styles.eventTitle}>{item.title}</Text>
              <Button
                title="-"
                onPress={() => handleRemoveEvent(item.id)}
                color="red"
              />
            </View>
              <Text>{item.location}</Text>
              <Text>{item.date}</Text>
              <Text>{item.startTime.toLocaleTimeString()} - {item.endTime.toLocaleTimeString()}</Text>
            </View>
          )}
        />
      </View>
    );
  };
  
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ccc',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
    width: "100%",
  },
  eventContainer: {
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    padding: 8,
    marginBottom: 10,
  },
  eventHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
    backgroundColor: '#888888',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
  },
  eventTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  datePickerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  datePickerLabel: {
    flex: 1,
    marginRight: 10,
  },
});

export default EventScreen;


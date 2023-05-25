import React, { useState } from 'react';
import { FlatList, View, SafeAreaView, Text, StyleSheet, TouchableOpacity, Modal } from 'react-native';

type Item = {
  letter: string;
  data: string[];
};

type BarProps = {
  letter: string;
};

const DATA: Item[] = [
  { letter: 'A', data: ['Alice', 'Alex', 'Amy'] },
  { letter: 'B', data: ['Bob', 'Bill'] },
  { letter: 'C', data: ['Carol', 'Chris', 'Cathy'] },
  { letter: 'D', data: ['David', 'Daniel', 'Daisy', 'Drew'] },
  { letter: 'E', data: ['Emily', 'Eva', 'Ethan', 'Elliot'] },
  { letter: 'F', data: ['Frank', 'Fiona', 'Faith', 'Freya'] },
  { letter: 'G', data: ['George', 'Grace', 'Gina', 'Gary'] },
  // Add more letters and names as needed
];
const MAJORS = [
  { letter: 'A', major: 'Aerospace Engineering' },
  { letter: 'B', major: 'Biomedical Engineering' },
  { letter: 'C', major: 'Computer Science' },
  { letter: 'D', major: 'Data Science' },
  { letter: 'E', major: 'Electrical Engineering' },
  { letter: 'F', major: 'Finance' },
  { letter: 'G', major: 'General Engineering' },
  // Add more majors as needed
];
const EMPLOYERS = [
  { letter: 'A', company: 'NASA, SpaceX' },
  { letter: 'B', company: 'Stryker Corporation' },
  { letter: 'C', company: 'Apple, Google, Amazon' },
  { letter: 'D', company: 'Goldman Sachs' },
  { letter: 'E', company: 'Intel' },
  { letter: 'F', company: 'JPMorgan Chase' },
  { letter: 'G', company: 'The General Firm' },
  // Add more majors as needed
];
const Bar = ({ letter }: BarProps) => {
  return (
    <View style={styles.bar}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  );
};

const Directory = () => {
  const [selectedName, setSelectedName] = useState('');
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [selectedPhoneNumber, setSelectedPhoneNumber] = useState('');

  const generatePhoneNumber = () => {
    const randomNumber = Math.floor(Math.random() * 9000000000) + 1000000000;
    return randomNumber.toString();
  };

  const NameBar = ({ name }: { name: string }) => {
    const handlePress = () => {
      setSelectedName(name);
      setSelectedPhoneNumber(generatePhoneNumber());
      setPopupVisible(true);
    };

    return (
      <TouchableOpacity style={styles.nameBar} onPress={handlePress}>
        <Text style={styles.name}>{name}</Text>
      </TouchableOpacity>
    );
  };

  const Popup = ({ name }: { name: string }) => {
    const selectedMajor = MAJORS.find((major) => major.letter === name[0]);
    const selectedCompany = EMPLOYERS.find((employer) => employer.letter === name[0])
    return (
      <SafeAreaView style={styles.popupContainer}>
        <Text style={styles.popupText}>Name: {name}</Text>
        <Text style={styles.popupText}>
          Phone Number: ({selectedPhoneNumber.substring(0, 3)}) {selectedPhoneNumber.substring(3, 6)}-{selectedPhoneNumber.substring(6)}
        </Text>
        <Text style={styles.popupText}>Major: {selectedMajor ? selectedMajor.major : 'N/A'}</Text>
        <Text style={styles.popupText}>Grad Date: {2026 - parseInt(selectedPhoneNumber[0],10)}</Text>
        <Text style={styles.popupText}>Employers:  {selectedCompany ? selectedCompany.company : 'N/A'}</Text>
      </SafeAreaView>
    );
  };

  const renderItem = ({ item }: { item: Item }) => (
    <>
      <Bar letter={item.letter} />
      {item.data.map(name => <NameBar key={name} name={name} />)}
    </>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.innerContainer}>
      <Text style={styles.title}>Directory</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.letter}_${index}`}
        showsVerticalScrollIndicator={false}
      />
      {isPopupVisible && <Popup name={selectedName} />}
      <Modal visible={isPopupVisible} animationType="slide" transparent>
        <View style={styles.modalContainer}>
          <Popup name={selectedName} />
          <TouchableOpacity style={styles.closeButton} onPress={() => setPopupVisible(false)}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#101010',
  },
  innerContainer: {
    padding: 20
  },
  bar: {
    height: 30,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#950000',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#FFFFFF'
  },
  nameBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#101010',
    borderBottomWidth: 1,
    borderBottomColor: '#555555',
    justifyContent: 'center',
    paddingLeft: 10,
  },
  name: {
    color: '#ffffff',
    fontSize: 16,
  },
  popupContainer: {
    flex: 1,
    width:"100%",
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#101010',
  },
  popupText: {
    fontSize: 20,
    color: '#FFFFFF',
    marginBottom: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  closeButton: {
    // position: 'absolute',
    // bottom: 50,
    // right: '42%',
    backgroundColor:'#950000',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    fontSize: 16,
    color: '#000000',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
});

export default Directory;


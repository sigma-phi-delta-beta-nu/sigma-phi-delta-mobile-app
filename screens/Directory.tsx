import React from 'react';
import { FlatList, View, Text, StyleSheet, TouchableOpacity } from 'react-native';

type Item = {
  letter: string;
  data: string[];
}

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

const Bar = ({ letter }: BarProps) => {
  return (
    <View style={styles.bar}>
      <Text style={styles.letter}>{letter}</Text>
    </View>
  );
};

const NameBar = ({ name }: { name: string }) => {
  const handlePress = () => {
    // Handle click event
    console.log(`Clicked on ${name}`);
  };

  return (
    <TouchableOpacity style={styles.nameBar} onPress={handlePress}>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};

const renderItem = ({ item }: { item: Item }) => (
  <>
    <Bar letter={item.letter} />
    {item.data.map(name => <NameBar key={name} name={name} />)}
  </>
);

const Directory = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.letter}_${index}`}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // add flex: 1 to make the container take up the entire screen height
    backgroundColor: '#000000',
  },
  bar: {
    height: 30,
    width: '100%',
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  letter: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  nameBar: {
    height: 50,
    width: '100%',
    backgroundColor: '#EFEFEF',
    borderBottomWidth: 1,
    borderBottomColor: '#CCCCCC',
    justifyContent: 'center',
    paddingLeft: 10,
    cursor: 'pointer',
  },
  name: {
    fontSize: 16,
  },
});

export default Directory;


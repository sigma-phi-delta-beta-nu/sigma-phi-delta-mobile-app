import * as React from 'react';
import { Text, View, Linking, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';

const form1 = 'https://forms.gle/g6hna7PL6YPG6SqFA'
const description1 = "Social Winter 2023 Feedback"
const deadline1 = "4/1/23"

const form2 = 'https://forms.gle/36kXxP1ka42bvE1z5'
const description2 = "Beach Cleanup Sign Up"
const deadline2 = "3/17/23"

const form3 = 'https://forms.gle/vLZsxWwZjeQa7Akw6'
const description3 = "Spring Formal RSVP"
const deadline3 = "ASAP"

const form4 = 'https://forms.gle/Fy3kUGKrVCgat71r6'
const description4 = "SPD Dye Tournament Signup"
const deadline4 = "5/5/23"

const form5 = 'https://forms.gle/FyQRiRsz6N3XpkYZ6'
const description5 = "Composite Expected Attendance Form"
const deadline5 = "5/6/23"

const form6 = 'https://forms.gle/xHXzr7ALKppNvexB7'
const description6 = "Cultural Book Club Interest Form"
const deadline6 = "End of Quarter"

const form7 = 'https://forms.gle/KkX5ZQzqBqbxkToM9'
const description7 = "Attendance for Brotherhood Paintball"
const deadline7 = "5/25/23"

function Forms() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Forms</Text>

      <MyButton url={form3} buttonText={description3} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline3}{"\n\n"}
      </Text>

      <MyButton url={form2} buttonText={description2} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline2}{"\n\n"}
      </Text>

      <MyButton url={form1} buttonText={description1} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline1}{"\n\n"}
      </Text>

      <MyButton url={form4} buttonText={description4} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline4}{"\n\n"}
      </Text>

      <MyButton url={form5} buttonText={description5} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline5}{"\n\n"}
      </Text>

      <MyButton url={form6} buttonText={description6} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline6}{"\n\n"}
      </Text>

      <MyButton url={form7} buttonText={description7} />
      <Text style={styles.deadlineCo}>
        Due Date: {deadline7}{"\n\n"}
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#950000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    padding: 8
  },
  linklets: {
    color: "red",
    textDecorationLine: "underline"
  },
  deadlineCo: {
    color: "white"
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: "white"
  },
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#101010'
  }
});

interface MyButtonProps {
  url: string;
  buttonText: string;
}

const MyButton: React.FC<MyButtonProps> = ({ url, buttonText }) => {
  const handleButtonPress = async () => {
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.log("Don't know how to open URI: " + url);
    }
  };

  return (
    <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
      <Text style={styles.buttonText}>{buttonText}</Text>
    </TouchableOpacity>
  );
};

export default Forms;

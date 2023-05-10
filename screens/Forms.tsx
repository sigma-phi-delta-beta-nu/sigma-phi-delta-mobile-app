import * as React from 'react';
import { Text, View, Linking, StyleSheet, TouchableOpacity } from 'react-native';

const form1 = 'https://forms.gle/g6hna7PL6YPG6SqFA'
const description1 = "Social Winter 2023 Feedback"
const deadline1 = "4/1/23"

const form2 = 'https://forms.gle/36kXxP1ka42bvE1z5'
const description2 = "Beach Cleanup Sign Up"
const deadline2 = "3/17"

const form3 = 'https://forms.gle/vLZsxWwZjeQa7Akw6'
const description3 = "Spring Formal RSVP"
const deadline3 = "ASAP"

function Forms () {
    return (
      <View style={styles.container}>
        
        <Text style={styles.title}>Profile</Text>

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

      </View>
    )

}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ff0000',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    // textAlign: 'center',
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
        flex: 1,
        // justifyContent: 'left', 
        // alignItems: 'left', 
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

export default Forms

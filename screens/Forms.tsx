import * as React from 'react';
import { Text, View, Linking, StyleSheet } from 'react-native';

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
      <View style={{ flex: 1,
                     justifyContent: 'center', 
                     alignItems: 'center' }}>
        
        <Text style={styles.linklets}
              onPress={() => Linking.openURL(form1)}>
          {description1}
        </Text>
        <Text>
          Due Date: {deadline1}{"\n\n"}
        </Text>

        <Text style={styles.linklets}
              onPress={() => Linking.openURL(form2)}>
          {description2}
        </Text>
        <Text>
          Due Date: {deadline2}{"\n\n"}
        </Text>

        <Text style={styles.linklets}
              onPress={() => Linking.openURL(form3)}>
          {description3}
        </Text>
        <Text>
          Due Date: {deadline3}{"\n\n"}
        </Text>

      </View>
    )

}

const styles = StyleSheet.create({
    linklets: {
      color: "red",
      textDecorationLine: "underline"
    }

})

export default Forms

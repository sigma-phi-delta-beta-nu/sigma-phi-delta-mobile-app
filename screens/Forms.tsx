import * as React from 'react';
import { Text, View, Linking } from 'react-native';

const form1 = 'https://forms.gle/g6hna7PL6YPG6SqFA'
const form2 = 'https://forms.gle/36kXxP1ka42bvE1z5'
const form3 = 'https://forms.gle/vLZsxWwZjeQa7Akw6'

function Forms () {
    return (
      <View style={{ flex: 1, gap: 20, textDecorationLine: 'underline', justifyContent: 'center', alignItems: 'center' }}>
        
        <Text style={{color: 'red'}}
              onPress={() => Linking.openURL(form1)}>
          Social Winter 2023 Feedback
        </Text>

        <Text style={{color: 'red'}}
              onPress={() => Linking.openURL(form2)}>
          Beach Cleanup Sign Up
        </Text>

        <Text style={{color: 'red'}}
              onPress={() => Linking.openURL(form3)}>
          Spring Formal RSVP
        </Text>

      </View>
    )


}
export default Forms

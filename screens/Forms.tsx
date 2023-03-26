import * as React from 'react';
import { Text, View, Linking } from 'react-native';

const form1 = 'https://forms.gle/g6hna7PL6YPG6SqFA'
const form2 = 'https://forms.gle/36kXxP1ka42bvE1z5'
const form3 = 'https://forms.gle/vLZsxWwZjeQa7Akw6'

function Forms () {
    return (
      <View style={{ flex: 1,
                     justifyContent: 'center', 
                     alignItems: 'center' }}>
        
        <Text style={{color: 'red', textDecorationLine: 'underline'}}
              onPress={() => Linking.openURL(form1)}>
          Social Winter 2023 Feedback
        </Text>
        <Text>
          Due Date: 4/1/23{"\n\n"}
        </Text>

        <Text style={{color: 'red', textDecorationLine: 'underline'}}
              onPress={() => Linking.openURL(form2)}>
          Beach Cleanup Sign Up
        </Text>
        <Text>
          Due Date: 3/17{"\n\n"}
        </Text>

        <Text style={{color: 'red', textDecorationLine: 'underline'}}
              onPress={() => Linking.openURL(form3)}>
          Spring Formal RSVP
        </Text>
        <Text>
          Due Date: ASAP{"\n\n"}
        </Text>

      </View>
    )


}
export default Forms

import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {View, Text, TextInput, TouchableOpacity, StyleSheet} from "react-native";

import Profile from "./screens/Profile";
import Calendar from "./screens/Calendar";
import SignIn from "./screens/SignIn"; 
import Main from "./screens/Main"; 

type SignInProps = NativeStackScreenProps<RootStackParamList, "SignIn">;

export type RootStackParamList = {
  SignIn: undefined;
  Main: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            navigationBarColor: '#101010'
          }}
        >
          <Stack.Screen name = 'SignIn' component={SignIn}/>
          <Stack.Screen name = 'Main' component={Main}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

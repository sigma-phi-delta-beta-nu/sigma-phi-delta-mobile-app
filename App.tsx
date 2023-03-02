import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import SignIn from "./screens/SignIn";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name = 'SignIn' component={SignIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;

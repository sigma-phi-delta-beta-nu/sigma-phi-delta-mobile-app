import { NavigationContainer, StackActions } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

import SignIn from "./screens/SignIn";

const Stack = createNativeStackNavigator();

const App = () => {
  return(
    //<SafeAreaView>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Pro Bono" component={SignIn}/>
        </Stack.Navigator>
      </NavigationContainer>
    //</SafeAreaView>
  );
}

export default App;

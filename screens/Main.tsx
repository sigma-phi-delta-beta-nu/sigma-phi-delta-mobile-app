// Main page that will have tab navigators to all other pages
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./Profile";
import Calendar from "./Calendar";


const Tab = createBottomTabNavigator();

function Main() {
  return (
      <Tab.Navigator >
        <Tab.Screen name="Calendar" component={Calendar} />
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
  );
}
export default Main;
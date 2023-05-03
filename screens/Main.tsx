// Main page that will have tab navigators to all other pages
import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./Profile";
import Calendar from "./Calendar";
import Directory from "./Directory";
import Forms from "./Forms";


const Tab = createBottomTabNavigator();

function Main() {
  return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor : '#202020'},
        tabBarActiveTintColor: '#CC0000',
        tabBarInactiveTintColor: '#999999',
        
      }}>
        <Tab.Screen name="Calendar" component={Calendar}/>
        <Tab.Screen name="Forms" component={Forms}/>
        <Tab.Screen name="Directory" component={Directory}/>
        <Tab.Screen name="Profile" component={Profile}/>
      </Tab.Navigator>
  );
}
export default Main;
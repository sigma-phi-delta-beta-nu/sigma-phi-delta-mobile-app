// Main page that will have tab navigators to all other pages
import * as React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./Profile";
import Calendar from "./Calendar";
import Directory from "./Directory";
import Forms from "./Forms";


const Tab = createBottomTabNavigator();

function Main() {
    var icon_width = 32;
    var icon_height = 32;
    return (
      <Tab.Navigator screenOptions={{
        headerShown: false,
        tabBarStyle: {backgroundColor : '#202020'},
        tabBarActiveTintColor: '#950000',
        tabBarInactiveTintColor: '#999999',
        
      }}>
        <Tab.Screen
            name="Calendar"
            component={Calendar}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/menu-icons/calendar.png')}
                        style={{
                            width: icon_width,
                            height: icon_height,
                            tintColor: focused ? '#950000' : '#999999'
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Forms"
            component={Forms}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/menu-icons/forms.png')}
                        style={{
                            width: icon_width,
                            height: icon_height,
                            tintColor: focused ? '#950000' : '#999999'
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Directory"
            component={Directory}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/menu-icons/directory.png')}
                        style={{
                            width: icon_width,
                            height: icon_height,
                            tintColor: focused ? '#950000' : '#999999'
                        }}
                    />
                ),
            }}
        />
        <Tab.Screen
            name="Profile"
            component={Profile}
            options={{
                tabBarIcon: ({ focused }) => (
                    <Image
                        source={require('../assets/menu-icons/profile.png')}
                        style={{
                            width: icon_width,
                            height: icon_height,
                            tintColor: focused ? '#950000' : '#999999'
                        }}
                    />
                ),
            }}
        />
      </Tab.Navigator>
  );
}


export default Main;

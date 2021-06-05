import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import Home from '../screens/Home';
import Profile from '../screens/Profile';

const Stack = createStackNavigator();
const HomeStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerLeft: () => (
            <EvilIcons
              onPress={() => navigation.toggleDrawer()}
              name="navicon"
              size={40}
              color="white"
            />
          ),
          headerRight: () => (
            <EvilIcons
              onPress={() => navigation.navigate('Profile')}
              name="user"
              size={50}
              color="white"
            />
          ),
          title: 'Home',
          headerStyle: {
            backgroundColor: '#F9C6D1',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Felix Titling',
            fontSize: 30,
          },
        }}
      />
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          headerRight: () => (
            <Feather
              onPress={() => navigation.goBack()}
              name="home"
              size={35}
              color="white"
              
            />
          ),
          title: 'Profile',
          headerStyle: {
            backgroundColor: '#F9C6D1',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Felix Titling',
            fontSize: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default HomeStack;

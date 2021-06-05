import React from 'react';
import { Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';

const Drawer = createDrawerNavigator();
const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerStyle={{
          backgroundColor: '#F9C6D1',
          width: 250,
        }}
        drawerContentOptions={{
          activeTintColor: '#0671b7',
          labelStyle: {
            fontFamily: 'Felix Titling',
            fontWeight: 'bold',
            fontSize: 20,
          },
          itemStyle: { marginVertical: 1 },
        }}>
        <Drawer.Screen
          name="Home"
          component={HomeStack}
          options={{
            title: 'Home',
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="home-outline" size={24} color="white" />
            ),
          }}
        />
        <Drawer.Screen
          name="About"
          component={AboutStack}
          options={{
            title: 'About',
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="information-circle-outline" size={24} color="white" />
            ),
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigator;

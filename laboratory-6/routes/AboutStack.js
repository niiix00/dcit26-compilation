import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Ionicons } from '@expo/vector-icons';

import About from '../screens/About';

const Stack = createStackNavigator();

const AboutStack = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: 'About',
          headerStyle: {
            backgroundColor: '#84B4C8',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontFamily: 'Felix Titling',
            fontColor: 'white',
            fontSize: 30,
          },
          headerRight: () => (
            <Ionicons
              onPress={() => navigation.goBack()}
              name="chevron-back-circle"
              size={40}
              color="white"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default AboutStack;

//BSCS 3-4
//Ecot, Katrina Jane
//Bito-on, Prince Carl
//Magat, Carlos

import React, {useState}from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Linking } from 'react-native';

import SampleModal from './components/SampleModal';

export default function App(){
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
  <View style={styles.container}>
  <Button title="Click me" color="#EE959E" onPress={() => setIsModalOpen(true)}/>
  <SampleModal visible={isModalOpen} onClose={() => setIsModalOpen(false)}/>
  </View> 
  );
}
const styles = StyleSheet.create({
   container: {
   flex: 1,
   backgroundColor: '#AEC6CF',
   alignItems: 'center',
   justifyContent: 'center'
   }
});

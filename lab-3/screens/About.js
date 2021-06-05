import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Image source={{uri:'https://media.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/giphy.gif'}} style={styles.jif}
        />
      <Text style={styles.content}>
      {'\n'} Rick Astley will: 
      {'\n'}
      {'\n'} Never give you up...
      {'\n'} Never let you down...
      {'\n'} Never run around...
      {'\n'} and desert you.
      </Text>
    </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  content: {
    fontFamily: 'Century Gothic',
    color: 'black',
    textAlign: 'justify',
    alignContent: 'center',
    marginHorizontal: '5%',
    fontSize: 20
  },
  jif: {
    width: 150,
    height: 150,
  },
});

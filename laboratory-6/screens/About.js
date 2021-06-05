import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const About = ({ navigation }) => {
  return (
    <View style={styles.container}>
     <Image source={{uri:'https://media.giphy.com/media/R7m04yMaGWVeE/giphy.gif'}} style={styles.jif}
        />
      <Text style={styles.content}>
      {'\n'} Nothing to see here.
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
    backgroundColor: '#E7F0F2',
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
    width: 300,
    height: 300,
  },
});

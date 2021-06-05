import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

const Home = ({ navigation }) => {
  return (
    <ScrollView>
     
      <View style={styles.container}>
       <Image source={{uri:'https://media.giphy.com/media/3ov9jIYPU7NMT6TS7K/giphy.gif'}} style={styles.jif}
        />
        
        <Text style={styles.content}>
          Hellooo!
        </Text>
      </View>
    </ScrollView>
  );
};
export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 150,
    flex: 1,
    backgroundColor: '#EE959E',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    fontFamily: 'Script MT',
    color: 'white',
    textAlign: 'justify',
    alignItems: 'center',
    fontSize: 17,
  },
   jif: {
    width: 150,
    height: 150,
  },

});

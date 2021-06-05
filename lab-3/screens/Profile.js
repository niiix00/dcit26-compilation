import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Profile = ({ navigation }) => {
  return (
    <ScrollView>
      <View style={styles.container}>

      <Text style={styles.textHeader}> {'\n'} Hey you! Do you want to know a thing about my Lord and Savior, Rimuru-sama?</Text>

      <Text style={styles.content}>
      -----------------------------------------------
      {'\n'} You've come to the right place, comrade...
      </Text>
      <Image source={{uri:'https://media.giphy.com/media/y70jyPYRIL1sZOcRJF/giphy.gif'}} style={styles.giff}
        />
        <Text style={styles.text}> Do you see this?!!!! </Text>
        <Text style={styles.content}>
          {'\n'}     Do you see how magnificent this awesome creature is?! Just look at that form... that roundness... that slick figure that even Gods are envious of! That pristine bluish tint that mirrors how majestic he is...
          {'\n'}
          {'\n'} This is Rimuru! The best slime!
        </Text>
        

        <Image source={{uri:'https://media.giphy.com/media/du1LfdlnhdTwn8OQHu/giphy.gif'}} style={styles.giff}
        />
        <Text style={styles.content}>
        {'\n'}Look at him! He's so precious! Oh gawwd! Just having to see such splendor fills my heart with happiness... Rimuru-sama!
        </Text>

        <Image source={{uri:'https://media.giphy.com/media/Ek61AvsTykm6k/giphy.gif'}} style={styles.giff}
        />
        <Text style={styles.content}>
         {'\n'}
         This is literally me every time I see my beloved Rimuru-sama. For I am an extreme believer of Rimuruism. Bow.
        </Text>

        <Text style={styles.textHeader}>{'\n'}
        {'\n'}
        RIMURU-Sama is best slime and that's on period!</Text>
      </View>
    </ScrollView>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  giff: {
    height: 200,
    width: 300,
    alignContent: 'center',
    padding: 20,
    marginVertical: 20,
  },
  text: {
    fontFamily: 'Century Gothic',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
  content: {
    fontFamily: 'Century Gothic',
    color: 'black',
    textAlign: 'justify',
    alignContent: 'center',
    fontSize: 20,
  },
  textHeader: {
    fontSize: 25,
    color: 'black',
    textAlign: 'center',
    fontFamily: 'Felix Titling',
    fontWeight: 'bold'
  },
});

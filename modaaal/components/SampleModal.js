import React from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, Linking, Modal } from 'react-native';

const SampleModal = props => {
return (
  <Modal animationType="slide" visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.container2}>
        <Image source={{uri:'https://media.giphy.com/media/ZE5DmCqNMr3yDXq1Zu/giphy.gif'}} style={styles.jif}
        />
      </View>

    <ScrollView>
      <Text style={styles.text}>
                  "Never Gonna Give You Up" {'\n'}
{'\n'}
We're no strangers to love {'\n'}
You know the rules and so do I {'\n'}
A full commitment's what I'm thinking of {'\n'}
You wouldn't get this from any other guy {'\n'}
{'\n'}
I just wanna tell you how I'm feeling {'\n'}
Gotta make you understand {'\n'}
{'\n'}
Never gonna give you up {'\n'}
Never gonna let you down {'\n'}
Never gonna run around and desert you {'\n'}
Never gonna make you cry {'\n'}
Never gonna say goodbye {'\n'}
Never gonna tell a lie and hurt you {'\n'}
{'\n'}
We've known each other for so long {'\n'}
Your heart's been aching, but {'\n'}
You're too shy to say it {'\n'}
Inside, we both know what's been going on {'\n'}
We know the game and we're gonna play it {'\n'}
{'\n'}
And if you ask me how I'm feeling {'\n'}
Don't tell me you're too blind to see {'\n'}
{'\n'}
Never gonna give you up {'\n'}
Never gonna let you down {'\n'}
Never gonna run around and desert you {'\n'}
Never gonna make you cry {'\n'}
Never gonna say goodbye {'\n'}
Never gonna tell a lie and hurt you {'\n'}
{'\n'}
Never gonna give you up {'\n'}
Never gonna let you down {'\n'}
Never gonna run around and desert you {'\n'}
Never gonna make you cry {'\n'}
Never gonna say goodbye {'\n'}
Never gonna tell a lie and hurt you {'\n'}
{'\n'}
(Ooh, give you up) {'\n'}
(Ooh, give you up) {'\n'}
Never gonna give, never gonna give {'\n'}
(Give you up) {'\n'}
Never gonna give, never gonna give {'\n'}
(Give you up) {'\n'}
{'\n'}
We've known each other for so long {'\n'}
Your heart's been aching, but {'\n'}
You're too shy to say it {'\n'}
Inside, we both know what's been going on {'\n'}
We know the game and we're gonna play it {'\n'}
{'\n'}
I just wanna tell you how I'm feeling {'\n'}
Gotta make you understand {'\n'}
{'\n'}
Never gonna give you up {'\n'}
Never gonna let you down {'\n'}
Never gonna run around and desert you {'\n'}
Never gonna make you cry {'\n'}
Never gonna say goodbye {'\n'}
Never gonna tell a lie and hurt you {'\n'}
{'\n'}
Never gonna give you up {'\n'}
Never gonna let you down {'\n'}
Never gonna run around and desert you {'\n'}
Never gonna make you cry {'\n'}
Never gonna say goodbye {'\n'}
Never gonna tell a lie and hurt you {'\n'}
{'\n'}
Never gonna give you up {'\n'}
Never gonna let you down {'\n'}
Never gonna run around and desert you {'\n'}
Never gonna make you cry {'\n'}
Never gonna say goodbye {'\n'}
Never gonna tell a lie and hurt you {'\n'}
{'\n'}
{'\n'}
      </Text>
    </ScrollView>
      <Button color='#EE959E' title="Close" onPress={props.onClose}>
      </Button>
    </View>
  </Modal>
);
};
export default SampleModal;

const styles = StyleSheet.create ({
  container: {
    padding: 50,
    flex: 1,
    backgroundColor: '#AEC6CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 16,
    color: '#FFFFFF',
    fontFamily: 'sans',
    fontStyle: 'italic',
    textAlign: 'justify',
    marginLeft: 10,
    marginRight: 10
  },

  jif: {
    width: 150,
    height: 150,
  },

  container2: {
    justifyContent: 'center',
    padding: 20,
    fontSize: 10
  },

});
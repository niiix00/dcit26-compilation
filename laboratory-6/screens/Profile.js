import React from "react";
import { 
  ScrollView, 
  Text, 
  StyleSheet, 
  Image, 
  View
  } from "react-native";

import { FontAwesome } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const Profile = ({route}) => {

  const data = route.params;

  return(
    <View style={styles.container}>
     <View style={styles.container1}> 
      <Image style={styles.image} source={{uri: data.picture.large}} />
      <Text style={styles.userName}>{data.name.title}. { data.name.first } {data.name.last}</Text>
     </View>
      
        <ScrollView style={{marginTop: 20, }}>
        <FontAwesome name="user" size={20} color="#619196"> About
        </FontAwesome>
        <View style={styles.line}></View>
        <Text style={styles.user}>
          Age: {data.dob.age}
          {'\n'}Birthday: {data.dob.date}
          {'\n'}Gender: {data.gender}
          {'\n'}Address: {data.location.street.number} {data.location.city}, {data.location.state}, {data.location.country}
        </Text>
        <View style={{marginTop: 20 }}></View>

        <FontAwesome name="envelope" size={20} color="#619196"> Contact
        </FontAwesome>
        <View style={styles.line}></View>
        <Text style={styles.user}>
          Email: { data.email }
          {'\n'}Phone: { data.phone }
        </Text>
        <View style={{marginTop: 20 }}></View>

        <Entypo name="plus" size={20} color="#619196"> Other
        </Entypo>
        <View style={styles.line}></View>
        <Text style={styles.user}>Date Registered: { data.registered.date }</Text>
        </ScrollView>
      
    </View>
  );
}

export default Profile;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#E7F0F2',
  },
  container1: {
    flex: 1,
    alignItems: 'center',
    marginTop: 45,
  },
  line: {
     height: 1,
     width: '100%', 
     backgroundColor: '#DFC7C1', 
     marginBottom: 5,
  },
  user: {
    fontSize: 17,
    margin: 10,
    fontFamily: 'Callisto MT',
  },
  userName: {
    fontSize: 20,
    color: '#619196',
    margin: 10,
    fontFamily: 'Century Gothic',
    fontWeight: 'bold',
  },
  image:{
    width: 150,
    height: 150,
    borderRadius: 100,
  },
});

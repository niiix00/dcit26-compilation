
import React, { useState, useEffect} from "react";
import { 
Text, 
StyleSheet, 
TouchableOpacity, 
View, Button, 
Image, 
ActivityIndicator 
} from "react-native";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  function fetchRandomData() {
    setLoading(true);
    fetch('https://randomuser.me/api')
    .then((response) => response.json())
    .then((json) => {
       setData(json.results[0]);
        console.log(json.results[0]);
      })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));
  }

  useEffect(() => {
    fetchRandomData();
  }, []);

  return(
    <View style={styles.container}>

          <Text style={styles.butt}> I CHOOSE YOU! </Text>
          {'\n'}

        { isLoading ? <ActivityIndicator size="large" color= "black"/> : (
          <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
            <Image style={styles.jif} source={{uri: data.picture.large}} />
          </TouchableOpacity>  
        )}
        
        { isLoading ? true : (
          <Text style={styles.content}>
            {data.name.first} {data.name.last} </Text>
        )}

        { isLoading ? true: (
          <TouchableOpacity style={styles.button} onPress={fetchRandomData}>
            <Text style={styles.but}> RANDOM USER </Text>
          </TouchableOpacity>
        )}
    </View>
  );
}
export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DFC7C1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  content: {
    fontFamily: 'Century Gothic',
    color: 'white',
    textAlign: 'justify',
    alignItems: 'center',
    marginHorizontal: '5%',
    marginBottom: 20,
    fontSize: 20,
  },
  but: {
    fontFamily: 'Century Gothic',
    color: 'white',
    textAlign: 'justify',
    alignItems: 'center',
    fontSize: 15,
  },
  butt: {
    fontFamily: 'Chiller',
    color: 'maroon',
    textAlign: 'justify',
    alignItems: 'center',
    fontSize: 35,
  },
   jif: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 150,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#619196',
    padding: 10,
    borderRadius: 10,
  },
});

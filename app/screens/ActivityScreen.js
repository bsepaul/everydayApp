import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, TouchableOpacity } from 'react-native';
import { useFonts } from 'expo-font';
import { indices } from './WelcomeScreen';

// initialize arrays for creating urls
const category_args = ["", "education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const laziness_args = ["", ["0", "0.2"], ["0.3", "0.5"], ["0.6", "0.8"], ["0.9", "1"]]
const body_args = ["", "1", "2", "3", "4", "5"]
const price_args = ["", ["0", "0.2"], ["0.3", "0.5"], ["0.6", "0.8"], ["0.9", "1"]]

// initiate activity string
var activity = "go for a run in the park!";


function httpGetAsync(theUrl, callback) {
    let xmlHttpReq = new XMLHttpRequest();
    xmlHttpReq.onreadystatechange = function () {
      if (xmlHttpReq.readyState == 4 && xmlHttpReq.status == 200)
        callback(xmlHttpReq.responseText);
    }
    xmlHttpReq.open("GET", theUrl, true); // true for asynchronous 
    xmlHttpReq.send(null);
}

function setActivity(activity_json) {
  var json = JSON.parse(activity_json);
  activity = json["activity"];
  console.log(activity);
  console.log(" ");
}

function getActivity() {
  let bored_url = 'http://www.boredapi.com/api/activity?';
  console.log("Getting URL");
  if (indices.category_index_glbl != 0){
      bored_url += "type=" + category_args[indices.category_index_glbl] + "&"
  }
  if (indices.laziness_index_glbl != 0){
      bored_url += "minaccessibility=" + laziness_args[indices.laziness_index_glbl][0] + "&maxaccessibility=" + laziness_args[indices.laziness_index_glbl][1] + "&"
  }
  if (indices.body_index_glbl != 0){
      bored_url += "participants=" + body_args[indices.body_index_glbl] + "&"
  }
  if (indices.price_index_glbl != 0){
      bored_url += "minprice=" + price_args[indices.price_index_glbl][0] + "&maxprice=" + price_args[indices.price_index_glbl][1]
  }

  httpGetAsync(bored_url, function(result){
    setActivity(result);
  });
  console.log(bored_url);
  console.log(" ");
}

function ActivityScreen(props) {                       
    setTimeout(getActivity, 0);
    const [loaded] = useFonts({
        Bebas: require('../assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf'),
        Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf')
      });
    if (!loaded) {
    return null;
    }
    return (
      <ImageBackground style = {styles.background} source={require("../assets/gradient.png")}>
        <View style={styles.container}>
          <View>
            <Text style={styles.activity}>{activity}</Text>
          </View>
          <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Another?</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
}



// CREATE STYLES
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    background: {
      flex: 1,
    },
    activity: {
      paddingHorizontal: 20,
      paddingVertical: 30,
      textAlign: 'center',
      color: '#000',
      fontFamily: 'Bebas',
      fontSize: 60
    },
    slider: {
      width: "75%",
      height: 40
    },
    dropdown: {
      flex: 1,
    },
    button: {
      backgroundColor: '#000',
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 30,
      elevation: 3,
      fontFamily: 'Bebas'
    },
    dropdownButton: {
      width: '75%',
      backgroundColor: '#FFE178',
      borderRadius: 10,
      fontFamily: 'Bebas'
    },
    dropdownRow: {
      backgroundColor: '#FFF0BA',
      borderRadius: 10
    },
    buttonText: {
      fontSize: 28,
      lineHeight: 40,
      fontWeight: 'bold',
      color: '#FFF',
      fontFamily: 'Bebas'
    },
    dropdownTitle: {
      paddingVertical: 5,
      fontFamily: 'Bebas',
      fontSize: 24
    }
});

export default ActivityScreen;
import React from 'react';
import { ImageBackground, StyleSheet, Text, View, Image, SafeAreaView, Button, Pressable, TouchableOpacity } from 'react-native';
import SelectDropDown from 'react-native-select-dropdown';
import { useFonts } from 'expo-font';

// initialize arrays for drop downs
const categories = ["random category", "education", "recreational", "social", "diy", "charity", "cooking", "relaxation", "music", "busywork"]
const laziness_levels = ["random laziness", "no lazy bones here", "not lazy...maybe", "okay yeah i'm lazy", "SUPER lazy"]
const body_count = ["random body amount", "1 - no friends", "2 - I could find a friend", "3 - is a party", "4 - now we're talking", "5 - okay stop bragging"]
const price_points = ["random price", "free", "$ - let's keep it cheap", "$$ - I'm willing", "$$$ - I. Just. Got. Paid."]


// initialize indices of arrays
let category_index = 0
let laziness_index = 0
let body_index = 0
let price_index = 0

const indices = {
  category_index_glbl : category_index,
  laziness_index_glbl : laziness_index,
  body_index_glbl : body_index,
  price_index_glbl : price_index
}

function WelcomeScreen(props) {
    const [loaded] = useFonts({
      Bebas: require('../assets/fonts/Bebas_Neue/BebasNeue-Regular.ttf'),
      Roboto: require('../assets/fonts/Roboto/Roboto-Regular.ttf')
    });
    if (!loaded) {
      return null;
    }
    return (
      <ImageBackground source={require("../assets/gradient.png")} style={styles.background}>
        <SafeAreaView style={styles.container}>
          <View style={{flex:1, justifyContent: 'center'}}>
            <Image style={{width:250, height:61}} source={require('../assets/mantra.png')}/>
          </View>
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.dropdownTitle}>CATEGORY</Text>
            <SelectDropDown
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.rowText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.rowText}
              data={categories}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                category_index = index
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </View>
    
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.dropdownTitle}>LAZINESS</Text>
            <SelectDropDown
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.rowText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.rowText}
              data={laziness_levels}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                laziness_index = index
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </View>
    
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.dropdownTitle}>BODIES</Text>
            <SelectDropDown
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.rowText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.rowText}
              data={body_count}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                body_index = index
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </View>
    
    
          <View style={{flex: 1, justifyContent: 'center'}}>
            <Text style={styles.dropdownTitle}>PRICE</Text>
            <SelectDropDown
              buttonStyle={styles.dropdownButton}
              buttonTextStyle={styles.rowText}
              dropdownStyle={styles.dropdown}
              rowStyle={styles.dropdownRow}
              rowTextStyle={styles.rowText}
              data={price_points}
              defaultValueByIndex={0}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
                price_index = index
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                return item
              }}
            />
          </View>
    
    
    
          <View style={{flex: 3, justifyContent: 'center'}}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Let's do it.</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
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
    title: {
      color: '#000',
      textTransform: 'uppercase',
      fontWeight: 'bold'
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
      backgroundColor: '#FFFCF3',
      borderRadius: 10,
      fontFamily: 'Bebas'
    },
    dropdownRow: {
      backgroundColor: '#FFFCF3',
      borderRadius: 10
    },
    rowText: {
      textAlign: 'left',
      paddingLeft: 5
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

export {indices};
export default WelcomeScreen;
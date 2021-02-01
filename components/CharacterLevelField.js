import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useFonts } from 'expo-font';


export default function CharacterNameField() {
  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });

  return (
      <View style={styles.characterInfoContainer}>
          <View style={styles.infoRow}>
              <Text style={{fontSize: 16, fontFamily: loaded? "Rooters" : null, paddingEnd: 8}}>XP:</Text>
              <TextInput
                  placeholder="0"
                  keyboardType = 'numeric'
                  style={{...styles.inputText, width: 80, marginEnd: 8, fontFamily: loaded? "Rooters" : null}}
              />
              <Text style={{fontSize: 16, fontFamily: loaded? "Rooters" : null, paddingEnd: 8}}>Level:</Text>
              <TextInput
                  placeholder="0"
                  keyboardType = 'numeric'
                  style={{...styles.inputText, width: 80, fontFamily: loaded? "Rooters" : null}}
              />
          </View>
          
          <View
            style={{
                borderBottomColor: 'grey',
                borderBottomWidth: 1,
                width: "100%",
                marginBottom: 16
            }}
        />
      </View>
  );
}

const styles = StyleSheet.create({
    characterInfoContainer: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 16
    },
  
    infoRow: {
      flexDirection: "row",
      alignContent: "center",
      alignItems: "center",
      marginBottom: 16
    },
  
    inputText: {
      backgroundColor: 'lightgrey',
      fontSize: 16,
      paddingHorizontal: 5
    }
  });
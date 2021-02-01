import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useFonts } from 'expo-font';


export default function CharacterEquipmentField() {
  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });

  return (
      <View style={styles.characterInfoContainer}>
          <View style={styles.infoRow}>
              <Text style={{fontSize: 16, fontFamily: loaded? "Rooters" : null, marginEnd: 8}}>Gold:</Text>
              <TextInput
                  placeholder="0"
                  keyboardType = 'numeric'
                  style={{...styles.inputText, width: 95, marginEnd: 8, fontFamily: loaded? "Rooters" : null}}
              />
          </View>
          <Text style={{fontSize: 16, fontFamily: loaded? "Rooters" : null, marginBottom: 8}}>Items:</Text>
              <TextInput
                  placeholder="Character items"
                  multiline={true}
                  style={{...styles.equipmentInput, fontFamily: loaded? "Rooters" : null}}
              />
      </View>
  );
}

const styles = StyleSheet.create({
    characterInfoContainer: {
      backgroundColor: '#fff',
      padding: 16,
      borderWidth: 1,
      borderRadius: 8
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
    },

    equipmentInput: {
        backgroundColor: 'lightgrey',
        fontSize: 16,
        padding: 5, 
        width: 280,
        height: 200,
        marginEnd: 8,
        textAlignVertical: 'top',
    }
  });
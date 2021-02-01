import React, { useContext, useState } from 'react';
import { StyleSheet, View, SafeAreaView, Button, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CHARACTERS_NAME } from '../redux/actionTypes';
import { getCharacterName } from '../redux/characterReducer';
import { getSelectedCharacter } from '../redux/characterReducer';
import { useFonts } from 'expo-font';


export default function CharacterNameField() {
    const [newName, setNewName] = useState(initialName());
  const dispatch = useDispatch();

  const characterName = useSelector(getCharacterName);
  
  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });

  const onEditDone = () => {
      console.log("done")
    dispatch({ type: CHANGE_CHARACTERS_NAME, payload: newName })
  }

  const onChangeText = (newName) => {
      console.log("Changing")
      setNewName(newName)
  }

  function initialName() {
      if (characterName !== "Unnamed") {
          return characterName
      } else { return "" }
  }

  const LevelRow = () => {
    return (
      <View>
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
    )
}

  return (
      <View style={styles.characterInfoContainer}>
            <View style={styles.infoRow}>
                <Text style={{fontSize: 16, fontFamily: loaded? "Rooters" : null, paddingEnd: 8}}>Name:</Text>
                <TextInput
                    placeholder="Character name"
                    value={newName}
                    onChangeText={text => onChangeText(text)}
                    onEndEditing = {onEditDone}
                    style={{...styles.inputText, width: 200, fontFamily: loaded? "Rooters" : null}}
                />
            </View>
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
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CHARACTERS_NAME } from '../redux/actionTypes';
import { getCharacterName } from '../redux/characterReducer';
import { useFonts } from 'expo-font';


export default function CharacterNameField() {
    const [newName, setNewName] = useState(initialName());
  const dispatch = useDispatch();

  const characterName = useSelector(getCharacterName);
  
  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });

  const onEditDone = () => {
    dispatch({ type: CHANGE_CHARACTERS_NAME, payload: newName })
  }

  const onChangeText = (newName) => {
      setNewName(newName)
  }

  function initialName() {
      if (characterName !== "Unnamed") {
          return characterName
      } else { return "" }
  }

  return (
      <View style={styles.characterInfoContainer}>
            <View style={styles.infoRow}>
                <Text style={{fontSize: 16, fontFamily: loaded? "Rooters" : null, marginEnd: 8}}>Name:</Text>
                <TextInput
                    placeholder="Character name"
                    value={newName}
                    onChangeText={text => onChangeText(text)}
                    onEndEditing = {onEditDone}
                    style={{...styles.inputText, width: 230, fontFamily: loaded? "Rooters" : null}}
                />
            </View>
      </View>
  );
}

const styles = StyleSheet.create({
  characterInfoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16
  },

  infoRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  inputText: {
    backgroundColor: 'lightgrey',
    fontSize: 16,
    paddingHorizontal: 5
  }
});
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { CHANGE_CHARACTERS_NAME } from '../redux/actionTypes';
import { getCharacterName } from '../redux/characterReducer';
import { useEffect } from 'react';

export default function CharacterNameField() {
  const [newName, setNewName] = useState(initialName());
  const dispatch = useDispatch();

  const characterName = useSelector(getCharacterName);

  useEffect(() => {
    // Only update the name if it's new.
    if (newName !== characterName) {
      dispatch({ type: CHANGE_CHARACTERS_NAME, payload: newName });
    }
  }, [characterName, dispatch, newName]);

  const onChangeText = (editedName) => {
    setNewName(editedName);
  };

  function initialName() {
    if (characterName !== 'Unnamed') {
      return characterName;
    } else {
      return '';
    }
  }

  return (
    <View style={styles.characterInfoContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.text}>Name:</Text>
        <TextInput
          placeholder="Character name"
          value={newName}
          onChangeText={(text) => onChangeText(text)}
          style={styles.inputText}
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
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
  },

  text: {
    marginEnd: 8,
    fontSize: 16,
    fontFamily: 'rooters-standard',
  },

  inputText: {
    backgroundColor: 'lightgrey',
    fontSize: 16,
    paddingHorizontal: 5,
    width: 230,
    fontFamily: 'rooters-standard',
  },
});

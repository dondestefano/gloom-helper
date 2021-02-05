import React from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';
import {
  getCharacterExperience,
  getCharacterLevel,
} from '../redux/characterReducer';
import { SET_EXPERIENCE } from '../redux/actionTypes';
import { useDispatch, useSelector } from 'react-redux';

export default function CharacterNameField() {
  const dispatch = useDispatch();

  const onExperienceChanged = (newValue) => {
    dispatch({ type: SET_EXPERIENCE, payload: newValue });
  };

  const characterLevel = useSelector(getCharacterLevel);
  const characterExperience = useSelector(getCharacterExperience);

  return (
    <View style={styles.characterInfoContainer}>
      <View style={styles.infoRow}>
        <Text style={styles.text}>XP:</Text>
        <TextInput
          placeholder="0"
          value={characterExperience.toString()}
          keyboardType="numeric"
          onChangeText={(text) => onExperienceChanged(text)}
          style={styles.inputText}
        />
        <Text style={styles.text}>Level:</Text>
        <TextInput
          placeholder="0"
          value={characterLevel.toString()}
          keyboardType="numeric"
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
    fontSize: 16,
    fontFamily: 'rooters-standard',
    marginEnd: 8,
  },

  inputText: {
    backgroundColor: 'lightgrey',
    fontSize: 16,
    paddingHorizontal: 5,
    width: 90,
    marginEnd: 8,
    fontFamily: 'rooters-standard',
  },
});

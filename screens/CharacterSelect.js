import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { SET_CHARACTER_HATCHET } from '../redux/actionTypes';
import { useDispatch } from 'react-redux';


export default function Character() {
    const dispatch = useDispatch();
  
    const setCharacter = (character) => {
        console.log(character)
        dispatch({ type: character })
      }

  return (
    <View style={styles.container}>
      <Button title="Hatchet" onPress={() => setCharacter(SET_CHARACTER_HATCHET)}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
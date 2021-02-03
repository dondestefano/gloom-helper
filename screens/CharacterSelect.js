import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { SET_CHARACTER_HATCHET, SET_CHARACTER_VOIDWARDEN } from '../redux/actionTypes';
import { useDispatch } from 'react-redux';


export default function Character() {
    const dispatch = useDispatch();
  
    const setCharacter = (character) => {
        dispatch({ type: character })
      }

  return (
    <View style={styles.container}>
      <Button title="Hatchet" onPress={() => setCharacter(SET_CHARACTER_HATCHET)}/>
      <Button title="Voidwarden" onPress={() => setCharacter(SET_CHARACTER_VOIDWARDEN)}/>
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
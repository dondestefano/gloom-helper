import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_CARD, REMOVE_CARD } from '../redux/actionTypes';

export default function Character() {
  const dispatch = useDispatch();

  let newCard = { id: "newCard", title: "+1", img: require("../assets/plusOneIce.png"), backgroundColor: "blue" }

  return (
    <View style={styles.container}>
      <Button title="Add new card" onPress={() => dispatch({ type: ADD_CARD, payload: newCard })}/>
      <Button title="Remove card" onPress={() => dispatch({ type: REMOVE_CARD, payload: "newCard" })}/>
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
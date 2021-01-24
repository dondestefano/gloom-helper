import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_CARD, SET_DECK } from '../redux/actionTypes';
import { getActiveDeck } from '../redux/reducer';
import {DefaultDeck} from '../data/DefaultDeck'

const defaultDeck = DefaultDeck

export default function Character() {
  const dispatch = useDispatch();

  let newCard = { id: "newCard", title: "+1", img: require("../assets/plusOne.png"), backgroundColor: "blue" }

  return (
    <View style={styles.container}>
      <Button title="Add new card" onPress={() => dispatch({ type: ADD_CARD, payload: newCard })}/>
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
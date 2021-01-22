import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DECK } from '../redux/actionTypes';
import { getActiveDeck } from '../redux/reducer';
import {DefaultDeck} from '../data/DefaultDeck'

const defaultDeck = DefaultDeck

export default function Character() {
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Button title="Add default deck" onPress={() => dispatch({ type: SET_DECK, payload: defaultDeck })}/>
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
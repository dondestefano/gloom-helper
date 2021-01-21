import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SET_DECK } from '../redux/actionTypes';
import { getDeck } from '../redux/reducer';


const defaultDeck = [
  { name: "+1", id: "itemone"},
  { name: "+0", id: "itemtwo"},
  { name: "-1", id: "itemthree"},
  { name: "+2", id: "itemfour"},
  { name: "-2", id: "itemFive"}
];

export default function Character() {
  const deck = useSelector(getDeck);
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
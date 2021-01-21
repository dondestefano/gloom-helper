import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { SHUFFLE_DECK } from '../redux/actionTypes';
import { getDeck } from '../redux/reducer';

export default function Combat() {
  const deck = useSelector(getDeck);
  const dispatch = useDispatch();

  return (
    <View style={styles.container}>
      <Text>Combatscreen!</Text>
      <Button title="Shuffle deck" onPress={() => dispatch({ type: SHUFFLE_DECK })}/>
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
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DrawHistory from '../components/DrawHistory';
import CurrentCard from '../components/CurrentCard';
import { DRAW_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import { getDrawnDeck, getActiveDeck } from '../redux/reducer';

export default function Combat() {
  const activeDeck = useSelector(getActiveDeck);
  const dispatch = useDispatch();

  const drawTop = () => {
    if (activeDeck.length === 0) {
      dispatch({ type: SHUFFLE_DECK })
    } 
    dispatch({ type: DRAW_CARD })

    // Reset activeDeck if the last card has been drawn.
    // Length 1 to compensate for asynchronus update.
  }

  return (
    <SafeAreaView style={{  alignItems: 'center', flex: 1}}>
      <DrawHistory/>
      <View style={styles.container}>
        <CurrentCard/>
        <Text>Cards in deck: {activeDeck.length}</Text>
        <Button title="Draw card" onPress={() => drawTop()}/>
        <Button title="Shuffle deck" onPress={() => dispatch({ type: SHUFFLE_DECK })}/>
      </View>
    </SafeAreaView>

  );
}


const styles = StyleSheet.create({
  container: {
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: "100%"
  },
});
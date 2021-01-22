import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { DRAW_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import { getDrawnDeck, getActiveDeck } from '../redux/reducer';

export default function Combat() {
  const activeDeck = useSelector(getActiveDeck);
  const drawnDeck = useSelector(getDrawnDeck)
  const dispatch = useDispatch();

  const currentCard = () =>{
    if (drawnDeck.length !== 0) {
      return drawnDeck[0].title
    }
    else {
    return "No card drawn"
    }
  }

  const drawTop = () => {
    dispatch({ type: DRAW_CARD })

    // Reset activeDeck if the last card has been drawn.
    // Length 1 to compensate for asynchronus update.
    if (activeDeck.length === 1) {
      dispatch({ type: SHUFFLE_DECK })
    } 
  }

  return (
    <View style={styles.container}>
      <Text>Combatscreen!</Text>
      <Text>Current card: {currentCard()}</Text>
      <Button title="Draw card" onPress={() => drawTop()}/>
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
import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DrawHistory from '../components/DrawHistory';
import CurrentCard from '../components/CurrentCard';
import { DRAW_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import { getActiveDeck } from '../redux/deckReducer';
import StatTracker from '../components/StatTracker';
import { getCharacterName } from '../redux/characterReducer';
import HeaderComponent from '../components/HeaderComponent';

export default function Combat() {
  const activeDeck = useSelector(getActiveDeck);
  const characterName = useSelector(getCharacterName);
  const dispatch = useDispatch();

  const drawTop = () => {
    // Reset activeDeck if there are no cards left.
    if (activeDeck.length === 0) {
      dispatch({ type: SHUFFLE_DECK });
    }
    dispatch({ type: DRAW_CARD });
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderComponent title={characterName + "'s status"} />
      <StatTracker />
      <DrawHistory />
      <View style={styles.container}>
        <CurrentCard />
        <Text>Cards in deck: {activeDeck.length}</Text>
        <Button title="Draw card" onPress={() => drawTop()} />
        <Button
          title="Shuffle deck"
          onPress={() => dispatch({ type: SHUFFLE_DECK })}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
    flex: 1,
  },

  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

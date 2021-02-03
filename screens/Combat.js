import React from 'react';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DrawHistory from '../components/DrawHistory';
import CurrentCard from '../components/CurrentCard';
import { DRAW_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import { getActiveDeck } from '../redux/deckReducer';
import StatTracker from '../components/StatTracker';
import { useFonts } from 'expo-font';
import { getCharacterName } from '../redux/characterReducer';

export default function Combat() {
  const activeDeck = useSelector(getActiveDeck);
  const characterName = useSelector(getCharacterName);
  const dispatch = useDispatch();

  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });

  const drawTop = () => {
    // Reset activeDeck if there are no cards left.
    if (activeDeck.length === 0) {
      dispatch({ type: SHUFFLE_DECK });
    }
    dispatch({ type: DRAW_CARD });
  };

  return (
    <SafeAreaView style={{ alignItems: 'center', flex: 1 }}>
      <SafeAreaView
        // Adds a safa are for Android device.
        style={{
          paddingTop: Platform.OS === 'android' ? 25 : 0,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 8,
          fontFamily: loaded ? 'Rooters' : null,
        }}
      >
        {characterName}'s status
      </Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 2,
          width: '90%',
          marginBottom: 16,
        }}
      />
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
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
});

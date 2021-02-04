import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import DrawHistory from '../components/DrawHistory';
import CurrentCard from '../components/CurrentCard';
import { DRAW_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import { getActiveDeck } from '../redux/deckReducer';
import StatTracker from '../components/StatTracker';
import { getCharacterName } from '../redux/characterReducer';
import HeaderComponent from '../components/HeaderComponent';
import CustomButton from '../components/CustomButton';

const drawButton = require('../assets/drawBtn.png');
const shuffleButton = require('../assets/shuffleBtn.png');

const ShuffleButton = ({ image, onPressEffect }) => {
  return (
    <View>
      <TouchableOpacity onPress={() => onPressEffect()} activeOpacity={0.8}>
        <Image style={styles.shuffleButton} source={image} />
      </TouchableOpacity>
    </View>
  );
};

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

  const ShuffleButton = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() => dispatch({ type: SHUFFLE_DECK })}
          activeOpacity={0.8}
        >
          <Image style={styles.shuffleButton} source={shuffleButton} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.screenContainer}>
      <HeaderComponent title={characterName + "'s status"} />
      <StatTracker />
      <DrawHistory />
      <View style={styles.container}>
        <CurrentCard />
        <Text style={styles.text}>Cards in deck: {activeDeck.length}</Text>
        <View style={styles.buttonContainer}>
          <ShuffleButton />
          <CustomButton image={drawButton} onPressEffect={() => drawTop()} />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    alignItems: 'center',
    flex: 1,
    backgroundColor: 'white',
  },

  container: {
    flex: 1,
    padding: 12,
    marginTop: 12,
    alignItems: 'center',
    alignContent: 'center',
    width: '100%',
  },

  buttonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  text: {
    fontSize: 18,
    marginVertical: 12,
    width: 250,
    textAlign: 'center',
    fontFamily: 'rooters-standard',
  },

  shuffleButton: {
    width: 50,
    height: 50,
    marginRight: 12,
  },
});

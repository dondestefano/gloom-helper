import React from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import {
  SET_CHARACTER_HATCHET,
  SET_CHARACTER_VOIDWARDEN,
} from '../redux/actionTypes';
import { useDispatch } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

const voidwardenButton = require('../assets/voidwardenBtn.png');
const hatchetButton = require('../assets/hatchetBtn.png');

const CharacterButton = ({ image, characterToSet }) => {
  const dispatch = useDispatch();

  const setCharacter = (character) => {
    dispatch({ type: character });
  };

  return (
    <View style={styles.characterBtn}>
      <TouchableOpacity
        onPress={() => setCharacter(characterToSet)}
        activeOpacity={0.8}
      >
        <Image style={styles.characterBtn} source={image} />
      </TouchableOpacity>
    </View>
  );
};

export default function Character() {
  return (
    <View style={styles.container}>
      <HeaderComponent title={'Select character'} />
      <View style={styles.selectArea}>
        <CharacterButton
          image={hatchetButton}
          characterToSet={SET_CHARACTER_HATCHET}
        />
        <CharacterButton
          image={voidwardenButton}
          characterToSet={SET_CHARACTER_VOIDWARDEN}
        />
      </View>
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

  selectArea: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },

  characterBtn: {
    width: 300,
    height: 100,
    alignItems: 'center',
    margin: 5,
  },
});

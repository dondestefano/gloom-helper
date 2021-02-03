import React from 'react';
import { StyleSheet, View } from 'react-native';
import CharacterPerks from '../components/CharacterPerks';
import { getSelectedCharacter } from '../redux/characterReducer';
import { useSelector } from 'react-redux';
import HeaderComponent from '../components/HeaderComponent';

export default function Character() {
  const selectedCharacter = useSelector(getSelectedCharacter);

  return (
    <View style={styles.container}>
      <HeaderComponent title={selectedCharacter + ' Perks'} />
      <CharacterPerks />
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

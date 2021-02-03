import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getSelectedCharacter } from '../redux/characterReducer';
import CharacterNameField from '../components/CharacterNameField';
import CharacterLevelField from '../components/CharacterLevelField';
import CharacterEquipmentField from '../components/CharacterEquipmentField';
import SettingsComponent from '../components/SettingsComponent';
import HeaderComponent from '../components/HeaderComponent';

export default function Character() {
  const selectedCharacter = useSelector(getSelectedCharacter);

  return (
    <View style={styles.container}>
      <HeaderComponent title={'Character ' + selectedCharacter} />
      <View style={styles.characterInfoContainer}>
        <CharacterNameField />
        <CharacterLevelField />
        <CharacterEquipmentField />
        <SettingsComponent />
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

  characterInfoContainer: {
    flex: 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 16,
  },
});

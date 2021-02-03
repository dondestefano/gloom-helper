import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getSelectedCharacter } from '../redux/characterReducer';
import { useFonts } from 'expo-font';
import CharacterNameField from '../components/CharacterNameField';
import CharacterLevelField from '../components/CharacterLevelField';
import CharacterEquipmentField from '../components/CharacterEquipmentField';
import SettingsComponent from '../components/SettingsComponent';

export default function Character() {
  const selectedCharacter = useSelector(getSelectedCharacter);

  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });

  return (
    <View style={styles.container}>
      <SafeAreaView
        // Adds a safe area for Android device.
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
        Character {selectedCharacter}
      </Text>
      <View
        style={{
          borderBottomColor: 'grey',
          borderBottomWidth: 2,
          width: '90%',
        }}
      />
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

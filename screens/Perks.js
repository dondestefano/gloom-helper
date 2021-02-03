import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import CharacterPerks from '../components/CharacterPerks'
import { getSelectedCharacter } from '../redux/characterReducer';
import { useSelector } from 'react-redux';
import { useFonts } from 'expo-font';

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
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
      />
        <Text style={{fontSize: 20, marginTop: 20, marginBottom: 8, fontFamily: loaded? "Rooters" : null}}>{selectedCharacter} Perks</Text>
      <CharacterPerks/>
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
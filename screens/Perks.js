import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';
import CharacterPerks from '../components/CharacterPerks'
import { useFonts } from 'expo-font';



export default function Character() {
    const [loaded] = useFonts({
        Rooters: require('../assets/fonts/Rooters.ttf'),
      });

  return (
    <View style={styles.container}>
      <SafeAreaView
        // Adds a safe are for Android device.
        style={{
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
      />
        <Text style={{fontSize: 20, marginTop: 20, marginBottom: 8, fontFamily: loaded? "Rooters" : null}}>Hatchet Perks</Text>
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
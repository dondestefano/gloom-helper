import React, { useContext } from 'react';
import { StyleSheet, View, SafeAreaView, Button, TextInput, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { AuthContext } from '../context/AuthContext';
import { CHANGE_CHARACTERS_NAME } from '../redux/actionTypes';
import { getCharacterName } from '../redux/characterReducer';
import { getSelectedCharacter } from '../redux/characterReducer';
import { useFonts } from 'expo-font';
import CharacterNameField from '../components/CharacterNameField';
import CharacterLevelField from '../components/CharacterLevelField';


export default function Character() {
  const { signOut } = useContext(AuthContext);

  const characterName = useSelector(getCharacterName)
  const selectedCharacter = useSelector(getSelectedCharacter);


  const [loaded] = useFonts({
    Rooters: require('../assets/fonts/Rooters.ttf'),
  });
  const userSignOut = () => {
    signOut()
  }

  return (
    <View style={styles.container}>
      <SafeAreaView
        // Adds a safe area for Android device.
        style={{
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
      />
      <Text style={{fontSize: 20, marginTop: 20, marginBottom: 8, fontFamily: loaded? "Rooters" : null}}>Character {selectedCharacter}</Text>
      <View
          style={{
              borderBottomColor: 'grey',
              borderBottomWidth: 2,
              width: "90%",
              marginBottom: 16
              }}
      />
      <CharacterNameField/>
      <CharacterLevelField/>
      <Button title="Logout" onPress={userSignOut}/>
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
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 16
  },
});
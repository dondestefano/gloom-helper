import React, { useContext } from 'react';
import { StyleSheet, View, SafeAreaView, Button } from 'react-native';
import { AuthContext } from '../context/AuthContext';
import CharacterPerks from '../components/CharacterPerks'


export default function Character() {
  const { signOut } = useContext(AuthContext);
  
  const userSignOut = () => {
    signOut()
  }

  return (
    <View style={styles.container}>
      <SafeAreaView
        // Adds a safa are for Android device.
        style={{
        paddingTop: Platform.OS === 'android' ? 25 : 0
      }}
      />
      <CharacterPerks/>
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
});
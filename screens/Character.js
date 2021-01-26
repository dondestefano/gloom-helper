import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_CARD, REMOVE_CARD } from '../redux/actionTypes';
import { AuthContext } from '../context/AuthContext';
import Perk from '../components/Perk'


export default function Character() {
  const { signOut } = useContext(AuthContext);

  let newCards = [
    { id: "newCard", title: "+1", img: require("../assets/plusOneIce.png"), backgroundColor: "blue" },
    { id: "newCard2", title: "+1", img: require("../assets/plusOneIce.png"), backgroundColor: "blue" }
  ]
  let oldCards = [
    { id: "plusOne1", title: "+1", img: require("../assets/plusOne.png"), backgroundColor: "green" },
    { id: "plusOne2", title: "+1", img: require("../assets/plusOne.png"), backgroundColor: "green" },
  ]

  const userSignOut = () => {
    signOut()
  }

  return (
    <View style={styles.container}>
      <Perk perkRule = "Add two +1 ice and remove two +1" addCards={newCards} removeCards = {oldCards}/>
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
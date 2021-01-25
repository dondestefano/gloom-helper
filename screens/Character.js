import React, { useContext } from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { ADD_CARD, REMOVE_CARD } from '../redux/actionTypes';
import { AuthContext } from '../context/AuthContext';

export default function Character() {
  const dispatch = useDispatch();

  const { signOut } = useContext(AuthContext);

  const userSignOut = () => {
    signOut()
  }

  let newCard = { id: "newCard", title: "+1", img: require("../assets/plusOneIce.png"), backgroundColor: "blue" }

  return (
    <View style={styles.container}>
      <Button title="Add new card" onPress={() => dispatch({ type: ADD_CARD, payload: newCard })}/>
      <Button title="Remove card" onPress={() => dispatch({ type: REMOVE_CARD, payload: "newCard" })}/>
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
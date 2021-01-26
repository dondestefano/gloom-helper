import React from 'react';
import { StyleSheet, SafeAreaView, FlatList, Button, View} from 'react-native';
import Perk from './Perk'
import {CharacterHatchetPerks} from '../data/CharacterHatchetPerks'

export default function CharacterPerks() {

    const perkList = CharacterHatchetPerks

    return (
        <SafeAreaView style={styles.container}>
        <FlatList style= {{height: "80%"}}
          data={perkList}
          renderItem={({ item }) =>
            <Perk perkRule = {item.perkRule} addCards={item.addCards} removeCards = {item.removeCards}/>
          }
          keyExtractor={(item) => item.id.toString()}
        />    
        </SafeAreaView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5
  },
});
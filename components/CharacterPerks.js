import React from 'react';
import { StyleSheet, SafeAreaView, FlatList } from 'react-native';
import { useSelector } from 'react-redux';
import Perk from './Perk';
import { getCharacterPerks } from '../redux/characterReducer';

export default function CharacterPerks() {
  const perkList = useSelector(getCharacterPerks);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        style={{ height: '80%' }}
        data={perkList}
        renderItem={({ item }) => (
          <Perk
            perkRule={item.perkRule}
            addCards={item.addCards}
            removeCards={item.removeCards}
          />
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 5,
  },
});

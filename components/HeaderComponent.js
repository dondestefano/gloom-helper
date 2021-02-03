import React from 'react';
import { StyleSheet, View, SafeAreaView, Text } from 'react-native';

export default function HeaderComponent({ title }) {
  return (
    <View style={styles.container}>
      <SafeAreaView
        // Adds a safe area for Android device.
        style={{ paddingTop: Platform.OS === 'android' ? 25 : 0 }}
      />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.borderLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  text: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 8,
    fontFamily: 'rooters-standard',
  },

  borderLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 2,
    width: 300,
  },
});

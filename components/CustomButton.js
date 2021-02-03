import React from 'react';
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export default function CustomButton({ image, onPressEffect }) {
  return (
    <View>
      <TouchableOpacity onPress={() => onPressEffect()} activeOpacity={0.8}>
        <Image style={styles.button} source={image} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 120,
    height: 60,
  },
});

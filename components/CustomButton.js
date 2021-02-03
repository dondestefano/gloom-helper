import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';

export default function CustomButton({ image, onPressEffect }) {
  return (
    <View>
      <TouchableOpacity onPress={() => onPressEffect()} activeOpacity={0.8}>
        <Image style={{ width: 120, height: 60 }} source={image} />
      </TouchableOpacity>
    </View>
  );
}

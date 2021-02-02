import React from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
import { useFonts } from "expo-font";

export default function CharacterNameField() {
  const [loaded] = useFonts({
    Rooters: require("../assets/fonts/Rooters.ttf"),
  });

  return (
    <View style={styles.characterInfoContainer}>
      <View style={styles.infoRow}>
        <Text
          style={{
            fontSize: 16,
            fontFamily: loaded ? "Rooters" : null,
            marginEnd: 8,
          }}
        >
          XP:
        </Text>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          style={{
            ...styles.inputText,
            width: 95,
            marginEnd: 8,
            fontFamily: loaded ? "Rooters" : null,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            fontFamily: loaded ? "Rooters" : null,
            marginEnd: 8,
          }}
        >
          Level:
        </Text>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          style={{
            ...styles.inputText,
            width: 95,
            fontFamily: loaded ? "Rooters" : null,
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  characterInfoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
  },

  infoRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
  },

  inputText: {
    backgroundColor: "lightgrey",
    fontSize: 16,
    paddingHorizontal: 5,
  },
});

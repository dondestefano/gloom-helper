import React, { useRef } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import { useFonts } from "expo-font";

const clearCharacterItemsButton = require("../assets/clearItemsBtn.png");

export default function CharacterEquipmentField() {
  const [loaded] = useFonts({
    Rooters: require("../assets/fonts/Rooters.ttf"),
  });

  const characterItemInputRef = useRef(null);

  const clearItemAlert = () => {
    Alert.alert(
      "Clear items!",
      "Are you sure you want to clear all item data for this character?",
      [
        {
          text: "Cancel",
        },
        {
          text: "Yes",
          onPress: () => {
            clearCharacterItems();
          },
        },
      ]
    );
  };

  const clearCharacterItems = () => {
    characterItemInputRef.current.clear();
  };

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
          Gold:
        </Text>
        <TextInput
          placeholder="0"
          keyboardType="numeric"
          style={{ ...styles.inputText, fontFamily: loaded ? "Rooters" : null }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontFamily: loaded ? "Rooters" : null,
          marginBottom: 8,
        }}
      >
        Items:
      </Text>
      <TextInput
        placeholder="Character items"
        ref={characterItemInputRef}
        multiline={true}
        style={{
          ...styles.equipmentInput,
          fontFamily: loaded ? "Rooters" : null,
        }}
      />
      <TouchableOpacity
        style={{ width: 100, height: 50 }}
        onPress={clearItemAlert}
        activeOpacity={0.8}
      >
        <Image
          style={{ width: 100, height: 50 }}
          source={clearCharacterItemsButton}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  characterInfoContainer: {
    backgroundColor: "#fff",
    padding: 16,
    borderWidth: 1,
    borderRadius: 8,
  },

  infoRow: {
    flexDirection: "row",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 16,
  },

  inputText: {
    backgroundColor: "lightgrey",
    fontSize: 16,
    paddingHorizontal: 5,
    width: 95,
    marginEnd: 8,
  },

  equipmentInput: {
    backgroundColor: "lightgrey",
    fontSize: 16,
    padding: 5,
    width: 280,
    height: 200,
    marginBottom: 8,
    textAlignVertical: "top",
  },
});

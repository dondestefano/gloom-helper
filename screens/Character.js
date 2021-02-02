import React, { useContext } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Button,
  Text,
} from "react-native";
import { useSelector } from "react-redux";
import { AuthContext } from "../context/AuthContext";
import { getSelectedCharacter } from "../redux/characterReducer";
import { useFonts } from "expo-font";
import CharacterNameField from "../components/CharacterNameField";
import CharacterLevelField from "../components/CharacterLevelField";
import CharacterEquipmentField from "../components/CharacterEquipmentField";

export default function Character() {
  const { signOut } = useContext(AuthContext);

  const selectedCharacter = useSelector(getSelectedCharacter);

  const [loaded] = useFonts({
    Rooters: require("../assets/fonts/Rooters.ttf"),
  });
  const userSignOut = () => {
    signOut();
  };

  return (
    <View style={styles.container}>
      <SafeAreaView
        // Adds a safe area for Android device.
        style={{
          paddingTop: Platform.OS === "android" ? 25 : 0,
        }}
      />
      <Text
        style={{
          fontSize: 20,
          marginTop: 20,
          marginBottom: 8,
          fontFamily: loaded ? "Rooters" : null,
        }}
      >
        Character {selectedCharacter}
      </Text>
      <View
        style={{
          borderBottomColor: "grey",
          borderBottomWidth: 2,
          width: "90%",
        }}
      />
      <View style={styles.characterInfoContainer}>
        <CharacterNameField />
        <CharacterLevelField />
        <CharacterEquipmentField />
      </View>

      <Button title="Logout" onPress={userSignOut} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  characterInfoContainer: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    padding: 16,
  },
});

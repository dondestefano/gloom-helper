import React, { useState, useEffect }from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import { useFonts } from 'expo-font';

const incrementIcon = require("../assets/incrementIcon.png")
const decrementIcon = require("../assets/decrementIcon.png")

const useCounter = (initialAmount = 0,) => {
    const [amount, setAmount] = useState(initialAmount);
  
    const increment = () => setAmount((amount) => Math.min(amount + 1, 50))
    const decrement = () => setAmount((amount) => Math.max(amount - 1, 0));

    return [amount, increment, decrement];
};

export default function StatTracker() {
    const [amountXp, incrementXp, decrementXp] = useCounter(0);
    const [amountHealth, incrementHealth, decrementHealth] = useCounter(0);

    const [loaded] = useFonts({
      Rooters: require('../assets/fonts/Rooters.ttf'),
    });

    return (
      <View style={{ ...styles.container }}>
        <View style={{...styles.tracker, backgroundColor: "red"}}>
          <TouchableOpacity
            onPress={decrementHealth}
            activeOpacity={0.8}
          >
            <Image style={{ width: 30, height: 30 }} source={decrementIcon} />
          </TouchableOpacity>
          <Text style={{...styles.trackerText, fontFamily: loaded? "Rooters" : null}}>Health: {amountHealth}</Text>
          <TouchableOpacity
            onPress={incrementHealth}
            activeOpacity={0.8}
          >
            <Image style={{ width: 30, height: 30 }} source={incrementIcon} />
          </TouchableOpacity>
        </View>

        <View style={{...styles.tracker, backgroundColor: "blue"}}>
          <TouchableOpacity
            onPress={decrementXp}
            activeOpacity={0.8}
          >
            <Image style={{ width: 30, height: 30 }} source={decrementIcon} />
          </TouchableOpacity>
          <Text style={{...styles.trackerText, fontFamily: loaded? "Rooters" : null}}>XP: {amountXp}</Text>
          <TouchableOpacity
            onPress={incrementXp}
            activeOpacity={0.8}
          >
            <Image style={{ width: 30, height: 30 }} source={incrementIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
}
  
const styles = StyleSheet.create({
  container: {
      flexDirection: "row",
      justifyContent: "space-between",
      width: "100%",
      padding: 20,
      backgroundColor: "white"
  },

  trackerText: {
    width:90, 
    textAlign: "center",
    backgroundColor: "white",
    borderWidth: 1,
    fontSize: 17
  },

  tracker: {
      flexDirection: "row",
      width: 160,
      height: 50,
      alignItems: "center",
      justifyContent: "space-evenly",
      borderRadius:  3,
      borderWidth: 2,
      margin: 5
  },
});
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

const incrementIcon = require('../assets/incrementIcon.png');
const decrementIcon = require('../assets/decrementIcon.png');

const useCounter = (initialAmount = 0) => {
  const [amount, setAmount] = useState(initialAmount);

  const increment = () => setAmount(() => Math.min(amount + 1, 50));
  const decrement = () => setAmount(() => Math.max(amount - 1, 0));

  return [amount, increment, decrement];
};

const Tracker = ({ stat, color, amount, increment, decrement }) => {
  return (
    <View style={{ ...styles.tracker, backgroundColor: color }}>
      <TouchableOpacity onPress={decrement} activeOpacity={0.8}>
        <Image style={styles.buttonImage} source={decrementIcon} />
      </TouchableOpacity>

      <Text style={styles.trackerText}>
        {stat}: {amount}
      </Text>

      <TouchableOpacity onPress={increment} activeOpacity={0.8}>
        <Image style={styles.buttonImage} source={incrementIcon} />
      </TouchableOpacity>
    </View>
  );
};

export default function StatTracker() {
  const [amountXp, incrementXp, decrementXp] = useCounter(0);
  const [amountHealth, incrementHealth, decrementHealth] = useCounter(0);

  return (
    <View style={{ ...styles.container }}>
      <Tracker
        stat={'Health'}
        amount={amountHealth}
        increment={incrementHealth}
        decrement={decrementHealth}
        color={'tomato'}
      />

      <Tracker
        stat={'XP'}
        amount={amountXp}
        increment={incrementXp}
        decrement={decrementXp}
        color={'deepskyblue'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    padding: 20,
    backgroundColor: 'white',
  },

  trackerText: {
    width: 90,
    textAlign: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    fontSize: 17,
    fontFamily: 'rooters-standard',
  },

  buttonImage: {
    width: 30,
    height: 30,
  },

  tracker: {
    flexDirection: 'row',
    width: 160,
    height: 50,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderRadius: 3,
    borderWidth: 2,
    margin: 5,
  },
});

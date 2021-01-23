import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { useSelector } from 'react-redux';
import { getDrawnDeck } from '../redux/reducer';

export default function Card(card) {
    const drawnDeck = useSelector(getDrawnDeck)

    const currentCard = () =>{
        let drawLength = drawnDeck.length
        if (drawLength !== 0) {
          return drawnDeck[drawLength - 1]
        }
        else {
        return {title: "No card drawn", backgroundColor: "brown"}
        }
      }

    return(
        <View style={{...styles.card, backgroundColor: currentCard().backgroundColor}}>
            <Text style={{fontSize: 30}}>{currentCard().title}</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: 250,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:  10,
        borderWidth: 5,
        margin: 5,
    },
  });
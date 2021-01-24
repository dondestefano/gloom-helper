import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
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
            <Image source={currentCard().img} style={{ width: 170, height: 170 }}/>
        </View>
    );
}


const styles = StyleSheet.create({
    card: {
        width: 220,
        height: 150,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:  10,
        borderWidth: 5,
        margin: 5,
    },
  });
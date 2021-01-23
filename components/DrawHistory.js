import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { getDrawnDeck } from '../redux/reducer';

export default function DrawHistory() {
    const drawnDeck = useSelector(getDrawnDeck)

    const currentCard = (id) =>{
        let drawLength = drawnDeck.length
        if (id === drawnDeck[drawLength - 1].id)
        {return true} else {
            return false
        }
      }

    return(
        <SafeAreaView style={{height: 150}}>
            <FlatList
                contentContainerStyle={styles.container}
                data={drawnDeck}
                inverted
                numColumns= {5}
                renderItem={({ item }) =>
                    <View style={{...styles.card, borderColor: currentCard(item.id)? "green": "black"}}>
                        <Text style={{fontSize: 15}}>{item.title}</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flexWrap: "wrap-reverse",
        width: "100%",
        marginVertical: 8,
        padding: 20,
        margin: 10,
    },

    card: {
        width: 40,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:  10,
        borderWidth: 1,
        margin: 5
    },
  });
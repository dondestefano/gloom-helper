import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';
import { getDrawnDeck } from '../redux/reducer';

export default function DrawHistory() {
    const drawnDeck = useSelector(getDrawnDeck)

    const highlightCurrentCard = (id) =>{
        let drawLength = drawnDeck.length
        if (id === drawnDeck[drawLength - 1].id)
        {return true} else {
            return false
        }
      }

    return(
        <SafeAreaView style={{height: "25%"}}>
            <FlatList
                contentContainerStyle={styles.container}
                data={drawnDeck}
                inverted
                numColumns= {4}
                ListHeaderComponent={<Text style={{fontSize: 18, marginVertical: 8, width: 250, textAlign: "center"}}>Draw history</Text>}
                renderItem={({ item }) =>
                    <View style={{...styles.card, backgroundColor: item.backgroundColor, borderColor: highlightCurrentCard(item.id)? "lime": "black"}}>
                        <Image source={item.img} style={{ width: 40, height: 40 }}/>
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
        width: 300,
        marginVertical: 8,
        padding: 20,
    },

    card: {
        width: 50,
        height: 40,
        alignItems: "center",
        justifyContent: "center",
        borderRadius:  5,
        borderWidth: 2,
        margin: 5
    },
  });
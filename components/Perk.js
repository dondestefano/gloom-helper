import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_CARD, REMOVE_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import PropTypes from 'prop-types';
import { useFonts } from 'expo-font';

Perk.defaultProps = {
    perkRule: "No rule",
    addCards: [],
    removeCards: [],
};
  
Perk.propTypes = {
    perkRule: PropTypes.string,
    addCards: PropTypes.array,
    removeCards: PropTypes.array,
};

export default function Perk (props) {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const [hasBeenActivated, setHasBeenActivated] = useState(false)
    const dispatch = useDispatch();

    const [loaded] = useFonts({
        Rooters: require('../assets/fonts/Rooters.ttf'),
      });
    
    useEffect(() => {
        if(toggleCheckBox === true) {
            //On select.
            //Add cards from addCards and remove cards from removeCards.
            props.addCards.map(card=> dispatch({ type: ADD_CARD, payload: card }))
            props.removeCards.map(card=> dispatch({ type: REMOVE_CARD, payload: card.id }))
            setHasBeenActivated(true)
            
            //Shuffle deck when new cards are added.
            dispatch({ type: SHUFFLE_DECK })
        }

        if(toggleCheckBox === false && hasBeenActivated === true) {
            //Reverse order for deselect.
            //Add cards from removeCards and remove cards from addCards.
            props.addCards.map(card=> dispatch({ type: REMOVE_CARD, payload: card.id }))
            props.removeCards.map(card=> dispatch({ type: ADD_CARD, payload: card }))
            
            //Shuffle deck when old cards are returned.
            dispatch({ type: SHUFFLE_DECK })
        }

    }, [toggleCheckBox])

    return(
        <View>
            <View style = {styles.container}>      
            <Text style={{width: 250, fontFamily: loaded? "Rooters" : null, fontSize: 15}}>{props.perkRule}</Text>
            <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
            />
            </View>
            <View
                style={{
                    borderBottomColor: 'grey',
                    borderBottomWidth: 1,
                    width: "100%",
                    marginBottom: 16
                    }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        padding: 5,
        alignItems: "center",
        justifyContent: "space-between"
    },
});
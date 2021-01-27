import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_CARD, REMOVE_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import PropTypes from 'prop-types';

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
    
    useEffect(() => {
        if(toggleCheckBox === true) {
            props.addCards.map(card=> dispatch({ type: ADD_CARD, payload: card }))
            props.removeCards.map(card=> dispatch({ type: REMOVE_CARD, payload: card.id }))
            setHasBeenActivated(true)
        }

        if(toggleCheckBox === false && hasBeenActivated === true) {
            props.addCards.map(card=> dispatch({ type: REMOVE_CARD, payload: card.id }))
            props.removeCards.map(card=> dispatch({ type: ADD_CARD, payload: card }))
        }

        dispatch({ type: SHUFFLE_DECK })

    }, [toggleCheckBox])

    return(
        <View>
            <View style = {styles.container}>      
            <Text style={{width: 250}}>{props.perkRule}</Text>
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
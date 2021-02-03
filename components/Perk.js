import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { ADD_CARD, REMOVE_CARD, SHUFFLE_DECK } from '../redux/actionTypes';
import PropTypes from 'prop-types';

Perk.defaultProps = {
  perkRule: 'No rule',
  addCards: [],
  removeCards: [],
};

Perk.propTypes = {
  perkRule: PropTypes.string,
  addCards: PropTypes.array,
  removeCards: PropTypes.array,
};

export default function Perk(props) {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [hasBeenActivated, setHasBeenActivated] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (toggleCheckBox === true) {
      //On select.
      //Add cards from addCards and remove cards from removeCards.
      props.addCards.map((card) => dispatch({ type: ADD_CARD, payload: card }));
      props.removeCards.map((card) =>
        dispatch({ type: REMOVE_CARD, payload: card.id })
      );
      setHasBeenActivated(true);

      //Shuffle deck when new cards are added.
      dispatch({ type: SHUFFLE_DECK });
    }

    if (toggleCheckBox === false && hasBeenActivated === true) {
      //Reverse order for deselect.
      //Add cards from removeCards and remove cards from addCards.
      props.addCards.map((card) =>
        dispatch({ type: REMOVE_CARD, payload: card.id })
      );
      props.removeCards.map((card) =>
        dispatch({ type: ADD_CARD, payload: card })
      );

      //Shuffle deck when old cards are returned.
      dispatch({ type: SHUFFLE_DECK });
    }
  }, [
    dispatch,
    hasBeenActivated,
    props.addCards,
    props.removeCards,
    toggleCheckBox,
  ]);

  return (
    <View>
      <View style={styles.container}>
        <Text style={{}}>{props.perkRule}</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
      </View>
      <View style={styles.borderLine} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  text: {
    width: 250,
    fontFamily: 'rooters-standard',
    fontSize: 15,
  },

  borderLine: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: '100%',
    marginBottom: 16,
  },
});

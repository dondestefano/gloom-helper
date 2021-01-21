
import { SET_DECK, SHUFFLE_DECK } from './actionTypes';

export function deckReducer(state = { activeDeck: [] }, action) {
  console.log('** reducer function was called **');
  const { activeDeck } = state;
  switch (action.type) {
    case SET_DECK:
        console.log('** Set **');
        console.log(activeDeck)
        let deck = action.payload
        return {activeDeck: deck}
    case SHUFFLE_DECK:
        return {activeDeck: shuffleDeck(activeDeck)}
    default:
      console.log(activeDeck)
        return {activeDeck}
  }
}

export const getDeck = (state) => state.activeDeck;


  //"Fisher–Yates shuffle"
  function shuffleDeck(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue
    }
    console.log(array)

    return array;
  }

import { SET_DECK, SHUFFLE_DECK, DRAW_CARD } from './actionTypes';
import {DefaultDeck} from '../data/DefaultDeck'

export function deckReducer(state = { activeDeck: [], drawnDeck: [], currentDeck: [] }, action) {
  const { activeDeck, drawnDeck, currentDeck } = state;
  switch (action.type) {
    case SET_DECK:
        let setDeck = action.payload
        return {activeDeck: setDeck, drawnDeck: [], currentDeck: setDeck }
    case SHUFFLE_DECK:
        return {...state, activeDeck: shuffleDeck(currentDeck) }
    case DRAW_CARD:
      console.log("drawn deck", drawnDeck)
      let drawnCard = activeDeck[0]
      let newActive = activeDeck.slice(1)
        return {...state, drawnDeck: [...drawnDeck, drawnCard], activeDeck: newActive}
    default:
        return {activeDeck: DefaultDeck, drawnDeck, currentDeck: DefaultDeck}
  }
}

export const getActiveDeck = (state) => state.activeDeck;
export const getDrawnDeck = (state) => state.drawnDeck;


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
  return array;
}
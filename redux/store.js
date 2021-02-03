import { combineReducers, createStore } from 'redux';
import { deckReducer } from './deckReducer';
import { characterReducer } from './characterReducer';

const rootReducer = combineReducers({ deck: deckReducer, character: characterReducer });
export const store = createStore(rootReducer);
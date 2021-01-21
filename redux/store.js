import { createStore } from 'redux';
import { deckReducer } from './reducer';

export const store = createStore(deckReducer);
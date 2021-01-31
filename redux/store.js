import { createStore } from 'redux';
import { deckReducer } from './deckReducer';

export const store = createStore(deckReducer);
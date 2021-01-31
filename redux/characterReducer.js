import { SET_CHARACTER_HATCHET, SET_CHARACTER_SELECTED  } from './actionTypes';
import {CharacterHatchetPerks} from '../data/CharacterHatchetPerks'

const NO_CHARACTER = "NO_CHARACTER"
const HATCHET = "Hatchet"


export function characterReducer(state = { selectedCharacter: "", characterPerks: [], isCharacterSelected: false }, action) {
  const { selectedCharacter, characterPerks, isCharacterSelected } = state;
  switch (action.type) {

    case SET_CHARACTER_HATCHET:  
        return {selectedCharacter: HATCHET, characterPerks: CharacterHatchetPerks, isCharacterSelected: true}

    default:
        return {selectedCharacter: NO_CHARACTER, characterPerks: [], isCharacterSelected: false}
  }
}

export const getIsCharacterSelected = (state) => state.character.isCharacterSelected;
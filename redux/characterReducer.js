import { SET_CHARACTER_HATCHET } from './actionTypes';
import {CharacterHatchetPerks} from '../data/CharacterHatchetPerks'

const NO_CHARACTER = "NO_CHARACTER"
const HATCHET = "Hatchet"


export function characterReducer(state = { selectedCharacter: "", characterPerks: [], isCharacterSelected: false }, action) {
  const { selectedCharacter, characterPerks, isCharacterSelected } = state;
  switch (action.type) {

    case SET_CHARACTER_HATCHET:  
    let newCharacter = HATCHET
    let newPerks = CharacterHatchetPerks
        return {selectedCharacter: newCharacter, characterPerks: newPerks, isCharacterSelected: true}

    default:
        return {selectedCharacter: NO_CHARACTER, characterPerks: [], isCharacterSelected: false}
  }
}

export const getIsCharacterSelected = (state) => state.character.isCharacterSelected;
export const getCharacterPerks = (state) => state.character.characterPerks;
export const getSelectedCharacter = (state) => state.character.selectedCharacter;
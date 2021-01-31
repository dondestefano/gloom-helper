import { CHARACTER_DESELECTED, SET_CHARACTER, SET_CHARACTER_PERKS } from './actionTypes';
import {CharacterHatchetPerks} from '../data/CharacterHatchetPerks'

const NO_CHARACTER = "NO_CHARACTER"
const HATCHET = "Hatchet"


export function characterReducer(state = { selectedCharacter, characterPerks, isCharacterSelected }, action) {
  const { selectedCharacter, characterPerks, isCharacterSelected } = state;
  switch (action.type) {

    case SET_CHARACTER_HATCHET:
        return {selectedCharacter: HATCHET, characterPerks: CharacterHatchetPerks, isCharacterSelected: true}

    default:
        return {selectedCharacter: NO_CHARACTER, characterPerks: [], isCharacterSelected: false}
  }
}
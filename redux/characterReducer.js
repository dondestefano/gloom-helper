import { SET_CHARACTER_HATCHET } from './actionTypes';
import {CharacterHatchetPerks} from '../data/CharacterHatchetPerks'

const NO_CHARACTER = "NO_CHARACTER"
const HATCHET = "Hatchet"


export function characterReducer(state = { 
    selectedCharacter: "", 
    characterPerks: [], 
    isCharacterSelected: false,
    characterName: "Unnamed" }, 
    action) {

  const { selectedCharacter, characterPerks, isCharacterSelected, characterName } = state;
  switch (action.type) {

    case SET_CHARACTER_HATCHET:  
    let newCharacter = HATCHET
    let newPerks = CharacterHatchetPerks
        return {...state, selectedCharacter: newCharacter, characterPerks: newPerks, isCharacterSelected: true}

    default:
        return {...state}
  }
}

export const getIsCharacterSelected = (state) => state.character.isCharacterSelected;
export const getCharacterPerks = (state) => state.character.characterPerks;
export const getSelectedCharacter = (state) => state.character.selectedCharacter;
export const getCharacterName = (state) => state.character.characterName;
import {
  SET_CHARACTER_HATCHET,
  SET_CHARACTER_VOIDWARDEN,
  CHANGE_CHARACTERS_NAME,
  RESET_CHARACTER,
} from "./actionTypes";
import { CharacterHatchetPerks } from "../data/CharacterHatchetPerks";
import { CharacterVoidwardenPerks } from "../data/CharacterVoidwardenPerks";

const NO_CHARACTER = "NO_CHARACTER";
const HATCHET = "Hatchet";
const VOIDWARDEN = "Voidwarden";

export function characterReducer(
  state = {
    selectedCharacter: "",
    characterPerks: [],
    isCharacterSelected: false,
    characterName: "Unnamed",
  },
  action
) {
  switch (action.type) {
    case SET_CHARACTER_HATCHET:
      return {
        ...state,
        selectedCharacter: HATCHET,
        characterPerks: CharacterHatchetPerks,
        isCharacterSelected: true,
      };

    case SET_CHARACTER_VOIDWARDEN:
      return {
        ...state,
        selectedCharacter: VOIDWARDEN,
        characterPerks: CharacterVoidwardenPerks,
        isCharacterSelected: true,
      };

    case CHANGE_CHARACTERS_NAME:
      let newName = action.payload;
      return { ...state, characterName: newName };

    case RESET_CHARACTER:
      return {
        selectedCharacter: "",
        characterPerks: [],
        isCharacterSelected: false,
        characterName: "Unnamed",
      };

    default:
      return { ...state };
  }
}

export const getIsCharacterSelected = (state) =>
  state.character.isCharacterSelected;
export const getCharacterPerks = (state) => state.character.characterPerks;
export const getSelectedCharacter = (state) =>
  state.character.selectedCharacter;
export const getCharacterName = (state) => state.character.characterName;

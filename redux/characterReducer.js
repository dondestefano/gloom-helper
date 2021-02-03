import {
  SET_CHARACTER_HATCHET,
  SET_CHARACTER_VOIDWARDEN,
  CHANGE_CHARACTERS_NAME,
  RESET_CHARACTER,
  SET_EXPERIENCE,
} from "./actionTypes";
import { CharacterHatchetPerks } from "../data/CharacterHatchetPerks";
import { CharacterVoidwardenPerks } from "../data/CharacterVoidwardenPerks";

const HATCHET = "Hatchet";
const VOIDWARDEN = "Voidwarden";

export function characterReducer(
  state = {
    selectedCharacter: "",
    characterPerks: [],
    isCharacterSelected: false,
    characterName: "Unnamed",
    characterExperience: 0,
    characterLevel: 1,
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

    case SET_EXPERIENCE:
      let experienceValue = action.payload;
      let levelValue = determineLevel(experienceValue);
      return {
        ...state,
        characterExperience: experienceValue,
        characterLevel: levelValue,
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

function determineLevel(experienceValue) {
  // Return correct level based on amount of experiecne gained.
  if (experienceValue >= 500) {
    return 9;
  } else if (experienceValue >= 420) {
    return 8;
  } else if (experienceValue >= 345) {
    return 7;
  } else if (experienceValue >= 275) {
    return 6;
  } else if (experienceValue >= 210) {
    return 5;
  } else if (experienceValue >= 150) {
    return 4;
  } else if (experienceValue >= 95) {
    return 3;
  } else if (experienceValue >= 45) {
    return 2;
  } else {
    return 1;
  }
}

export const getIsCharacterSelected = (state) =>
  state.character.isCharacterSelected;
export const getCharacterPerks = (state) => state.character.characterPerks;
export const getSelectedCharacter = (state) =>
  state.character.selectedCharacter;
export const getCharacterName = (state) => state.character.characterName;
export const getCharacterLevel = (state) => state.character.characterLevel;
export const getCharacterExperience = (state) =>
  state.character.characterExperience;

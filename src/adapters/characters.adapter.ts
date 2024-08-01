import { CharacterResponse, Character } from "../models/characters.model";

export const CharacterAdapter = (characterResponse: CharacterResponse) : Character[] => {
    return characterResponse.results
};
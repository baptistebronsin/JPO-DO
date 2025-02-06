import { Character } from "../models/character.model";

const API_URL = "https://rickandmortyapi.com/api/character";

export const getCharacterById = async (id: number): Promise<Character> => {
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();

    return {
        id: data.id,
        name: data.name,
        species: data.species,
        origin: data.origin.name,
        image: data.image,
        nbEpisode: data.episode.length
    }
}
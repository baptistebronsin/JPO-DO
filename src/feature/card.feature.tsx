import { useEffect, useState } from "react";
import { formatName } from "../utils/format_name.function";
import { Character } from "../models/character.model";
import { getCharacterById } from "../api/get_character.api";

interface CardProps {
    firstName: string;
    characterId: number;
}

const Card: React.FC<CardProps> = ({ firstName, characterId }) => {
    const [character, setCharacter] = useState<Character | undefined>(undefined);
    const [error, setError] = useState<string | undefined>(undefined);

    useEffect(() => {
        const fetchCharacter = async () => {
            try {
                const character: Character = await getCharacterById(characterId);
                setCharacter(character);
            } catch (error) {
                if (error instanceof Error) {
                    setError(`Une erreur est survenue lors de la récupération du personnage n°${characterId}`);
                } else {
                    console.error(error);
                }
            }
        }

        fetchCharacter();
    }, [characterId]);

    return (
        <div className="flex flex-col gap-4 px-3 py-3 rounded-sm bg-white w-[350px]" style={error ? { border: '1px solid red' } : {}}>
            <p><span className="text-[#821980]">{ formatName(firstName) }</span> a choisi :</p>
            {
                character ? (
                    <div className="flex flex-row gap-4">
                        <img rel={`Personnage de Rick et Morty numéro ${characterId}`} src={ character.image } className="w-[100px] h-[100px] rounded-sm object-cover" />
                        <div className="flex flex-col justify-between">
                            <p>{ character.name }</p>
                            <div className="flex flex-col">
                                <p><span className="text-[#9FA5AD]">Espèce :</span>&nbsp;{ character.species }</p>
                                <p><span className="text-[#9FA5AD]">Origine :</span>&nbsp;{ character.origin }</p>
                                <p><span className="text-[#9FA5AD]">Nombre d’épisode :</span>&nbsp;{ character.nbEpisode }</p>
                            </div>
                        </div>
                    </div>
                ) : (
                    error ? (
                        <p className="text-red-500 font-bold">{ error }</p>
                    ) : <p>loading</p>
                )
            }
        </div>
    )
}

export default Card;
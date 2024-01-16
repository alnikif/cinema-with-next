import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {useRouter} from 'next/router';
import { StarWarsType } from '../../../types/starWarsTypes';
import { TheStarWarsCharacter } from './TheStarWarsCharacter/TheStarWarsCharacter';

const TheStarWarsCharacterPage = () => {
    const [starWarsCharacter, setStarWarsCharacter] = useState<StarWarsType | null>(null);
    const { query: characterId } = useRouter();
    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    const {starWarsId} = characterId;

    useEffect(() => {
        setLoading(true);
        axios
            .get(`https://rawcdn.githack.com/akabab/starwars-api/0.2.1/api/id/${starWarsId}.json`)
            .then((response) => {
                const { data } = response;
                console.log(response);
                setStarWarsCharacter(data);
            })
            .catch((apiError: unknown) => {
                if (apiError instanceof Error) {
                    setError(apiError);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [starWarsId]);

    console.log(starWarsCharacter);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!starWarsCharacter) {
        return <div>No data</div>;
    }

    return (
        <div>
            <TheStarWarsCharacter characterData={starWarsCharacter} />
        </div>
    );
};

export default TheStarWarsCharacterPage;

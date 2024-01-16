import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

import { HarryPotterType } from '../../../types/harryPotterTypes';
import { HarryPotterCharacter } from './HarryPotterCharacter/HarryPotterCharacter';

const HarryPotterCharacterPage = () => {
    const [harryPotterCharacter, setHarryPotterCharacter] = useState<HarryPotterType[] | null>(null);
    const { query: characterId } = useRouter();
    const { harryPotterId } = characterId;

    const [error, setError] = useState<Error | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios
            .get(`https://hp-api.onrender.com/api/character/${harryPotterId}`)
            .then((response) => {
                setHarryPotterCharacter(response.data);
            })
            .catch((apiError: unknown) => {
                if (apiError instanceof Error) {
                    setError(apiError);
                }
            })
            .finally(() => {
                setLoading(false);
            });
    }, [harryPotterId]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!harryPotterCharacter) {
        return <div>No data</div>;
    }
    return (
        <div>
            <HarryPotterCharacter characterData={harryPotterCharacter} />
        </div>
    );
};

export default  HarryPotterCharacterPage;

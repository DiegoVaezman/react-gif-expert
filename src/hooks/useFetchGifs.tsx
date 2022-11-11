import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [gifs, setGifs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const getGifsData = async () => {
        setIsLoading(true);
        const gifs = await getGifs(category);
        setGifs(gifs);
        setIsLoading(false);
    };
    useEffect(() => {
        getGifsData();
    }, []);
    return {
        gifs,
        isLoading,
    };
};

import React, { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifItem } from './GifItem';
import PropsTypes from 'prop-types';

export const GifGrid = ({ category }) => {
    const { gifs, isLoading } = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className='card-grid'>
                {isLoading && <p>Cargando...</p>}
                {gifs.map((gif) => (
                    <GifItem key={gif.id} {...gif} />
                ))}
            </div>
        </>
    );
};

GifGrid.propTypes = {
    category: PropsTypes.string.isRequired,
};

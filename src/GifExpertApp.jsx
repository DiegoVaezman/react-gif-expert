import React, { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch']);

    const onAddCategory = (newCat) => {
        if (categories.includes(newCat)) return;
        setCategories((prev) => [newCat, ...prev]);
    };
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewValue={onAddCategory} />
            {categories.map((category) => (
                <GifGrid key={category} category={category} />
            ))}
        </>
    );
};

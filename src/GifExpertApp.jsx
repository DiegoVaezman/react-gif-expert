import React, { useState } from 'react';
import { AddCategory, GiftGrid } from './components';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Universe']);

    const onAddCategory = (newCat) => {
        if (categories.includes(newCat)) return;
        setCategories((prev) => [newCat, ...prev]);
    };
    return (
        <>
            <h1>Gif Expert App</h1>
            <AddCategory onNewValue={onAddCategory} />
            {categories.map((category) => (
                <GiftGrid key={category} category={category} />
            ))}
        </>
    );
};

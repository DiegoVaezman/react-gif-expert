import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewValue }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        if (!inputValue.trim().length) return;
        onNewValue(inputValue.trim());
        setInputValue('');
    };

    return (
        <form onSubmit={onSubmit} aria-label='form'>
            <input
                type='text'
                placeholder='Buscar gifs'
                value={inputValue}
                onChange={onInputChange}
            />
        </form>
    );
};

AddCategory.propTypes = {
    onNewValue: PropTypes.func.isRequired,
};

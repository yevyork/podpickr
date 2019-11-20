import React from 'react';
import '../shared/styles/Input.css'

export const Input = ({ onChange, name, placeholder, required, value }) => {
    return (
        <div className='input'>
            <input 
            name={name}
            value={value}
            required={required}
            onChange={e => onChange(e)}
            />
            <label htmlFor='name'>
                <span>{placeholder}</span>
            </label>
        </div>
    );
}
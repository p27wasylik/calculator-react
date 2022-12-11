import './style.css';
import React, { useState } from 'react';

const Label = ({ placeholder, placeholder2, sign }) => {
    const [currency, setCurrency] = useState("");
    const multiply = { currency } * +4.86;
    const divide = { currency } / +4.86;


    return (
        <label>
            <input
                value={currency}
                className="input"
                type="number"
                placeholder={placeholder}
                step="0.1"
                disable={false}
                onChange={({ target }) => setCurrency(target.value)}
            />
            <input
                value={
                    { sign } ? multiply : divide
                }
                className="input"
                type="number"
                placeholder={placeholder2}
                step="0.1"
                disable={true}
                onChange={({ target }) => setCurrency(target.value)}
            />
        </label>
    );
}

export default Label;
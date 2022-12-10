import './style.css';
import React, { useState } from 'react';

const Label = ({ placeholder, disable }) => {
    const [currency, setCurrency] = useState("");

    return (
        <label>
            <input
                value={currency}
                className="input"
                type="number"
                placeholder={placeholder}
                step="0.1"
                disable={disable}
                onChange={({ target }) => setCurrency(target.value)}
            />
        </label>
    );
}

export default Label;
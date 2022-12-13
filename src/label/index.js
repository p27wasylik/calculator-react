import './style.css';
import React, { useState } from 'react';

const Label = ({ placeholder, sign }) => {
    const [currency, setCurrency] = useState("");
    const result = sign ? currency * +4.86 : currency / +4.86;



    return (
        <label
            className="label">

            <input
                value={currency}
                className="label__input"
                type="number"
                placeholder={placeholder}
                step="0.1"
                disable={false}
                onChange={({ target }) => setCurrency(target.value)}
            />

            <span
                className="label__resultSpan"
            >
                {result.toFixed(2)}{sign ? " EUR" : " PLN"}
            </span>
        </label>
    );
}

export default Label;
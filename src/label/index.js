import './style.css';
import React, { useState } from 'react';

const Label = ({ placeholder, placeholder2, sign }) => {
    const [currency, setCurrency] = useState("");
    



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
                value={{sign} ? {currency} * +4.86 : {currency} / +4.86}
                className="input"
                type="number"
                placeholder={placeholder2}
                step="0.1"
                disable={true}
            />
        </label>
    );
}

export default Label;
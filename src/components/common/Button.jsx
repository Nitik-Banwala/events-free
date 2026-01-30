import React from 'react';

const Button = ({ text, style }) => {
    return (
        <button
            className={`cursor-pointer ${style} `}
        >
            {text}
        </button>
    );
};

export default Button;




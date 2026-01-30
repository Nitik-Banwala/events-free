import React from "react";

const Input = ({
    type = "text",
    name,
    value,
    onChange,
    placeholder,
    style = "",
    error,
}) => {
    return (
        <input
            type={type}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={error || placeholder}
            className={`border px-4 py-3 rounded-[5px] outline-none
        ${error ? "border-red-500 placeholder-red-500" : ""}
        ${style}
      `}
        />
    );
};

export default Input;

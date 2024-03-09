// Input.js

import React from "react";

const Input = ({ ...props }) => {
    return (
        <input {...props} className="px-2 py-1 border border-gray-300 rounded" />
    );
};

export default Input;

// Button.js

import React from "react";

const Button = ({ children, ...props }) => {
    return (
        <button {...props} className="px-4 py-2 rounded bg-green-600 text-white">
            {children}
        </button>
    );
};

export default Button;

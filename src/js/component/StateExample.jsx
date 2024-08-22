import React, { useState } from "react";

export const StateExample = () => {
    const [text, setText] = useState('Hola Mundo');

    return (
        <div>
            <div className="alert alert-warning" role="alert">
                {text}
            </div>
        </div>
    );
};
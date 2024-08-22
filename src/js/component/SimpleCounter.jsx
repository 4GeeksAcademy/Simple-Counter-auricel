import React, { useState } from "react";

export const SimpleCounter = () => {
    const [text, setText] = useState('Hola Mundo');

    return (
        <div>
            <div className="alert alert-warning" role="alert">
                {text}
            </div>
        </div>
    );
};
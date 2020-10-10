import React, { createContext, useState } from 'react';

export const counterContext = createContext(25);

export const GlobalProvider = ({ children }) =>
{
    // console.log(children);
    let counter = useState(0);
    console.log(counter);
    return (
        <counterContext.Provider value={counter}>
            {children}
        </counterContext.Provider>
    );
}
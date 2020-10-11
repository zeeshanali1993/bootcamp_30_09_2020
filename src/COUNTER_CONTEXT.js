import React, { createContext, useState, useReducer } from 'react';
import COUNTER_REDUCER from './COUNTER_REDUCER';

export const counterContext = createContext(25);

export const GlobalProvider = ({ children }) =>
{
    const counter = useState(0);
    const counter1 = 0;
    let [state, dispatch] = useReducer(COUNTER_REDUCER, counter1);
    function changeReducerState(operation)
    {
        if (operation === 'increment')
            dispatch('increment');
        else if (operation === 'decrement')
            dispatch('decrement');
        else
            dispatch('none')
    }

    return (
        <counterContext.Provider value={{ counter, state, changeReducerState }}>
            {children}
        </counterContext.Provider>
    );
}
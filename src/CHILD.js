import React, { useContext } from 'react';
import { counterContext } from './COUNTER_CONTEXT';
import './App.css';

export default function Child()
{
    // console.log('VALUE IS: ' + useContext(GlobalProvider));
    let childCounterValue = useContext(counterContext);
    // console.log(childCounterValue);
    return (
        <div className='contextAddition'>
            <h1 className='heading1'>Counter: {childCounterValue[0]}</h1>
            <button className='btn' onClick={() =>
            {
                childCounterValue[1](childCounterValue[0] + 1)
            }}>Increment by Context</button>
            <button className='btn' onClick={() =>
            {
                childCounterValue[1](childCounterValue[0] >= 1 ? childCounterValue[0] - 1 : 0)
            }}>Decrement by Context</button>
        </div >
    );
}
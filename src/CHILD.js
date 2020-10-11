import React, { useContext } from 'react';
import { counterContext } from './COUNTER_CONTEXT';
import './App.css';

export default function Child()
{
    let { counter } = useContext(counterContext);
    // console.log(counter);
    return (
        <div className='contextAddition'>
            <h1 className='heading1'>Counter: {counter[0]}</h1>
            <button className='btn' onClick={() =>
            {
                counter[1](counter[0] + 1)
            }}>Increment by Context</button>
            <button className='btn' onClick={() =>
            {
                counter[1](counter[0] >= 1 ? counter[0] - 1 : 0)
            }}>Decrement by Context</button>
        </div >
    );
}
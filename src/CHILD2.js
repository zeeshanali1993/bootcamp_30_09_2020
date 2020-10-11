import React, { useContext } from 'react';
import { counterContext } from './COUNTER_CONTEXT';
import './App.css';

const Child2 = () =>
{
    const { changeReducerState } = useContext(counterContext);
    const { state } = useContext(counterContext);
    return (
        <div className='reducerAddition'>
            <h1 className='heading1' id='reducerCounter'>Counter: {state}</h1>
            <button className='btn' onClick={
                () =>
                {
                    changeReducerState('increment')
                }
            }>Increment by reducer</button>
            <button className='btn' onClick={
                () =>
                {
                    state >= 1 ? changeReducerState('decrement') : changeReducerState('none');
                }
            }>Decrement by reducer</button>
        </div>
    );

}
export default Child2;
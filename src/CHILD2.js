import React, { useReducer } from 'react';
import COUNTER_REDUCER from './COUNTER_REDUCER';
import './App.css';

const Child2 = () =>
{
    let [state, dispatch] = useReducer(COUNTER_REDUCER, 0);
    // console.log(state);
    return (
        <div className='reducerAddition'>
            <h1 className='heading1' id='reducerCounter'>Counter: {state}</h1>
            <button className='btn' onClick={
                () =>
                {
                    dispatch('increment')
                }
            }>Increment by reducer</button>
            <button className='btn' onClick={
                () =>
                {
                    state >= 1 ? dispatch('decrement') : dispatch('none');
                }
            }>Decrement by reducer</button>
        </div>
    );

}
export default Child2;
import React, { useState } from 'react';
// hello
import COUNTER_CONTEXT from './COUNTER_CONTEXT';
import Parent from './PARENT'
// import logo from './logo.svg';
// import './App.css';

function GrandParent()
{
  let counter = useState(0);
  return (
    <COUNTER_CONTEXT.Provider value={counter} >
      <div>
        <Parent />
      </div>
    </COUNTER_CONTEXT.Provider >
  );
}

export default GrandParent;

import React from 'react';
import { GlobalProvider } from './COUNTER_CONTEXT';
import Parent from './PARENT'
// import logo from './logo.svg';
// import './App.css';

function GrandParent()
{
  // let counter = useState(0);
  return (
    <GlobalProvider>

      <Parent />

    </GlobalProvider>
  );
}

export default GrandParent;

import React from 'react';
import { GlobalProvider } from './COUNTER_CONTEXT';
import Parent from './PARENT'

function GrandParent()
{
  return (
    <GlobalProvider>
      <Parent />
    </GlobalProvider>
  );
}
export default GrandParent;

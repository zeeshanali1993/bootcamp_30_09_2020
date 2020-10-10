import React from 'react';
import Child from './CHILD';
import Child2 from './CHILD2';

export default function Parent()
{
    return (
        <div>
            <Child />
            <Child2 />
        </div>
    );
}
import React from 'react'
import { useState } from 'react';

export default function APP () {
    const [count, setCount] = useState(0);
    function changeCount (count) {
        setTimeout(() => {
            alert("count=" + count);
        }, 1000);
    }
    return (
        <div>
            <h1>count = {count}</h1>
            <button onClick={() => setCount(count + 1)}>count+1</button>
            <button onClick={() => changeCount(count)}>alert </button>
        </div>
    )
}

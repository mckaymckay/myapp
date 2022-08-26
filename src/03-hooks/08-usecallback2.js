import React, { useState } from 'react'

export default function APP () {
    const [text, setText] = useState('')
    const [list, setList] = useState([])
    function handleInput (evt) {
        setText(evt.target.value)
    }
    function handleAdd () {
        setList([...list, text])
    }
    return (
        <div>
            <input value={text} onChange={(evt) => handleInput(evt)}></input>
            <button onClick={() => handleAdd()}>click</button>
            <ul>
                {list.map((item, index) =>
                    <li key={index} >{item}</li>
                )}
            </ul>
        </div>
    )
}
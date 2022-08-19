import React, { useState } from 'react'

export default function APP () {
    const [text, setText] = useState("")
    const [list, setList] = useState([1, 2, 3])
    const handleChange = (evt) => {
        setText(evt.target.value)
    }
    function handleAdd () {
        // const newList = [...list]
        // newList.push(text)
        // setList(newList)
        setList(...list, text)
        setText("")
    }
    const handleDel = (index) => {
        const newList = [...list]
        newList.splice(index, 1)
        setList(newList)
    }
    return (
        <div>
            <input onChange={(evt) => handleChange(evt)} value={text}></input>
            <button onClick={() => handleAdd()}>add</button>
            <ul>
                {list.map((item, index) =>
                    <li key={index}>
                        {item}
                        <button
                            style={{ marginLeft: '10px' }}
                            onClick={() => handleDel(index)}>
                            del
                        </button>
                    </li>
                )}
            </ul>
            {list.length === 0 && <div>暂无待办事项</div>}
        </div>
    )

}

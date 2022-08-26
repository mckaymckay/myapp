import React, { useState, useRef } from 'react'

export default function APP () {

    const [list, setList] = useState([])
    const mytext = useRef()

    const handleAdd = () => {
        const newList = [...list]
        newList.push({
            text: mytext.current.value,
            id: Math.random() * 1000000000,
            isChecked: false
        })
        setList(newList)
        mytext.current.value = ''

    }
    const handleDelete = (index) => {
        const newli = [...list]
        newli.splice(index, 1)
        setList(newli)
    }
    function handleChecked (index) {
        const checkedList = [...list]
        checkedList[index].isChecked = !checkedList[index].isChecked
        setList(checkedList)
    }
    return (
        <div>
            <input ref={mytext}></input>
            <button onClick={() => {
                handleAdd()
            }}>Add</button>
            {!list.length && <div >暂无待办事项</div>}
            <ul>
                {list.map((v, index) => (
                    <li key={v.id} >
                        <input
                            type='checkbox'
                            checked={v.isChecked} onChange={() => {
                                handleChecked(index)
                            }}
                        ></input>
                        <span style={{ textDecoration: v.isChecked ? 'line-through' : '' }}>{v.text}</span>
                        < button onClick={() => {
                            handleDelete(index)
                        }}>delete
                        </button>
                    </li>
                ))
                }
            </ul>
        </div >
    )
}


/*
useRef的应用：
1. 绑定在dom节点上
2. 以闭包的原理存值（记忆函数）-没写例子
*/
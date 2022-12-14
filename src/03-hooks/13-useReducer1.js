import React, { useReducer } from 'react'

// 处理函数
const reducer = (prevState, action) => {
    const newState = { ...prevState }
    switch (action.type) {
        case 'minus':
            newState.count--
            return newState
        case 'add':
            newState.count++
            return newState
        default:
            return prevState
    }
}
// 外部的对象
const initstate = {
    count: 0
}

export default function APP () {
    const [state, dispatch] = useReducer(reducer, initstate)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'minus'
                })
            }}>-</button>
            {state.count}
            <button onClick={() => {
                dispatch({
                    type: 'add'
                })
            }}>+</button>
        </div>
    )
}

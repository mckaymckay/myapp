import React, { useContext, useReducer } from 'react'

const reducer = (prevState, action) => {
    const newState = { ...prevState }
    switch (action.type) {
        case 'change-a':
            newState.a = 'aaaaa'
            return newState
        case 'change-b':
            newState.b = 'bbbbb'
            return newState
        default:
            return prevState
    }
}
const initState = {
    a: 22222,
    b: 333333
}
const GlobalContext = React.createContext()
export default function APP () {
    const [state, dispatch] = useReducer(reducer, initState)
    return (
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </GlobalContext.Provider>
    )
}

function Child1 () {
    const { dispatch } = useContext(GlobalContext)
    return (
        <div>
            <button onClick={() => {
                dispatch({
                    type: 'change-a'
                })
            }}>改变2</button>
            <button onClick={() => {
                dispatch({
                    type: 'change-b'
                })
            }}>改变3</button>
        </div >
    )
}

function Child2 () {
    const { state } = useContext(GlobalContext)
    return <div>
        child2-{state.a}
    </div>
}

function Child3 () {
    const { state } = useContext(GlobalContext)
    return <div>
        child3-{state.b}
    </div>
}
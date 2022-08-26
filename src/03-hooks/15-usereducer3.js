import React, { useContext, useEffect, useReducer } from 'react'
import axios from 'axios'
import './01-css/04-css.css'


const initState = {
    info: '',
    filmLists: []
}
const reducer = (prevState, action) => {
    const newState = { ...prevState }
    switch (action.type) {
        case 'getFilmLists':
            newState.filmLists = action.value
            return newState
        case 'changeFilm':
            newState.info = action.value
            return newState
        default:
            return prevState
    }
}
// 创建context对象
const GlobalContext = React.createContext()
export default function App () {
    const [state, dispatch] = useReducer(reducer, initState)
    useEffect(() => {
        axios.get('/filmdata.json').then((res) => {
            dispatch({
                type: 'getFilmLists',
                value: res.data
            })
        })
    }, [])
    return (
        // 包裹在整个div的外面，固定的属性value
        <GlobalContext.Provider value={{
            state,
            dispatch
        }}>
            <div>
                {state.filmLists.map(v =>
                    <Film key={v.filmId} {...v}></Film>
                )}
                <FilmDetail></FilmDetail>
            </div>
        </GlobalContext.Provider>
    )

}

function Film (props) {
    const { poster, name, grade, synopsis } = props
    const { dispatch } = useContext(GlobalContext)
    return (
        <div className='filmitem' onClick={() => {
            dispatch({
                type: 'changeFilm',
                value: synopsis
            })
        }}>
            <img src={poster} alt="lll"></img>
            <h4>{name}</h4>
            <div>观众评分: {grade}</div>
        </div>
    )

}
function FilmDetail () {
    const { state } = useContext(GlobalContext)
    return <div className='filmdetail'>
        <div >{state.info}</div>
    </div>
}

/*
跨组件的通信方案
*/
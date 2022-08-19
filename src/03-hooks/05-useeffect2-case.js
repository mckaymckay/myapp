import axios from 'axios'
import React, { useEffect, useState } from 'react'


export default function APP () {
    const [type, setType] = useState(1)

    return (
        <div>
            <ul>
                <li onClick={() => {
                    setType(1)
                }}>正在热映</li>
                <li onClick={() => {
                    setType(2)
                }}>即将上映</li>
            </ul>
            <FilmList value={type}></FilmList>
        </div>
    )
}

function FilmList (props) {
    const [list, setList] = useState([])
    useEffect(() => {
        if (props.value === 1) {
            getNow()
        } else {
            getComing()
        }
    }, [props.value])
    const getNow = () => {
        axios.get('./filmdata.json')
            .then(res => {
                setList(res.data.slice(0, 5))
            })

    }
    const getComing = () => {
        axios.get('./filmdata.json')
            .then(res => {
                setList(res.data.slice(5))
            })
    }

    return (
        <div>
            <ul>
                {list.map(item =>
                    <li key={item.filmId}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}







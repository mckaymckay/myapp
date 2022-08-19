import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function APP () {
    const [filmlist, setFilmlist] = useState([])
    useEffect(() => {
        axios.get("./filmdata.json")
            .then(res => {
                setFilmlist(res.data)
            })
    }, [])
    return (
        <div>
            <ul>
                {filmlist.map(item =>
                    <li key={item.filmId}>{item.name}</li>
                )}
            </ul>
        </div>
    )
}

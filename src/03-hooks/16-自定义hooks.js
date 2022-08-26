import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import './01-css/03-css.css'

// 只要是use开头的自定义函数，就可以在里边使用hooks函数 
function useFilmLists () {
    const [cinemaLists, setcinemaLists] = useState([])
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=707724',
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            setcinemaLists(res.data.data.cinemas)
        })
    }, [])
    return cinemaLists
}
function useFilter (cinemaLists, inputvalue) {
    return useMemo(() =>
        cinemaLists.filter(v => v.name.toUpperCase()
            .includes(inputvalue.toUpperCase())
            || v.address.toUpperCase().includes(inputvalue.toUpperCase()))
        , [cinemaLists, inputvalue])
}

export default function Cinema () {
    const [inputvalue, setinputvalue] = useState('')
    const cinemaLists = useFilmLists()
    const getCinemaList = useFilter(cinemaLists, inputvalue)

    return (
        <div>
            <input value={inputvalue} onChange={(e) => {
                setinputvalue(e.target.value)
            }}></input>
            {
                getCinemaList.map(v => (
                    <dl key={v.cinemaId}>
                        <dt>{v.name}</dt>
                        <dd>{v.address}</dd>
                    </dl>
                ))
            }

        </div>
    )

}

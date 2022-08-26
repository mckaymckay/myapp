import React, { useEffect, useMemo, useState } from 'react'
import axios from 'axios'
import './01-css/03-css.css'

export default function Cinema () {
    const [cinemeLists, setcinemeLists] = useState([])
    const [inputvalue, setinputvalue] = useState('')

    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=707724',
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            setcinemeLists(res.data.data.cinemas)
        })
    }, [])

    // useMemo拿到函数的返回结果，给前边的参数，所以前边的参数是个参数不是函数
    const getCinemaList = useMemo(() =>
        cinemeLists.filter(v => v.name.toUpperCase()
            .includes(inputvalue.toUpperCase())
            || v.address.toUpperCase().includes(inputvalue.toUpperCase()))
        , [cinemeLists, inputvalue])
    function handleChange (event) {
        const value = event.target.value
        setinputvalue(value)
    }
    return (
        <div>
            <input value={inputvalue} onChange={(e) => {
                handleChange(e)
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

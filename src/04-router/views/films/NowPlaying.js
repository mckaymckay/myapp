import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function NowPlaying (props) {
    const [filmLists, setFilmLists] = useState([])
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=961404',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
                'X-Host': ' mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films)
            setFilmLists(res.data.data.films)
        })
    }, [])
    function handleDetail (id) {
        // 1. 动态路由传参，路由里设置占位符
        props.history.push(`/detail/${id}`)
        // 2. query参数，不需要设置占位符
        // props.history.push({ pathname: '/detail', query: { filmId: id } })
        // 3. state参数，不需要设置占位符
        // props.history.push({ pathname: '/detail', state: { filmId: id } })

    }
    return (
        <div>

            <ul>
                {filmLists.map(item =>
                    <FilmItem key={item.filmId} {...item} {...props}></FilmItem>
                )}
            </ul>
        </div>
    )
}

function FilmItem (props) {
    // 注意这个props的来源和值
    function handleDetail (id) {
        // 1. 动态路由传参，路由里设置占位符
        props.history.push(`/detail/${id}`)
        // 2. query参数，不需要设置占位符
        // props.history.push({ pathname: '/detail', query: { filmId: id } })
        // 3. state参数，不需要设置占位符
        // props.history.push({ pathname: '/detail', state: { filmId: id } })

    }
    const { filmId, name } = props
    return <li onClick={() => handleDetail(filmId)}>{name}</li>
}

import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'

export default function ComingSoon (props) {
    const [filmLists, setFilmLists] = useState([])
    const history = useHistory()
    useEffect(() => {
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=2&k=3733683',
            headers: {
                'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
                'X-Host': ' mall.film-ticket.film.list'
            }
        }).then(res => {
            console.log(res.data.data.films)
            setFilmLists(res.data.data.films)
        }
        )

    }, [])
    return (
        <div>
            <ul>
                {filmLists.map(item =>
                    <WithFilmItem key={item.filmId} {...item} ></WithFilmItem>
                )}
            </ul>
        </div>
    )
}

function FilmItem (props) {
    console.log(props)
    function handleDetail (id) {
        console.log(id)
        // 注意这个props的来源和值
        props.history.push(`/detail/${id}`)
    }
    const { filmId, name } = props
    return <li onClick={() => handleDetail(filmId)}>{name}</li>
}

// 在FilmItem外边withRouter包裹一层父组件，让父组件来提供history等方法
const WithFilmItem = withRouter(FilmItem)

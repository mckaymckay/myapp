import React, { Component } from 'react'
import axios from 'axios'
import '../01-css/03-css.css'
import BScroll from '@better-scroll/core'

export default class Cinema extends Component {
    state = {
        cinemeLists: [],
        allLists: []
    }
    constructor() {
        super()
        axios({
            url: 'https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=707724',
            headers: {
                "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
                "X-Host": "mall.film-ticket.cinema.list"
            }
        }).then(res => {
            this.setState({
                allLists: res.data.data.cinemas,
                cinemeLists: res.data.data.cinemas
            })
            console.log(111)
            new BScroll('.wrapper')
        })
    }

    render () {
        return (
            <div>
                <input onChange={(e) => {
                    this.handleChange(e)
                }}></input>

                <div className='wrapper' style={{ height: '800px', background: 'yellow', overflow: 'hidden' }}>
                    <div className='content'>
                        {this.state.cinemeLists.map(v => (
                            <dl key={v.cinemaId}>
                                <dt>{v.name}</dt>
                                <dd>{v.address}</dd>
                            </dl>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
    handleChange (event) {
        const value = event.target.value
        const allCinema = [...this.state.allLists]
        const result = allCinema.filter(v => v.name.toUpperCase().includes(value.toUpperCase()) || v.address.toUpperCase().includes(value.toUpperCase()))
        this.setState({
            cinemeLists: result
        })
    }
}

import React, { Component } from 'react'
import axios from 'axios'
import './01-css/03-css.css'

export default class Cinema extends Component {
    state = {
        cinemeLists: [],
        inputvalue: ''
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
        })
    }

    render () {
        return (
            <div>
                <input value={this.state.inputvalue} onChange={(e) => {
                    this.handleChange(e)
                }}></input>

                {this.getCinemaList().map(v => (
                    <dl key={v.cinemaId}>
                        <dt>{v.name}</dt>
                        <dd>{v.address}</dd>
                    </dl>
                ))}

            </div>
        )
    }
    handleChange (event) {
        const value = event.target.value
        this.setState({
            inputvalue: value
        })
    }
    getCinemaList () {
        return this.state.cinemeLists.filter(v => v.name.toUpperCase()
            .includes(this.state.inputvalue.toUpperCase())
            || v.address.toUpperCase().includes(this.state.inputvalue.toUpperCase()))
    }

}

import { toHaveStyle } from '@testing-library/jest-dom/dist/matchers'
import axios from 'axios'
import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        filmlist: [],
        currentFilm: {}
    }
    constructor() {
        super()
        // axios({
        //     url: 'https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=850493',
        //     headers: {
        //         "X-Client-Info": '{"a":"3000","ch":"1002","v":"5.2.1","e":"1660563256469624609046529","bc":"110100"}',
        //         "X-Host": "mall.film-ticket.film.list"
        //     }
        // }).then(res => {
        //     this.setState({
        //         filmlist: res.data.data.films
        //     })
        // })
        axios.get("/filmdata.json").then(res => {
            this.setState({
                filmlist: res.data
            })
        })
    }
    render () {
        return (
            <div>
                {this.state.filmlist.map(item =>
                    <FilmItem
                        // value={item}
                        {...item}
                        key={item.filmId}
                        setCurrentFilm={(item) => this.setCurrentFilm(item)}
                    ></FilmItem>
                )}
                <FilmDetail value={this.state.currentFilm}></FilmDetail>
            </div>
        )
    }
    setCurrentFilm (val) {
        this.setState({
            currentFilm: val
        })
    }
}

class FilmItem extends Component {
    obj = {
        width: '200px',
        height: '200px',
        overflow: ' scroll',
        color: '#666',
        marginBottom: '10px'
    }
    render () {
        let { name, poster } = this.props
        return (
            <div onClick={() => this.getClickData(this.props)}>
                {/* <div style={{ color: 'blue' }} >{this.props?.name}</div>
                <div style={this.obj} >{this.props?.synopsis}</div> */}
                <h4>{name}</h4>
                <img style={{ width: "200px" }} src={poster} alt={name}></img>
            </div>
        )
    }
    getClickData (data) {
        this.props.setCurrentFilm(data)
    }
}

class FilmDetail extends Component {
    obj = {
        position: "fixed",
        top: "100px",
        right: "0",
        height: "300px",
        width: "200px",
        backgroundColor: "yellow",
        overflow: "scroll"
    }
    render () {
        return (
            <div style={this.obj}>
                <h3>{this.props.value?.name}</h3>
                <span>{this.props.value?.synopsis}</span>
            </div>
        )
    }
}

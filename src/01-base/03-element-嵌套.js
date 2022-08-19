import React, { Component } from 'react'

class Navbar extends Component {
    render () {
        return (
            <div>navbar
                <div>22</div>
            </div>
        )
    }
}
class Swiper extends Component {
    render () {
        return (
            <div>swiper</div>
        )
    }
}
const Tabbar = () => <div>tabbar11</div>


export default class App extends Component {
    render () {
        return (
            <div>
                <Navbar></Navbar>
                <Swiper></Swiper>
                <Tabbar></Tabbar>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Cinema from './components/Cinema.js'
import Mine from './components2/Mine'
import Film from './components2/Film'
import Tabbar from './components2/Tabbar'
import Navbar from '../02-advance/components2/Navbar'


export default class APP extends Component {
    state = {
        currentIndex: 0,
        options: [{
            id: 1,
            text: '电影'
        }, {
            id: 2,
            text: "影院"
        }, {
            id: 3,
            text: "我的"
        }]
    }
    render () {
        return (
            <div>
                {this.state.currentIndex === 0 && <Navbar toMine={() => this.handleMine()}> </Navbar>}
                {this.state.currentIndex === 0 && <Film toMine={() => { this.handleMine() }}></Film>}
                {this.state.currentIndex === 1 && <Cinema></Cinema>}
                {this.state.currentIndex === 2 && <Mine></Mine>}
                <Tabbar
                    current={this.state.currentIndex}
                    options={this.state.options}
                    clickOption={(e) => {
                        this.handleTabbar(e)
                    }}>
                </Tabbar>
            </div>
        )
    }
    handleMine () {
        this.setState({
            currentIndex: 2
        })
    }
    handleTabbar (e) {
        this.setState({
            currentIndex: e
        })
    }

}

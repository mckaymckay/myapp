import React, { Component } from 'react'
import Cinema from './components/Cinema.js'
import Mine from './components/Mine'
import Film from './components/Film'
import Tabbar from './components/Tabbar'
import Navbar from '../01-base/Navbar/index.js'


export default class APP extends Component {
    state = {
        currentIndex: 0
    }
    render () {
        return (
            <div>
                <Navbar> </Navbar>
                {this.state.currentIndex === 0 && <Film toMine={() => { this.handleMine() }}></Film>}
                {this.state.currentIndex === 1 && <Cinema></Cinema>}
                {this.state.currentIndex === 2 && <Mine></Mine>}
                <Tabbar
                    current={this.state.currentIndex}
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

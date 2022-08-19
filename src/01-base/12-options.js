import React, { Component } from 'react'
import styles from './01-css/02-css.module.css'
import Cinema from './components/Cinema.js'
import Mine from './components/Mine'
import Film from './components/Film'


export default class APP extends Component {
    state = {
        options: [{
            id: 1,
            text: '电影'
        }, {
            id: 2,
            text: "影院"
        }, {
            id: 3,
            text: "我的"
        }],
        currentIndex: 0
    }

    render () {
        return (
            <div>
                {this.state.currentIndex === 0 && <Film></Film>}
                {this.state.currentIndex === 1 && <Cinema></Cinema>}
                {this.state.currentIndex === 2 && <Mine></Mine>}

                <ul>
                    {this.state.options.map((v, index) => (
                        <li style={{ background: 'white' }} className={this.state.currentIndex === index ? styles.active : ''} key={v.id} onClick={() => {
                            this.handleClick(index)
                        }}>{v.text}</li>
                    ))}
                </ul>
            </div >
        )
    }
    handleClick (index) {
        this.setState({
            currentIndex: index
        })
    }
}

import React, { Component } from 'react'
import styles from '../01-css/02-css.module.css'

export default class Tabbar extends Component {
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
        }]
    }
    render () {
        console.log(this.props.current)
        return (
            <div>
                <ul>
                    {this.state.options.map((v, index) => (
                        <li style={{ background: 'white' }} className={this.props.current === index ? styles.active : ''} key={v.id} onClick={() => {
                            this.handleClick(index)
                        }}>{v.text}</li>
                    ))}
                </ul>
            </div>
        )
    }
    handleClick (index) {
        this.props.clickOption(index)
    }
}

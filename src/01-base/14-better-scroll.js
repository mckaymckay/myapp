import React, { Component } from 'react'
import BScroll from '@better-scroll/core'

export default class APP extends Component {
    state = {
        arr: []
    }
    render () {
        return (
            <div>
                <button onClick={() => {
                    this.getdata()
                }}>data</button>
                <div className='wrapper' style={{ height: '200px', background: 'yellow', overflow: 'hidden' }}>
                    <ul className='content'>
                        {this.state.arr.map((v, index) => (
                            <li key={index}>{v}</li>
                        ))}
                    </ul>
                </div>
            </div>

        )
    }
    getdata () {
        this.setState({
            arr: [1, 2, 3, 4, 5, 6, 7, 5, 5, 6, 7, 8, 9, 0, 11]
        }, () => {
            new BScroll(".wrapper")
        })
    }
}

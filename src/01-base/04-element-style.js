import React, { Component } from 'react'
import "./01-css/01-css.css"

export default class App extends Component {
    render () {
        let name = 'mm'
        var obj = {
            background: 'yellow',
            fontSize: '20px'
        }
        return (
            <div>
                {10 + 20}-{name}
                <div style={{ color: "red" }}>
                    11111
                </div>
                <div style={obj}>
                    22222
                </div>
                <div className='active'>
                    33333
                </div>
            </div>
        )
    }
}

/*
style{}中是一个对象{key:value}
*/

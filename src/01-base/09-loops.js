import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        list: [11, 22, 33]
    }
    render () {
        return (
            <div>
                <ul>
                    {this.state.list.map(v => (
                        <li key={v}>{v} </li >)
                    )}
                </ul>


            </div>
        )
    }
}

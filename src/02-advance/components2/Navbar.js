import React, { Component } from 'react'

export default class Navbar
    extends Component {
    render () {
        return (
            <div>
                <button>back</button>
                Navbar
                <button onClick={() => {
                    this.props.toMine()
                }}>mine</button>
            </div>
        )
    }
}

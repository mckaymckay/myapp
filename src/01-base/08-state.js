import React, { Component } from 'react'

export default class App extends Component {
    state = {
        isPrefer: false
    }
    render () {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        isPrefer: !this.state.isPrefer
                    })
                }}>{this.state.isPrefer ? "取消收藏" : "收藏"}</button>
            </div>
        )
    }
}

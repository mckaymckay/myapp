import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        user: 'mmmmm'
    }
    render () {
        return (
            <div>
                <h2>登录页</h2>
                <input value={this.state.user} onChange={(e) => {
                    this.setState({
                        user: e.target.value
                    })

                }}></input>
                <button onClick={() => {
                    console.log(this.state.user)
                }}>登录</button>
                <button onClick={() => {
                    this.setState({
                        user: ''
                    })
                }}>重置</button>
            </div>
        )
    }
}

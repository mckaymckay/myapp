import React, { Component } from 'react'

export default class APP extends Component {
    user = React.createRef()
    render () {
        return (
            <div>
                <h2>登录页</h2>
                <input ref={this.user} defaultValue="mmmmm"></input>
                <button onClick={() => {
                    console.log(this.user.current.value)
                }}>登录</button>
                <button onClick={() => {
                    this.user.current.value = ''
                }}>重置</button>
            </div>
        )
    }
}

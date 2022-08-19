import React, { Component } from 'react'

export default class APP extends Component {
    username = React.createRef()
    password = React.createRef()
    render () {
        return (
            <div>
                <Field label="用户名" type="text" ref={this.username} ></Field>
                <Field label="密码" type="password" ref={this.password}></Field>
                <button onClick={() => this.handleLogin()}>login</button>
                <button onClick={() => { this.handleReset() }}>reset</button>
            </div>
        )
    }
    handleLogin () {
        console.log(this.username.current.state.value, this.password.current.state.value)
    }
    handleReset () {
        this.username.current.clear()
        this.password.current.clear()
    }
}


class Field extends Component {
    state = {
        value: ""
    }
    clear () {
        this.setState({
            value: ""
        })
    }
    render () {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(e) => this.handleInput(e)} value={this.state.value}></input>
            </div>
        )
    }
    handleInput (e) {
        this.setState({
            value: e.target.value
        })
    }
}


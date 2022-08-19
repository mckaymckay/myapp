import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        username: localStorage.getItem('username'),
        password: "",
    }
    render () {
        return (
            <div>
                <Field label="用户名" type="text" value={this.state.username} changeField={(v) => this.handleField1(v)}  ></Field>
                <Field label="密码" type="password" value={this.state.password} changeField={(v) => this.handleField2(v)} ></Field>
                <button onClick={() => this.handleLogin()}>login</button>
                <button onClick={() => { this.handleReset() }}>reset</button>
            </div>
        )
    }
    handleField1 (v) {
        this.setState({
            username: v
        })
    }
    handleField2 (v) {
        this.setState({
            password: v
        })
    }
    handleLogin () {
        console.log(this.state)
    }
    handleReset () {
        this.setState({
            username: "",
            password: ""
        })
    }
}


class Field extends Component {
    render () {
        return (
            <div>
                <label>{this.props.label}</label>
                <input type={this.props.type} onChange={(e) => this.handleInput(e)} value={this.props.value}></input>
            </div>
        )
    }
    handleInput (e) {
        this.props.changeField(e.target.value)
    }
}


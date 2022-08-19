import React, { Component } from 'react'

export default class App extends Component {
    a = 10
    render () {
        return (
            <div>
                <input></input>
                <button onClick={() => {
                    console.log('click1', this.a)
                }}>click1-逻辑简单的时候推荐</button>
                <button onClick={this.handleClick2.bind(this)}>click2-不推荐</button>
                <button onClick={this.handleClick3}>click3-推荐</button>
                <button onClick={() => {
                    this.handleClick4()
                }}>click4-很推荐-方便传参</button>

            </div>
        )
    }
    handleClick2 () {
        console.log('click2', this.a)
    }
    handleClick3 = () => {
        console.log('click3', this.a)
    }
    handleClick4 () {
        console.log('click4', this.a)
    }
}


/*
React 中不会把事件绑定在一个具体的元素上，而是采用事件代理的模式
*/
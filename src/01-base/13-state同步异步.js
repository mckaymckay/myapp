import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        count: 0
    }
    render () {
        return (
            <div>
                {this.state.count}
                <button onClick={() => {
                    this.handleClick1()
                }}>add1</button>
                <button onClick={() => {
                    this.handleClick2()
                }}>add2</button>
            </div>
        )
    }
    handleClick1 () {
        this.setState({
            count: this.state.count + 1
        }, () => {
            // 第二个参数：回调函数知道状态和DOM更新完了
            console.log(this.state.count, 11)
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
        this.setState({
            count: this.state.count + 1
        })
        console.log(this.state.count)
    }
    handleClick2 () {
        setTimeout(() => {
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)
            this.setState({
                count: this.state.count + 1
            })
            console.log(this.state.count)

        }, 0);


    }
}

/*
setState在同步逻辑中，异步更新状态,更新真实DOM
setState在异步逻辑中，同步更新状态,更新真实DOM
*/
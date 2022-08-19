import React, { Component } from 'react'

export default class App extends Component {
    myref = React.createRef()
    render () {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={() => {
                    console.log(this.myref.current.value)
                }}>click</button>
            </div>
        )
    }
}

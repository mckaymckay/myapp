import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        text: '111111111'
    }
    render () {
        return (
            <div>
                <button onClick={() => {
                    this.setState({
                        text: '2222222222'
                    })
                }}>change</button>
                <Child title={this.state.text}></Child>
            </div>
        )
    }
}

class Child extends Component {

    render () {
        let { title } = this.props
        return (
            <div>
                Child- {title}
            </div>
        )
    }
}

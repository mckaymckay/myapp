import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        display: false
    }
    render () {
        return (
            <div>
                <Navbar handleCNavbarClick={this.handleNavbar} event={() => {
                    this.setState({
                        display: !this.state.display
                    })
                }}></Navbar>
                {this.state.display && <Sidebar></Sidebar>}
            </div>
        )
    }
    handleNavbar = (e) => {
        this.setState({
            display: e
        })
    }
}

class Navbar extends Component {
    state = {
        show: false
    }
    render () {
        return (
            <div>

                <div style={{ background: 'red' }}>
                    {/* 方法一 */}
                    <button onClick={() => {
                        this.handleClick()
                    }}>click
                    </button>
                    {/* 方法二 */}
                    <button onClick={() => {
                        this.props.event()
                    }}>click1
                    </button>
                </div>
            </div>
        )
    }
    handleClick () {
        this.setState({
            show: !this.state.show
        }, () => {
            this.props.handleCNavbarClick(this.state.show)
        })
    }
}
class Sidebar extends Component {
    render () {
        return (
            <div style={{ background: 'yellow' }}>
                <ul>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                    <li>11111</li>
                </ul>
            </div>
        )
    }
}

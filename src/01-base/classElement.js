import React, { Component } from 'react'

export default class HHH extends Component {
  state = {
    count: 0
  }
  render () {
    return (
      <div>
        <h1>count = {this.state.count}</h1>
        <button onClick={() => this.setState({
          count: this.state.count + 1
        })
        }>count+1</button>
        <button onClick={() => this.changeCount(this.state.count)}>alert </button>
      </div >
    )
  }
  changeCount () {
    setTimeout(() => {
      alert("count=" + this.state.count);
    }, 2000);
  }
}

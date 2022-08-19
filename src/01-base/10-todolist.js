import React, { Component, createRef } from 'react'

export default class APP extends Component {
    myref = createRef('myref')
    state = {
        list: []
    }
    render () {
        return (
            <div>
                <input ref={this.myref}></input>
                <button onClick={() => {
                    this.handleAdd()
                }}>Add</button>
                {!this.state.list.length && <div >暂无待办事项</div>}
                <ul>
                    {this.state.list.map((v, index) => (
                        < li key={v.id} > {v.text}<button onClick={() => {
                            this.handleDelete(index)
                        }}>delete</button></li>

                    ))}
                </ul>
            </div >
        )
    }
    handleAdd = () => {
        const newList = [...this.state.list]
        newList.push({
            text: this.myref.current.value,
            id: Math.random() * 1000000000
        })
        this.setState({
            list: newList
        })
        this.myref.current.value = ""
    }
    handleDelete = (index) => {
        const newli = [...this.state.list]
        newli.splice(index, 1)
        this.setState({
            list: newli
        })
    }
}

import React, { Component } from 'react'

export default class APP extends Component {
    state = {
        list: [],
        mytext: ''
    }
    render () {
        return (
            <div>
                <input value={this.state.mytext} onChange={(evt) => this.handleChange(evt)}></input>
                <button onClick={() => {
                    this.handleAdd()
                }}>Add</button>
                {!this.state.list.length && <div >暂无待办事项</div>}
                <ul>
                    {this.state.list.map((v, index) => (
                        <li key={v.id} >
                            <input
                                type='checkbox'
                                checked={v.isChecked} onChange={() => {
                                    this.handleChecked(index)
                                }}

                            ></input>
                            <span style={{ textDecoration: v.isChecked ? 'line-through' : '' }}>{v.text}</span>
                            < button onClick={() => {
                                this.handleDelete(index)
                            }}>delete
                            </button>
                        </li>

                    ))
                    }
                </ul>
            </div >
        )
    }
    handleChange (evt) {
        this.setState({
            mytext: evt.target.value
        })
    }
    handleAdd = () => {
        const newList = [...this.state.list]
        newList.push({
            text: this.state.mytext,
            id: Math.random() * 1000000000,
            isChecked: false
        })

        this.setState({
            list: newList,
            mytext: ''
        })
    }
    handleDelete = (index) => {
        const newli = [...this.state.list]
        newli.splice(index, 1)
        this.setState({
            list: newli
        })
    }
    handleChecked (index) {
        const checkedList = [...this.state.list]
        checkedList[index].isChecked = !checkedList[index].isChecked
        this.setState({
            list: checkedList
        })

    }
}

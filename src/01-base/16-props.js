import React, { Component } from 'react'
import Navbar from './Navbar'

export default class APP extends Component {
    render () {
        return (
            <div>
                <div>
                    <h2>首页</h2>
                    <Navbar title='首页' rightShow={true}></Navbar>
                </div>
                <div>
                    <h2>列表</h2>
                    <Navbar title='列表' leftShow={true}></Navbar>
                </div>
                <div>
                    <h2>购物车</h2>
                    <Navbar title='购物车'></Navbar>
                </div>

            </div>
        )
    }
}

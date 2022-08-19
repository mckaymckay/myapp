import React, { Component } from 'react'
import mmpropTypes from 'prop-types'
console.log(mmpropTypes)

export default class Navbar extends Component {
    // 类属性
    static propTypes = {
        title: mmpropTypes.string,
        leftShow: mmpropTypes.bool
    }
    static defaultProps = {
        leftShow: true
    }
    render () {
        let { title, leftShow, rightShow } = this.props
        return (
            <div>
                {leftShow && <button >back</button>}
                {title}
                {rightShow && <button >home</button>}
            </div>
        )
    }
}

// 类属性
// Navbar.propTypes = {
//     title: mmpropTypes.string,
//     leftShow: mmpropTypes.bool
// }

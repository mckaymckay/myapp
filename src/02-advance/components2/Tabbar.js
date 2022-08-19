import React, { Component } from 'react'
import styles from '../01-css/02-css.module.css'

// export default class Tabbar extends Component {
//     render () {
//         return (
//             <div>
//                 <ul>
//                     {this.props.options.map((v, index) => (
//                         <li style={{ background: 'white' }} className={this.props.current === index ? styles.active : ''} key={v.id} onClick={() => {
//                             this.handleClick(index)
//                         }}>{v.text}</li>
//                     ))}
//                 </ul>
//             </div>
//         )
//     }
//     handleClick (index) {
//         this.props.clickOption(index)
//     }
// }

const Tabbar = (props) => {
    // function handleClick (index) {
    //     props.clickOption(index)
    // }
    return (
        <div>
            <ul>
                {props.options.map((v, index) => (
                    <li style={{ background: 'white' }} className={props.current === index ? styles.active : ''} key={v.id} onClick={() => {
                        props.clickOption(index)
                    }}>{v.text}</li>
                ))}
            </ul>
        </div>
    )
}

export default Tabbar

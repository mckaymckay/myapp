import React, { useState } from 'react'
import './01-css/01-css.css'

export default function APP () {
    const [type, setType] = useState(0)

    return (
        <div>
            <h2>margin塌陷:</h2>
            <p>--父子嵌套的元素垂直方向的margin取最大值</p>
            <div className='father'>
                <div className='child'></div>
            </div>
            <h2>margin合并:</h2>
            <p>--兄弟块级元素的上下边距合并</p>
            <div className='left' style={{ marginBottom: '100px', background: 'red', display: type === 1 ? 'none' : '' }}>上</div>
            <div className='right' style={{ marginTop: '100px', background: 'yellow' }}>下</div>
            <button onClick={() => {
                setType(1 - type)
            }}>change</button>

        </div>
    )
}

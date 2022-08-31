import React, { useState } from 'react'
import './01-css/02-css.css'

export default function APP () {
    const [lists] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap' }} className='parent'>
                {lists.map(v => <div className='child'>{v}</div>)}
            </div>
        </div>
    )
}

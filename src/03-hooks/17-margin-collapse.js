import React, { useState } from 'react'

export default function APP () {
    const [type, setType] = useState(0)
    const [lists] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    return (
        <div style={{ background: 'black', color: 'white' }}>
            <div className='left' style={{ marginBottom: '100px', background: 'red', display: type === 1 ? 'none' : '' }}>上</div>
            <div className='right' style={{ marginBottom: '10px', background: 'yellow' }}>下</div>
            <button onClick={() => {
                setType(1 - type)
            }}>change</button>
            <div style={{ color: 'white' }}>{type}</div>
            <div style={{}}>
                {lists.map(v => <div style={{ width: '20px', height: '20px', background: 'gray' }}>{v}</div>)}
            </div>
        </div>
    )
}

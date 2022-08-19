import React, { useState } from 'react'

export default function APP () {
    const [name, setName] = useState('Mckay')
    return (
        <div>
            {name}
            <button onClick={() => setName('MBear')}>Click</button>
        </div>
    )
}

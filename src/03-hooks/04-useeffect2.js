import React, { useEffect, useState } from 'react'

export default function APP () {
    const [name, setName] = useState('mckay')
    useEffect(() => {
        setName(name.substring(0, 1).toUpperCase() + name.substring(1))
    }, [name])
    return (
        <div>
            app-{name}
            <button onClick={() => setName('bear')}>change</button>
        </div>
    )
}

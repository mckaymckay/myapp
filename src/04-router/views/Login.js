import React, { useState } from 'react'

export default function Login (props) {
    const [text, setText] = useState('')
    function handleChange (evt) {
        console.log(evt.target.value)
        setText(evt.target.value)
    }
    function handleLogin () {
        localStorage.setItem('user', text)
        props.history.push('/center')
        setText('')
    }
    function handleReset () {
        setText('')
    }
    return (
        <div>
            <div>Login</div>
            <input value={text} onChange={(evt) => handleChange(evt)}></input>
            <button onClick={() => handleLogin()}>登录</button>
            <button onClick={() => handleReset()}>reset</button>
        </div>
    )
}

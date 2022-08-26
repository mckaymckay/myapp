import React, { Component, useEffect, useState } from 'react'

export default function APP () {
    const [create, setCreate] = useState(true)
    return (
        <div>
            <button onClick={() => {
                setCreate(!create)
            }}>click</button>
            {create && <Child></Child>}
        </div>
    )
}

function Child () {
    useEffect(() => {
        window.onresize = () => {
            console.log('componentDidMount', 'resize')
        }
        const timer = setInterval(() => {
            console.log(111)
        }, 1000)

        // 闭包的用法
        return () => {
            console.log('此函数执行时机，组件销毁的时候，在useeffect没有依赖的时候此函数只会执行一次，在useeffect有依赖的时候，每次更新都会执行一次')
            window.onresize = null  //  解绑
            clearInterval(timer)  // 清除定时器
        }
    }, [])
    return <div>
        child
    </div>
}

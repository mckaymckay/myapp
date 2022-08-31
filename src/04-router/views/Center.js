import React from 'react'

export default function Center (props) {
    console.log(props)
    function handleOrder () {
        props.history.push(`/order`)
    }
    return (
        <div>Center
            <button onClick={() => handleOrder()}>电影订单</button>
        </div>
    )
}

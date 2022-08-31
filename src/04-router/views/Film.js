import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import ComingSoon from './films/ComingSoon'
import NowPlaying from './films/NowPlaying'

export default function Film (props) {
    console.log(props)
    return (
        <div>
            Film
            <div style={{ height: '100px', background: 'yellow' }}>lunbo</div>
            <ul>

                <li onClick={() => {
                    props.history.push({ pathname: '/films/nowplaying' })
                }} >正在上映</li>
                <li onClick={() => {
                    props.history.push({ pathname: '/films/comingsoon' })
                }}>即将上映</li>
            </ul>
            {/* 路由配置，嵌套路由 */}
            <Switch>
                <Route path='/films/nowplaying' component={NowPlaying}></Route>
                <Route path='/films/Comingsoon' component={ComingSoon}></Route>
                <Redirect from='/films' to='/films/nowplaying'></Redirect>
            </Switch>
        </div>
    )
}

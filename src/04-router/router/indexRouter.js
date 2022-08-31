import React from 'react'
import { HashRouter, Redirect, Route, Router, Switch } from 'react-router-dom'
import Film from '../views/Film'
import Cinema from '../views/Cinema'
import Center from '../views/Center'
import Detail from '../views/films/Detail'
import Login from '../views/Login'
import NotFound from '../views/NotFound'
function isAuth () {
    console.log(localStorage.getItem('user'))
    return localStorage.getItem('user')
}

export default function IndexRouter (props) {
    return (
        <div>
            <HashRouter>

                <Switch>
                    <Route path='/films' component={Film}></Route>
                    <Route path='/cinemas' component={Cinema}></Route>
                    {/* <Route path='/center' component={Center}></Route> */}
                    <Route path='/center' render={(props) => { return isAuth() ? <Center {...props} /> : <Redirect to='/login' /> }
                    }></Route>
                    {/* 动态路由 */}
                    <Route path='/detail/:detailId' component={Detail}></Route>
                    <Route path='/login' component={Login}></Route>
                    {/* <Route path='/detail' component={Detail}></Route> */}
                    <Redirect exact from="/" to='/films'></Redirect>
                    <Route component={NotFound}></Route>
                </Switch>
                {/* 插槽，放置NavLink  */}
                {props.children}
            </HashRouter>
        </div>
    )
}

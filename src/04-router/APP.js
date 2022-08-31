import React from 'react'
import Tabbar from './components/Tabbar'
import IndexRouter from './router/indexRouter'

export default function APP () {
    return (
        <div>
            <IndexRouter>
                <Tabbar></Tabbar>
            </IndexRouter>

        </div>
    )
}

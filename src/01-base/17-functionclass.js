import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'

export default function APP () {
    return (
        <div>
            <Navbar title="navbar"></Navbar>
            <Sidebar title="sidebar"></Sidebar>
        </div>
    )
}

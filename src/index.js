import React from 'react'
// import ReactDom from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import App from './03-hooks/06-hooks-useeffect'

// ReactDom.render(<App></App>, document.getElementById('root'))

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App></App>) 
import React from 'react'
// import ReactDom from 'react-dom'
import * as ReactDOMClient from 'react-dom/client'
import App from './01-base/21-受控cinema'

// ReactDom.render(<App></App>, document.getElementById('root'))

const root = ReactDOMClient.createRoot(document.getElementById('root'))
root.render(<App></App>) 
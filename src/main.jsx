import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Root } from './Root.jsx'
// redux
import { cofigureStore } from './store/store.js'

const store = cofigureStore()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Root store={store} />
  </React.StrictMode>,
)
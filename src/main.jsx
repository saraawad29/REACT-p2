import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
const container = document.getElementById('root')
const root = ReactDOM.createRoot(container);
root.render(
    <React.StrictMode>
    <App />
  </React.StrictMode>
)
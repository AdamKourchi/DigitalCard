import React from 'react'
import ReactDOM from 'react-dom/client'
import Photo from './Photo.jsx'
import Text from './Text.jsx'
import './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Photo />
      <Text/>
    </React.StrictMode>,
  )
  
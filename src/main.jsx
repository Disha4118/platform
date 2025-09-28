import React from 'react'
import { createRoot } from 'react-dom/client'
import IELTSHomePage from './IELTSHomePage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <IELTSHomePage />
  </React.StrictMode>
)

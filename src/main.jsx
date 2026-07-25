import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Allcomponent from './Allcomponent'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Allcomponent></Allcomponent>
  </StrictMode>,
)

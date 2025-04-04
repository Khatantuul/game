import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainGame from './game/MainGame.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MainGame />
  </StrictMode>,
)

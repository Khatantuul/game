import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import MainGame from './game/MainGame.jsx'
import HocExercise from './hocExercise/HocExercise.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HocExercise />
  </StrictMode>,
)

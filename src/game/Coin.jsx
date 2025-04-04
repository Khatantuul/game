import React from 'react'
import './coinStyle.css'
function Coin({color, onClick}) {
    
  return (
    <div style={{backgroundColor: color === 'R' ? 'red' : color === 'Y' ? 'yellow' : ''}} 
     className='coin'
     onClick={onClick}
     >

     </div>
  )
}

export default Coin
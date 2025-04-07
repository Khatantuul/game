import React from 'react'
import Coin from './Coin'
import './boardStyle.css'
function Board({width, height, boardstate, onMove}) {

    let board =[];
   
        for(let i=0; i< height; i++){
            const row = [];
            for(let j=0; j< width; j++){
                const pos = i * width + j
                row.push(<Coin key={pos} color={boardstate[pos]} onClick={()=>onMove(j)}/>)
            }
            board.push(<div className='row' key={`row-${i}`} > 
                {row}
            </div>)
        }
    

  return (
    <div className='board'>
        {board}
    </div>
  )
}

export default Board
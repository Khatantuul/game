import React from 'react'
import Coin from './Coin'

function Board({width, height, redIsNext, boardstate, onMove}) {

    let board =[];
   
        for(let i=0; i< height; i++){
            const row = [];
            for(let j=0; j< width; j++){
                const pos = i * width + j
                row.push(<Coin key={pos} color={boardstate[pos]} onClick={()=>onMove(j)}/>)
            }
            board.push(<div key={`row-${i}`} style={{display:'flex'}}> 
                {row}
            </div>)
        }
    

  return (
    <div>
        {board}
    </div>
  )
}

export default Board
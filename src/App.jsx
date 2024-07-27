import { useState } from 'react'
import './App.css'
import CircleComponent from './components/CircleComponent'
import Navbar from './components/Navbar'
import SquareComponent from './components/SquareComponent'
import Xcomponent from './components/Xcomponent'

function App() {
  const [board, setBoard] = useState(new Array(9).fill(null))

  console.log(board)

  const [player, setPlayer] = useState('X')

  const handleClick = (index) => {
    if (board[index]) return
    const newBoard = [...board]
    newBoard[index] = player === 'X' ? <Xcomponent /> : <CircleComponent />
    const newPlayer = player === 'X' ? 'O' : 'X'
    setBoard(newBoard)
    setPlayer(newPlayer)
  }

  const handleReset = () => {
    setBoard(new Array(9).fill(null))
    setPlayer('X')
  }

  return (
    <>
      <div className="h-screen">
        <Navbar />
      
        <div className="flex  mt-32 mb-7 items-center justify-center">
          <div className="grid h-96 w-96 grid-cols-3">
            {board.map((square, index) => (
              <div onClick={() => handleClick(index)} key={index}>
                {square || <SquareComponent />}
              </div>
            ))}
          </div>
         
        </div> 
        <div className='flex justify-center '>
        <button className="p-5 border border-black rounded-lg text-black font-bold bg-green-400" onClick={handleReset}>
          Reset
       </button> 
        </div>
         
      </div>
    </>
  )
}

export default App

// i tried to make the game work but i couldnt make it work

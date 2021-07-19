import React, {useState} from 'react';
import './Board.css';
import Square from './Square';

const Board = () =>{

  const initialSquares = [
    0, 1, 2,
    null, null, null,
    null, null, null,
  ];

  const [squares, setSquares]= useState(initialSquares);
 
  //const [value, setValue] = useState('');

  const renderSquare = (i) =>{

    return <Square 
    //value={squares[i]} 
    onClickEvent={() =>clickHandler(i)}/>
  };

  const clickHandler= (i)=>{
    alert(`square ${i} clicked`)
    console.log(squares[i]);
    const squa = [...squares];
    squa[i]='X';
    setSquares(
};

  return <div className='board-style'>
    <div className='row'>
      {renderSquare(0)} {renderSquare(1)} {renderSquare(2)}
    </div>
    <div className='row'>
    {renderSquare(3)} {renderSquare(4)} {renderSquare(5)}
    </div>
    <div className='row'>
    {renderSquare(6)} {renderSquare(7)} {renderSquare(8)}
    </div>
    
  </div>
};

export default Board;
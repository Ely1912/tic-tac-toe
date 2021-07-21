import React, {useState} from 'react';
import './Board.css';
import Square from './Square';
import RestartButton from './RestartButton';

const Board = () =>{

  const initialSquares = Array(9).fill(null);

  const [squares, setSquares]= useState(initialSquares);
  const [xTurn, setXTurn]= useState(false);
  const [number, setNumber] = useState(0);
  const [text, setText] = useState('O Turn');
  const [winner, setWinner] = useState(false);
 
  const renderSquare = (i) =>{
    return <Square 
    onClickEvent={() =>clickHandler(i)}
    value={squares[i]}/>
  };

  const clickHandler= (i)=>{
    const squa = [...squares];
    
    if (squa[i] === null){
      squa[i] = xTurn? 'X' : 'O';
      setXTurn(!xTurn);
      setText((xTurn? 'O' : 'X') + ' Turn');
    }else{
      alert(`This square has already been clicked`)
    }
    setSquares(squa);

    if ((squa[0]&& squa[0]===squa[1] &&squa[0]===squa[2])//row1
    ||(squa[3]&& squa[3]===squa[4] && squa[3]===squa[5])//row2
    ||(squa[6]&& squa[6]===squa[7] && squa[6]===squa[8])//row3
    ||(squa[0]&& squa[0]===squa[3] && squa[0]===squa[6])//column1
    ||(squa[1]&& squa[1]===squa[4] && squa[1]===squa[7])//column2
    ||(squa[2]&& squa[2]===squa[5] && squa[2]===squa[8])//column3
    ||(squa[0]&& squa[0]===squa[4] && squa[0]===squa[8])//Diagonals
    ||(squa[2]&& squa[2]===squa[4] && squa[2]===squa[6])){ //Diagonals
      setText('You Win!');
      setWinner(true);
    }
    setNumber(number + 1);

    if ((number === 8) && !winner){
      setText('Nobody wins'); 
      setWinner(true);
    };

    
};

const restartHandlerEvent = () =>{
  setSquares(initialSquares);
  setWinner(false);
  setXTurn(false);
  setNumber(0);
  setText('O Turn');
}

  return <div className='board-style'>
    <div className='title'>TIC-TAC-TOE</div>
    <div className='text-a'>
    {winner? 
    <RestartButton restartHandler ={restartHandlerEvent}/> : 
    <div className='text'>May the odds be ever in your favor</div>}
    </div>
<div className='text'>{text}</div>
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
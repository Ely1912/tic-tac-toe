import React, {useState} from 'react';
import './Board.css';
import Square from './Square';

const Board = () =>{

  const initialSquares = [
    null, null, null,
    null, null, null,
    null, null, null,
  ];

  const [squares, setSquares]= useState(initialSquares);
  const [flag, setFlag]= useState(false);
  const [number, setNumber] = useState(0);
 
  const renderSquare = (i) =>{
    return <Square 
    onClickEvent={() =>clickHandler(i)}
    value={squares[i]}/>
  };

  const clickHandler= (i)=>{
    const squa = [...squares];
    if (squa[i] === null){
      if (!flag){
        squa[i]='X';
        setFlag(true);
      }else{
        squa[i]='O';
        setFlag(false);
      }
    }else{
      alert(`This square has already been clicked`)
    }
    setSquares(squa);
    console.log(squa[0]);
    console.log(squa[1]);
    console.log(squa[2]);

    //if ((squa[0]===squa[1]===squa[2])
    //||(squa[3]===squa[4]===squa[5])
    //||(squa[6]===squa[7]===squa[8])
    //||(squa[0]===squa[3]===squa[6])
    //||(squa[2]===squa[5]===squa[8])
    //||(squa[0]===squa[4]===squa[8])
    //||(squa[2]===squa[4]===squa[6])){
    //||(squa[1]===squa[4]===squa[7])
    //  alert(`You Win!!!`)
    //}
    if (squa[0]===squa[1]===squa[2]){
      console.log('hello');
    }

    if (number !== 9){
      setNumber(number + 1);
    }
    
};

  return <div className='board-style'>
    <div className='title'>TIC-TAC-TOE</div>
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
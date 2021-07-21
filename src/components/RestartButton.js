import React from 'react';
import './RestartButton.css';

const RestartButton = (props) =>{
  return <button onClick= {props.restartHandler} className='text-button'>Restart Game</button>
};

export default RestartButton;
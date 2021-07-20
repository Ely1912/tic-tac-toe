import React from 'react';
import './Square.css';

const Square = (props) =>{

  return <div className='square-style'>
    <button className='square-button-style' onClick={props.onClickEvent} >
      <div className='square-letter'>{props.value}</div>
      </button>
  </div>
};

export default Square;
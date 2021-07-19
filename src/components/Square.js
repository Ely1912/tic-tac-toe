import React, {useState} from 'react';
import './Square.css';

const Square = (props) =>{

  return <div className='square-style'>
    <button className='square-style' onClick={props.onClickEvent} >
      {props.value}
      </button>
  </div>
};

export default Square;
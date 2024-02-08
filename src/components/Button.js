import './Button.css'
import React from 'react';
const Button = (props) => {
  const ResetHandler = () => {
    props.reset();
  }
  return (
    <div className='button'>
      <button className='btn' onClick={ResetHandler}>Reset </button>
    </div>
  )
}
export default Button;
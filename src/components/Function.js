import './Function.css'
import Button from './Button';
import React, {useState}  from 'react';


const Function = (props) => {
  const [Count, setCount] = useState(0);
  const decrementHandler = () => {
    setCount(Count-1);
    console.log(Count);
  }

  const incrementHandler = () => {
    setCount(Count+1)
    console.log(Count)
  }

  const resetHandler = () => {
    setCount(0)
    console.log(Count)
  }


  return (
    <div>
      <div className='Function'>
      <button className='btn-1' onClick={incrementHandler}>
      +
      </button>
      <div className='Text'>
        <h3>
          {Count}
        </h3>
      </div>
      <button className='btn-1' onClick={decrementHandler}>
      -
      </button>
    </div>
    <Button reset = {resetHandler} />
    </div>
    
  )
}

export default Function;
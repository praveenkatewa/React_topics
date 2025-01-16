import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment ,reset} from '../features/counter/counterSlice';

function Increment()  {
  const count=useSelector((state)=>state.counter.value); 
  const dispatch=useDispatch();

  function incre(){
    dispatch(increment())

  }

  function decre(){
    dispatch(decrement())

  }
  function resetClick(){
    dispatch(reset())
  }
  

  return (
    <div>
      <button onClick={incre}>increment</button>
      <p>count:{count}</p>
      <button onClick={decre}>decrement</button>
      <button onClick={resetClick}>reset</button>
      
    </div>
   
  )
}

export default Increment
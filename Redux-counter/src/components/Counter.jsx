import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement,increment } from '../features/counter/counterSlice'
import './Counter.css';

const Counter = () => {
  const count=useSelector((state)=>state.Counter.value)
  const dispatch=useDispatch()

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }


  return (

    // <div className='ButtonSection'>
    // {/* <p>Count: {count}</p> */}
  
    // <div >
    //   <button onClick={handleIncrementClick}>Increment</button>
    //   <button onClick={handleDecrementClick}>Decrement</button>
    // </div>
    // </div>

    <div >
    <h1>Slice1</h1>
    <div className="button-section">
      <button className="button1" onClick={handleIncrementClick}>Increment</button>
      <button className="button2" onClick={handleDecrementClick}>Decrement</button>
    </div>
   
  </div>


  )
}

export default Counter
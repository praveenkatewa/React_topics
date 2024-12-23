import React from 'react'
import useCounter from './useCounter'

const Counter = () => {
  const {count,increment,decrement,reset}=useCounter();

  return (
    <div>
  <h1>count={count}</h1>
    <button onClick={increment}>inc </button>
    <button onClick={decrement}> dec</button>
    <button onClick={reset}>reset </button>
      
    </div>
  )
}

export default Counter


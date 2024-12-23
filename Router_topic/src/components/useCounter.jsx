import React, { useState } from 'react'

const useCounter = () => {
  const [count,setCount]=useState(5);

  const increment=()=>setCount((num)=>num+1);
  const decrement=()=>setCount((num)=>num-1);
  const reset=()=>setCount();

  return{count,increment,decrement,reset};
  
}

export default useCounter

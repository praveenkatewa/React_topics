import React,{useState} from 'react'

const UseToggle = () => {
  const[value,setValue]=useState(true)

  const toggle=()=>{
    setValue(!value)
  }
  console.log(`>>>>>>>value>>>>`,value);

  return [value,toggle]
}

export default UseToggle

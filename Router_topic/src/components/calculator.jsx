import React ,{useState} from "react"

function Calculator(){
  const[num1,setNum1]=useState(120)


  return <>
  <div>
    <h1>Calculator  </h1>
    <h2>value {num1}</h2>
     
     
    <button onClick={()=>{setNum1(num1+1)}}>increase</button>
    <button onClick={()=>{setNum1(num1-1)}}>Decrease</button>
    <button onClick={()=>{setNum1(num1*2)}}>multiply</button>
    <button onClick={()=>{setNum1(num1/2)}}>Divide</button>
    <button onClick={()=>{setNum1(0)}}>Reset</button>

     </div>

  </>
}
export default Calculator

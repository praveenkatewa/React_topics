import React ,{useState} from "react"

function Calculator(){
  const[num1,setNum1]=useState(120)


  // useEffect(() => {
  //   if (num1 < 0) {
  //     alert("Value is negative!");
  //   }
  // }, [num1]); 


  return <>
  <div>
    <h1>Calculator  </h1>
    <h2>value {num1}</h2>
     
     
    <button onClick={()=>{setNum1(num1+1)}}>increase</button>
    {/* <button onClick={()=>{setNum1(num1-1)}}>Decrease</button> */}

    <button
          onClick={() => {
            if (num1 <= 0) {
              alert("Value is going negative!");
            }
            setNum1(num1-1);
          }}
        >
          Decrease
        </button>
    <button onClick={()=>{setNum1(num1*2)}}>multiply</button>
    <button onClick={()=>{setNum1(num1/2)}}>Divide</button>
    <button onClick={()=>setNum1(120)}>Reset</button>

     </div>

  </>
}
export default Calculator

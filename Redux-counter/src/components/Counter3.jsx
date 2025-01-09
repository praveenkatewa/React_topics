
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { devide, multi, reset } from '../features/counter/counterSlice_3';

function Counter3  () {
   const [multiAmount, setMulti] = useState(0);
    const [devideAmount, setDevide] = useState(0);

  const count3=useSelector((state)=>state.Counter3.value)
  const dispatch=useDispatch()


   function handleMultiClick() {
      dispatch(multi(Number(multiAmount)));
    }
  
    function handleDevideClick() {
      dispatch(devide(Number(devideAmount)));
    }
  
    function handleResetClick() {
      dispatch(reset());
    }

  return (
   <>
    {/* <p>Count3: {count3}</p> */}
    <div >

    <h1>Slice 3</h1>
    <input
      type="number"
      value={multiAmount}
      placeholder="Enter multiplier"
      onChange={(e) => setMulti(e.target.value)}
    />
    </div>

    <button className="button1" onClick={handleMultiClick}>Multiply</button>

    <input
      type="number"
      value={devideAmount}
      placeholder="Enter divisor"
      onChange={(e) => setDevide(e.target.value)}
    />

    <button className="button1" onClick={handleDevideClick}>Divide</button>
  


    <button className="button2" onClick={handleResetClick}>Reset</button>
 
   </>
  );
}

export default Counter3
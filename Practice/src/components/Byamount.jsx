import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { byamount,reset } from '../features/counter/amountSlice';

function Byamount() {
  const [amount, setAmount] = useState(0); 
  const count = useSelector((state) => state.amounts.value); 
  const dispatch = useDispatch();

  function amountinc() {
   
    dispatch(byamount(Number(amount))); 
  }
  function resetamount() {
    dispatch(reset())
  }

  return (
    <div>
      <p>count: {count}</p>
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)} 
      />
      <button onClick={amountinc}>BYamount</button>
      <button onClick={resetamount}>reset</button>
    </div>
  );
}

export default Byamount;

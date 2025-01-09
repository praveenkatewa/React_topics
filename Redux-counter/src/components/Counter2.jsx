import React ,{useState}from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { incrementByAmount,reset } from '../features/counter/counterSlice_2'
import './Counter.css'



const Counter2 = () => {
    const count2=useSelector((state)=>state.Counter2.value)
    const dispatch=useDispatch()
     const [amount, setAmount] = useState(0);



     function handleIncAmountClick() {
         dispatch(incrementByAmount(Number(amount)));
       }

         function handleResetClick() {
           dispatch(reset());
         }



  
  return (

    
   <>
     <div  >
     <h1>Slice 2</h1>
    <input
      type="number"
      value={amount}
      placeholder="Enter amount"
      onChange={(e) => setAmount(e.target.value)}
    />
    </div>
    
      <div className="button-section">
    <button className="button1" onClick={handleIncAmountClick}>Increment by Amount</button>
   

    
    <button   className="button2" onClick={handleResetClick}>Reset</button>
  </div>
 
   </>
   



  )
}

export default Counter2
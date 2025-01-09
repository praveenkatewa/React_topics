
// import React, { useState } from 'react';
// import './App.css'
// import { useDispatch, useSelector } from 'react-redux';
// import { decrement, devide, increment, incrementByAmount, multi, reset } from './features/counter/counterSlice';

// function App() {
//   const [amount, setAmount] = useState(0);
//   const [multiAmount, setMulti] = useState(0);
//   const [devideAmount, setDevide] = useState(0);

//   const count = useSelector((state) => state.counter.value);
//   const dispatch = useDispatch();

//   function handleIncrementClick() {
//     dispatch(increment());
//   }

//   function handleDecrementClick() {
//     dispatch(decrement());
//   }

//   function handleIncAmountClick() {
//     dispatch(incrementByAmount(Number(amount)));
//   }

//   function handleMultiClick() {
//     dispatch(multi(Number(multiAmount)));
//   }

//   function handleDevideClick() {
//     dispatch(devide(Number(devideAmount)));
//   }

//   function handleResetClick() {
//     dispatch(reset());
//   }

//   return (
//     <>
//     <div className="container">
     
//       <header>
//         <h1>Counter Application</h1>
//         <p>Count: {count}</p>
//       </header>
//  </div>
      
//       <div className='ButtonSection'>
//         <button onClick={handleIncrementClick}>Increment</button>
        

//         <button onClick={handleDecrementClick}>Decrement</button>
//         <br />
        

//         <input
//           type="number"
//           value={amount}
//           placeholder="Enter amount"
//           onChange={(e) => setAmount(e.target.value)}
//         />
//         <br />

//         <button onClick={handleIncAmountClick}>Increment by Amount</button>
//         <br />
     

//         <input
//           type="number"
//           value={multiAmount}
//           placeholder="Enter multiplier"
//           onChange={(e) => setMulti(e.target.value)}
//         />
//         <button onClick={handleMultiClick}>Multiply</button>
//         <br />
//         <br />

//         <input
//           type="number"
//           value={devideAmount}
//           placeholder="Enter divisor"
//           onChange={(e) => setDevide(e.target.value)}
//         />
//         <button onClick={handleDevideClick}>Divide</button>
//         <br />
//         <br />

//         <button onClick={handleResetClick}>Reset</button>
//       </div>
//       </>
//   );
// }

// export default App






import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { decrement, devide, increment, incrementByAmount, multi, reset } from './features/counter/counterSlice';
import Header from './Header';
import Footer from './Footer';


function App() {
  const [amount, setAmount] = useState(0);
  const [multiAmount, setMulti] = useState(0);
  const [devideAmount, setDevide] = useState(0);

  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {
    dispatch(increment());
  }

  function handleDecrementClick() {
    dispatch(decrement());
  }

  function handleIncAmountClick() {
    dispatch(incrementByAmount(Number(amount)));
  }

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

    <div>
      <Header/>
      <Footer/>
    </div>
    <div className="container">
     
      <header>
        <h1>Counter Application</h1>
        <p>Count: {count}</p>
      </header>
 </div>
      
 <div className='ButtonSection'>
  
  <div className="button-group increment-decrement">
    <button onClick={handleIncrementClick}>Increment</button>
    <button onClick={handleDecrementClick}>Decrement</button>
  </div>

  <div className="input-group amount">
    <input
      type="number"
      value={amount}
      placeholder="Enter amount"
      onChange={(e) => setAmount(e.target.value)}
    />
    <button onClick={handleIncAmountClick}>Increment by Amount</button>
  </div>


  <div className="input-group multiplier-divider">
    <input
      type="number"
      value={multiAmount}
      placeholder="Enter multiplier"
      onChange={(e) => setMulti(e.target.value)}
    />
    <button onClick={handleMultiClick}>Multiply</button>

    <input
      type="number"
      value={devideAmount}
      placeholder="Enter divisor"
      onChange={(e) => setDevide(e.target.value)}
    />
    <button onClick={handleDevideClick}>Divide</button>
  </div>

 
  <div className="reset-button">
    <button onClick={handleResetClick}>Reset</button>
  </div>
</div>

      </>
  );
}

export default App

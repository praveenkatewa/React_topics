import React from 'react'
import { useSelector } from 'react-redux';
import './Header.css';

const Header = ()=> {
  const count = useSelector((state) => state.Counter.value); 
  const count2 = useSelector((state) => state.Counter2.value); 
  const count3 = useSelector((state) => state.Counter3.value);

  return (
    <header>
    <div className="header-title">
      <h1>Counter App</h1>
    </div>

    <div className="header-counters">
      <p className="left">Count: {count}</p>
      <p className="center">Count2: {count2}</p>
      <p className="right">Count3: {count3}</p>
    </div>
  </header>
  )
}

export default Header
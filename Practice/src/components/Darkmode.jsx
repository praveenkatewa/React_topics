import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from '../features/counter/darkModeSlice'; 

const Darkmode = () => {
  const mode = useSelector((state) => state.dark.mode); 
  const dispatch = useDispatch(); 
  
 
  return (
    <div className={mode ? 'dark' : 'light'}>
      <button onClick={() => dispatch(toggleDarkMode())}>
        
      </button>
    </div>
  );
};

export default Darkmode;

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleDarkMode } from '../features/counter/darkModeSlice'; // Correct the import path

function DarkMode() {
  const { mode } = useSelector((state) => state.darkMode);  // Access darkMode slice
  const dispatch = useDispatch();

  console.log('Current Mode:', mode);

  return (
    <div style={{ background: mode ? 'black' : 'white', height: '100vh' }}>
      <button  onClick={() => dispatch(toggleDarkMode())}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default DarkMode;

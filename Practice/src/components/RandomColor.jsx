
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from '../features/counter/randomcolorSlice';  

const RandomColor = () => {
  const color = useSelector((state) => state.randomColor.color);
  const dispatch = useDispatch();

  return (
    <div style={{ backgroundColor: color,height:'20vh',width:'50vh'   }}>
      <button onClick={() => dispatch(changeColor())}  >
        Change Background Color
      </button>
    </div>
  );
};

export default RandomColor;

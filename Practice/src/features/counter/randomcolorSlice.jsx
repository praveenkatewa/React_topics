
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  color: '#ffffff',  
};

export const randomColorSlice = createSlice({
  name: 'randomColor',
  initialState,
  reducers: {
    changeColor: (state) => {
      
      state.color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    },
  },
});

export const { changeColor } = randomColorSlice.actions;
export default randomColorSlice.reducer;

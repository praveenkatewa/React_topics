import { createSlice } from "@reduxjs/toolkit";

// Initial state for the counter
const initialState = {
  value: 5,
};

export const counterSlice_2=createSlice({
  name:'counter',
  initialState:initialState,

  reducers:{
    incrementByAmount: (state, action) => {
      // state.value += 5
      state.value += Number(action.payload)
    },
    reset:(state)=>{
      state.value=5;

    },

  }
})

export const{incrementByAmount,reset}=counterSlice_2.actions
export default counterSlice_2.reducer
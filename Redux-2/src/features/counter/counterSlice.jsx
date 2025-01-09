import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState:{
    value:0
  },

  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },

    incrementByAmount: (state, action) => {
      // state.value += 5
      state.value += Number(action.payload)
    },
    reset:(state)=>{
      state.value= 0

    },
    multi:(state,action)=>{
      state.value *=Number(action.payload)
    },

    devide:(state,action)=>{
      state.value /=Number(action.payload)
    }
  },
})

export const { increment, decrement, incrementByAmount,reset,multi,devide } = counterSlice.actions

export default counterSlice.reducer
import { createSlice } from "@reduxjs/toolkit";


export const counterSlice_3=createSlice({
  name:'counter',
  initialState:{
    value:1,
  },

  reducers:{

    multi:(state,action)=>{
      state.value *=Number(action.payload)
    },

    devide:(state,action)=>{
      state.value /=Number(action.payload)
    },
    reset:(state)=>{
      state.value=1;

    },


  }

})

export const{multi,devide,reset}=counterSlice_3.actions
export default counterSlice_3.reducer
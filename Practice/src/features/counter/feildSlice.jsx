import { createSlice } from '@reduxjs/toolkit';
export const datafile=createSlice({
  name:'data',
  initialState:{
    name:'',
    email:''
  },
  reducers:{
    setData:(state,action)=>{
      state.name=action.payload.name
      state.email=action.payload.email
    }
  }

})
export const{setData}=datafile.actions
export default datafile.reducer

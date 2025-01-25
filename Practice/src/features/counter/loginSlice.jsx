import {createSlice} from "@reduxjs/toolkit";

const initialState={
  user:null,
  
}
export const loginSlice=createSlice({
  name:"log",
  initialState,
  reducers:{
    logData:(state,action)=>{
      state.user=action.payload
    }
  }

})

export const {logData}=loginSlice.actions;
export default loginSlice.reducer;
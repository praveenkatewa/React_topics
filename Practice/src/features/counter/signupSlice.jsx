import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  loggedInUser: null,

};

export const signupSlice =createSlice({
  name:'auth',
  initialState,
  reducers:{
    signupData:(state,action)=>{
      state.user=action.payload
    },
    setLoginData: (state, action) => {
 
      state.loggedInUser = action.payload;
    },


  }



})
export const {signupData,setLoginData}=signupSlice.actions;
export default signupSlice.reducer;
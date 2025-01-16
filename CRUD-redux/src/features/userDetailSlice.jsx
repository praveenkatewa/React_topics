import { createSlice } from "@reduxjs/toolkit";


export const UserDetails=createSlice({
  name:"userDetail",
  initialState:{
    users:[],
    loading:false,
    error:null,
  },
})
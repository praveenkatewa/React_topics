import { createSlice } from '@reduxjs/toolkit'



const dataSlice=createSlice({
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

export const {setData} = dataSlice.actions
export default dataSlice.reducer;
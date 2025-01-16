import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice'
// import amountReducer from '../features/counter/amountSlice'
// import datainfo from '../features/counter/feildSlice'
// import darker from '../features/counter/darkSlice'
// import randomColor from '../features/counter/randomcolorSlice'
import signdata from '../features/counter/signupSlice'

export const store=configureStore({
  reducer:{
    // counter:counterReducer,
    // amounts:amountReducer,
    // data:datainfo,
    // darkMode:darker,
    // randomColor:randomColor
    auth:signdata
    
   },
})


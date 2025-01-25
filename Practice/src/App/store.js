import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from '../features/counter/counterSlice'
// import amountReducer from '../features/counter/amountSlice'
import datainfo from '../features/counter/feildSlice'

// import randomColor from '../features/counter/randomcolorSlice'
// import productReducer from './productapiSlice';
// import signdata from '../features/counter/signupSlice';


// import darker from '../features/counter/darkSlice';



export const store=configureStore({
  reducer:{
    // counter:counterReducer,
    // amounts:amountReducer,
    data:datainfo,
    
    // randomColor:randomColor,
    // auth:signdata,
    // product: productReducer,
   
      // darkMode:darker,
      // log:


    
   },
});



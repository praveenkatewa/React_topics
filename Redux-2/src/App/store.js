import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice.jsx';

import dataField from '../features/counter/feildSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    data:dataField
  },
 

})

















// step
// create store
// wrap app component under provider
// create slice
// register reducer in store
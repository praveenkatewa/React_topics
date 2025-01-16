import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import counter2 from '../features/counter/counterSlice_2';
import counter3 from '../features/counter/counterSlice_3';
import  darkModeReducer from '../features/counter/darkModeSlice';

export const store = configureStore({
  reducer: {
    Counter:counterReducer,
    Counter2:counter2,
    Counter3:counter3,
    darkMode:darkModeReducer
  },
})

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mode: false,  
};

export const darkModeSlice = createSlice({
  name: 'darkMode',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.mode = !state.mode;
    },
  },
});

export const { toggleDarkMode } = darkModeSlice.actions;
export default darkModeSlice.reducer;






// db.saturday.find({ 
//   launchIn: { $in: ['jan', 'feb', 'dec'] },
//   profitpercentage: { $gt: 10 }
// })


// db.saturday.find({ profitpercentage: { $gt: 0 } })


// db.saturday.find({ Losspercentage: { $gt: 0 } })



// db.saturday.find({ price: { $gt: 500, $lt: 700 } })



//  db.saturday.find({
//   category:'laptop' ,totalPrice: { $sum: "$price" }  
//   } )
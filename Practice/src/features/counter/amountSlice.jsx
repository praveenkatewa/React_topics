import { createSlice } from '@reduxjs/toolkit';

const initialState={
  value:5
}
export const amountSlice = createSlice({
  name: 'amounts',
  initialState: initialState,
  reducers: {
    byamount: (state, action) => {
      state.value += Number(action.payload);
    },
    reset:(state)=>{
      state.value=5
    }
  }
});


export const { byamount,reset } = amountSlice.actions;
export default amountSlice.reducer;

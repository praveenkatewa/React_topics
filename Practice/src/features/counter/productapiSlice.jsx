import { createSlice } from '@reduxjs/toolkit';


 export const productSlice = createSlice({
  name: 'product',
  initialState: {
    items: [],
  },
  reducers: {
    setProducts: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

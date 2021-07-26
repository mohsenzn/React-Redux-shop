import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "user",
  initialState: {
    products: [],
  },
  reducers: {
    setProduct: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProduct } = productSlice.actions;

export const selectUser = (state) => state.product.products;

export default productSlice.reducer;

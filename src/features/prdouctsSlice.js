import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "user",
  initialState: {
    products: [
      {
        id: 1,
        title: "html",
        category: "program",
      },
    ],
  },
  reducers: {
    setProduct: (state, action) => {
      return state;
    },
  },
});

export const { setProduct } = productSlice.actions;

export const selectUser = (state) => state.product.products;

export default productSlice.reducer;

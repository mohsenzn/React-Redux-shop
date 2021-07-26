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
    selectProduct: (state, action) => {
      state.products = { ...state, ...action.payload };
    },
    
  },
});

export const { setProduct, selectProduct } = productSlice.actions;

// export const selectUser = (state) => state.product.products;

export default productSlice.reducer;

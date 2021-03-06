import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "../features/prdouctsSlice";

export const store = configureStore({
  reducer: {
    Allproduct: productsReducer,
  },
});

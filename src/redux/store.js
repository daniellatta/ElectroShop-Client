import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/redux/features/searchBar";
import cartSlice from "@/redux/features/shoppingCart";

export const store = configureStore({
  reducer: {
    items: productSlice,
    shoppingCart: cartSlice,
  },
});

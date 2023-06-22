import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/redux/features/products";
import byNameSlice from "@/redux/features/searchBar";
import cartSlice from "@/redux/features/shoppingCart";
import { createUser } from "./features/create";

export const store = configureStore({
  reducer: {
    items: productSlice,
    shoppingCart: cartSlice,
    byName: byNameSlice,
    user: createUser,
  },
});

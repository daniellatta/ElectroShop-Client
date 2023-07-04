import { configureStore } from "@reduxjs/toolkit";
import productSlice from "@/redux/features/products";
import byNameSlice from "@/redux/features/searchBar";
import cartSlice from "@/redux/features/shoppingCart";
import createUserSlice from "@/redux/features/create";
import authSlice from "@/redux/features/login";
import adminDelete from "@/redux/features/adminDelete";

export const store = configureStore({
  reducer: {
    items: productSlice,
    shoppingCart: cartSlice,
    byName: byNameSlice,
    user: createUserSlice,
    auth: authSlice,
    adminDelete: adminDelete,
  },
});

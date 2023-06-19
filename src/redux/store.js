import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@/redux/features/products';
import byNameSlice from '@/redux/features/searchBar';

export const store = configureStore({
  reducer: {
    items: productSlice,
    byName: byNameSlice,
  },
});

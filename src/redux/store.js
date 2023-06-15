import { configureStore } from '@reduxjs/toolkit';
import productSlice from '@/redux/features/searchBar';

export const store = configureStore({
  reducer: {
    items: productSlice,
  },
});

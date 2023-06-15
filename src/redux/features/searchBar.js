import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  products: [],
  error: '',
};

export const fetchProducts = createAsyncThunk('items/fetch', () => {
  return fetch('http://localhost:8080/api/v1/product')
    .then((res) => res.json())
    .then((data) => data);
});

const productSlice = createSlice({
  name: 'items',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProducts.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false;
      state.products = [...action.payload];
      state.error = '';
    });
    builder.addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false;
      state.products = [];
      state.error = action.error.message;
    });
  },
});

export default productSlice.reducer;

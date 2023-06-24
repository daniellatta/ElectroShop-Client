import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  categories: [],
  productsByPrice: [],
  productsByCategory: [],
};

export const fetchByPrice = createAsyncThunk(
  'ByPriceFilter/fetch',
  ({ min, max }) => {
    return axios
      .get(
        `http://localhost:8080/api/v1/product/order/price?min=${min}&max=${max}`
      )
      .then(({ data }) => data);
  }
);

export const fetchByCategory = createAsyncThunk(
  'ByCategoryFilter/fetch',
  (id) => {
    return axios
      .get(`http://localhost:8080/api/v1/product/order/category/${id}`)
      .then(({ data }) => data);
  }
);

export const fetchProducts = createAsyncThunk('items/fetch', () => {
  return axios
    .get('http://localhost:8080/api/v1/product')
    .then(({ data }) => data);
});

export const fetchCategories = createAsyncThunk('category/fetch', () => {
  return axios
    .get('http://localhost:8080/api/v1/category')
    .then(({ data }) => data);
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
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
    builder.addCase(fetchByPrice.fulfilled, (state, action) => {
      state.productsByPrice = action.payload;
    });
    builder.addCase(fetchByCategory.fulfilled, (state, action) => {
      state.productsByCategory = action.payload;
    });
  },
});

export default productSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  loading: false,
  products: [],
  categories: [],
  productsByPrice: [],
  productDetail: {},
};

export const fetchByPrice = createAsyncThunk(
  'ByPriceFilter/fetch',
  ({ min, max }) => {
    return axios
      .get(
        `https://electroshop-api.onrender.com/api/v1/product/order/price?min=${min}&max=${max}`
      )
      .then(({ data }) => data);
  }
);

export const fetchById = createAsyncThunk('productById/fetch', (id) => {
  return axios
    .get(`https://electroshop-api.onrender.com/api/v1/product/${id}`)
    .then(({ data }) => data)
    .catch((error) => {
      console.error('Error fetching product details: ', error.message);
    });
});

export const fetchByCategory = createAsyncThunk(
  'ByCategoryFilter/fetch',
  (id) => {
    return axios
      .get(
        `https://electroshop-api.onrender.com/api/v1/product/order/category/${id}`
      )
      .then(({ data }) => data);
  }
);

export const fetchProducts = createAsyncThunk('items/fetch', () => {
  return axios
    .get('https://electroshop-api.onrender.com/api/v1/product')
    .then(({ data }) => data);
});

export const fetchCategories = createAsyncThunk('category/fetch', () => {
  return axios
    .get('https://electroshop-api.onrender.com/api/v1/category')
    .then(({ data }) => data);
});

const productSlice = createSlice({
  name: 'items',
  initialState,
  reducers: {
    orderProducts: (state, action) => {
      const orderType = action.payload.toLowerCase();
      if (orderType === 'az') {
        state.products.sort((a, b) => a.name.localeCompare(b.name));
      } else if (orderType === 'za') {
        state.products.sort((a, b) => b.name.localeCompare(a.name));
      }
    },
    cleanDetail: (state) => {
      state.productDetail = [];
    },
  },
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
      state.products = action.payload;
    });
    builder.addCase(fetchById.fulfilled, (state, action) => {
      state.productDetail = action.payload;
    });
  },
});

export const { orderProducts, cleanDetail } = productSlice.actions;
export default productSlice.reducer;

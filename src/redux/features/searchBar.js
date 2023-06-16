import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  productsByName: [],
  error: '',
};

export const fetchProductByName = createAsyncThunk(
  'itemByName/fetch',
  (name) => {
    return axios
      .get(`http://localhost:8080/api/v1/product/find/${name}`)
      .then(({ data }) => data);
  }
);

const byNameSlice = createSlice({
  name: 'byName',
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchProductByName.fulfilled, (state, action) => {
      state.productsByName = [...action.payload];
      state.error = '';
    });
    builder.addCase(fetchProductByName.rejected, (state, action) => {
      state.productsByName = [];
      state.error = action.error.message;
    });
  },
});

export default byNameSlice.reducer;

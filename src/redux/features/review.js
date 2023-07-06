import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  send: false,
  error: '',
};

export const postReview = createAsyncThunk(
  'postReview/fetch',
  (review, token) => {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    return axios
      .post(
        'https://electroshop-api.onrender.com/api/v1/review',
        review,
        config
      )
      .then(({ data }) => data);
  }
);

const reviewSlice = createSlice({
  name: 'review',
  initialState,
  reducers: {
    cleanSendStatus: (state, action) => {
      state.send = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(postReview.fulfilled, (state, action) => {
      state.send = true;
    });
    builder.addCase(postReview.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { cleanSendStatus } = reviewSlice.actions;
export default reviewSlice.reducer;

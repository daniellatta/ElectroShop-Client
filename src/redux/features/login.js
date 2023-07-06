import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  url: 'https://electroshop-api.onrender.com/api/v1/auth/login/google',
  isAuthenticated: JSON.parse(localStorage.getItem('isAuthenticated')),
  user: {},
  rejected: '',
};

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (loginData) => {
    const response = await axios.get(
      'https://electroshop-api.onrender.com/api/v1/user',
      loginData
    );
    return response.data;
  }
);

export const userAuth = createAsyncThunk(
  'userAutSv/post',
  ({ email, password }) => {
    return axios
      .post('https://electroshop-api.onrender.com/api/v1/auth/login', {
        email,
        password,
      })
      .then(({ data }) => data);
  }
);

export const googleAuthFunc = createAsyncThunk('googleAuth/fetch', () => {
  return axios
    .get('https://electroshop-api.onrender.com/api/v1/auth/login/google')
    .then(({ data }) => data);
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      localStorage.setItem('isAuthenticated', 'true');
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = {};
      localStorage.setItem('isAuthenticated', 'false');
    },
    googleAuth: (state, action) => {
      window.open(state.url, 'Popup', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userAuth.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const { login, logout, googleAuth } = authSlice.actions;
export default authSlice.reducer;

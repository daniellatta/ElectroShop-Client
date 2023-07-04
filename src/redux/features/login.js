import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData) => {
    const response = await axios.post(
      "https://electroshop-api.onrender.com/api/v1/user",

      loginData
    );
    return response.data;
  }
);

const initialState = {
  url: "https://electroshop-api.onrender.com/api/v1/auth/login/google",
  isAuthenticated: false,
  user: {},
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
      localStorage.setItem("isAuthenticated", "true");
    },
    logout: (state) => {
      state.isAuthenticated = false;
      localStorage.setItem("isAuthenticated", "false");
    },
    googleAuth: (state, action) => {
      window.open(state.url, "Popup", action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(googleAuthFunc.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { login, logout, googleAuth } = authSlice.actions;
export default authSlice.reducer;

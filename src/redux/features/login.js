import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData) => {
    const response = await axios.get(
      "http://localhost:8080/api/v1/user",
      loginData
    );
    return response.data;
  }
);

const initialState = {
  isAuthenticated: false,
  user: {},
  error: "",
};

export const fetchGoogleAuth = createAsyncThunk("googleAuth/login", () => {
  return axios
    .get("http://localhost:8080/api/v1/auth/login/google")
    .then(({ data }) => {
      if (data.status === 1) {
        const user = data.profile;
        return user;
      }
      return "Error amiguito";
    });
});

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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGoogleAuth.fulfilled, (state, action) => {
      state.isAuthenticated = true;
      state.user = action.payload;
    });
    builder.addCase(fetchGoogleAuth.rejected, (state, action) => {
      state.isAuthenticated = false;
      state.error = action.payload;
    });
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

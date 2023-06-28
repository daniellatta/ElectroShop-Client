import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (loginData) => {
    const response = await axios.post(
      "http://localhost:8080/api/v1/user",
      loginData
    );
    return response.data;
  }
);

const initialState = {
  isAuthenticated:
    typeof localStorage !== "undefined" &&
    localStorage?.getItem("isAuthenticated")
      ? JSON.parse(localStorage?.getItem("isAuthenticated"))
      : false,
  isAuthenticated: JSON.parse(localStorage.getItem("isAuthenticated")),
  user: null,
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
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;

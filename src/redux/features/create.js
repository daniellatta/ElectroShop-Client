import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
  "user/createUser",
  async (userData) => {
    const response = await axios.post(
      "http://localhost:8080/api/v1/user",
      userData
    );
    return response.data;
  }
);

const createUserSlice = createSlice({
  name: "user",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.push(action.payload);
    });
  },
});

export default createUserSlice.reducer;
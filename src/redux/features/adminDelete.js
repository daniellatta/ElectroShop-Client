import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetchUsers", async () => {
  const response = await axios.get(
    "https://electroshop-api.onrender.com/api/v1/user"
  );
  return response.data;
});

export const deleteUser = createAsyncThunk(
  "users/deleteUser",
  async (userId) => {
    await axios.delete(
      `https://electroshop-api.onrender.com/api/v1/user/${userId}`
    );
    return userId;
  }
);

export const reactivateAccount = createAsyncThunk(
  "users/reactivateAccount",
  async (userId) => {
    const response = await axios.patch(
      `https://electroshop-api.onrender.com/api/v1/user/${userId}`,
      { active: true }
    );
    return response.data;
  }
);

const adminSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        state.users = state.users.filter((user) => user.id !== action.payload);
      })
      .addCase(reactivateAccount.fulfilled, (state, action) => {
        const updatedUser = action.payload;
        state.users = state.users.map((user) =>
          user.id === updatedUser.id ? updatedUser : user
        );
      });
  },
});

export default adminSlice.reducer;

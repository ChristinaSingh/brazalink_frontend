import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { authService } from "./authService";

const userExist = JSON.parse(localStorage.getItem("user"));

const initialState = {
  user: userExist ? userExist : null,
  isLoading: false,
  isSuccess: false,
  isError: false,
  message: "Something went wrong",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.message = "Loading...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
        state.message = "Login successful!";
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload || "Something went wrong";
      });
  },
});

export default authSlice.reducer;

export const loginUser = createAsyncThunk("LOGOUT/USER", async () => {
  console.log("user login");
});

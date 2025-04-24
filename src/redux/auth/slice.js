import { createSlice } from "@reduxjs/toolkit";

import { login, registerUser } from "./operations";

const initialState = {
  userName: "",
  userEmail: "",
  isLoggedIn: false,
  isLoading: false,
  error: null,
  token: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.name;
        state.userEmail = action.payload.email;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = action.payload.message;
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isLoggedIn = true;
        state.userName = action.payload.name;
        state.userEmail = action.payload.email;
        state.token = action.payload.token;
      });
  },
});

export default authSlice.reducer;

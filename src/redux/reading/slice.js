import { createSlice } from "@reduxjs/toolkit";

import { startReading, stopReading } from "./operations";

const initialState = {
  // currentReading: {},
  currentBook: {},
  isLoading: false,
  error: null,
};

const readingSlice = createSlice({
  name: "reading",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(startReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(startReading.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.currentReading = payload;
        state.currentBook = payload;
      })
      .addCase(startReading.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(stopReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(stopReading.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        // state.currentReading = payload;
        state.currentBook = payload;
        console.log(state.currentBook);
      })
      .addCase(stopReading.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});

export default readingSlice.reducer;

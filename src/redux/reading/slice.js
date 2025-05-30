import { createSlice } from "@reduxjs/toolkit";

import { deleteReading, startReading, stopReading } from "./operations";

const initialState = {
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
        state.currentBook = payload;
      })
      .addCase(stopReading.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(deleteReading.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteReading.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.currentBook.progress = payload.progress;
        state.currentBook.timeLeftToRead = payload.timeLeftToRead;
      })
      .addCase(deleteReading.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});

export default readingSlice.reducer;

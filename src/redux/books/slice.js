import { createSlice } from "@reduxjs/toolkit";

import { getBooks } from "./operations";

const initialState = {
  books: [],
  page: 1,
  totalPages: null,
  isLoading: false,
  error: null,
};

const bookSlice = createSlice({
  name: "books",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getBooks.fulfilled, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        state.books = action.payload.results;
        state.page = action.payload.page;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(getBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default bookSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

import {
  addBook,
  addBookFromRecom,
  deleteBook,
  getMyBooks,
} from "./operations";

const initialState = {
  library: [],
  filteredBooks: [],
  isLoading: false,
  error: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
  reducers: {
    clearLibrary: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(addBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.isLoading = false;
        state.library = [...state.library, action.payload];
      })
      .addCase(addBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.message;
      })
      .addCase(addBookFromRecom.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(addBookFromRecom.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = [...state.library, action.payload];
      })
      .addCase(addBookFromRecom.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getMyBooks.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getMyBooks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.filteredBooks = action.payload;
        if (action.meta.arg === "all") {
          state.library = action.payload;
        }
      })
      .addCase(getMyBooks.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(deleteBook.fulfilled, (state, action) => {
        state.isLoading = false;
        state.library = state.library.filter(
          (book) => book._id !== action.payload
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default librarySlice.reducer;

export const { clearLibrary } = librarySlice.actions;

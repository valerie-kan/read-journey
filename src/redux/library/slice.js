import { createSlice } from "@reduxjs/toolkit";
import { addBook, addBookFromRecom, deleteBook } from "./operations";

const initialState = {
  library: [],
  isLoading: false,
  error: null,
};

const librarySlice = createSlice({
  name: "library",
  initialState,
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
        // localStorage.setItem("my-library", JSON.stringify(state.library));
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
        // localStorage.setItem("my-library", JSON.stringify(state.library));
      })
      .addCase(addBookFromRecom.rejected, (state, action) => {
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
          (book) => book._id !== action.payload.id
        );
      })
      .addCase(deleteBook.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export default librarySlice.reducer;

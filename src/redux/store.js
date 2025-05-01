import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/slice";
import booksReducer from "./books/slice";
import libraryReducer from "./library/slice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    books: booksReducer,
    library: libraryReducer,
  },
});

export default store;

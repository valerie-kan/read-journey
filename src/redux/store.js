import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./auth/slice";
import booksReducer from "./books/slice";
import libraryReducer from "./library/slice";
import readingReducer from "./reading/slice";

const persistLibConfig = {
  key: "library",
  storage,
  whitelist: ["library"],
};

const persistAuthConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(persistAuthConfig, authReducer),
    books: booksReducer,
    library: persistReducer(persistLibConfig, libraryReducer),
    reading: readingReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

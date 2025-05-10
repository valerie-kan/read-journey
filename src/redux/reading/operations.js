import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const startReading = createAsyncThunk(
  "reading/start",
  async (bookData, thunkAPI) => {
    try {
      const { data } = await api.post("/books/reading/start", bookData);

      const currentReading = data.progress[data.progress.length - 1];

      return currentReading;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const stopReading = createAsyncThunk(
  "reading/finish",
  async (bookData, thunkAPI) => {
    try {
      const { data } = await api.post("/books/reading/finish", bookData);

      const currentReading = data.progress[data.progress.length - 1];
      return currentReading;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

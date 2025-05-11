import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const startReading = createAsyncThunk(
  "reading/start",
  async (bookData, thunkAPI) => {
    try {
      const { data } = await api.post("/books/reading/start", bookData);

      return data;
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

      localStorage.setItem(
        `readingProgress_${bookData.id}`,
        JSON.stringify({
          totalPages: data.totalPages,
          progress: data.progress,
          leftToRead: data.timeLeftToRead,
        })
      );
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

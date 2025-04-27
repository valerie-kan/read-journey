import { createAsyncThunk } from "@reduxjs/toolkit";

import api from "../../utils/api";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({ page, limit }, thunkAPI) => {
    try {
      const { data } = await api.get("/books/recommend", {
        params: { page, limit },
      });
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.responce?.data || error.message);
    }
  }
);

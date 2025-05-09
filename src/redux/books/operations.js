import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";

export const getBooks = createAsyncThunk(
  "books/getBooks",
  async ({ page = 1, limit, filters = {} }, thunkAPI) => {
    try {
      const { data } = await api.get("/books/recommend", {
        params: { page, limit, ...filters },
      });
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

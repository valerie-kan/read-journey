import { createAsyncThunk } from "@reduxjs/toolkit";
import { api } from "../../utils/api";

export const addBook = createAsyncThunk(
  "library/addBook",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("/books/add", formData);
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const addBookFromRecom = createAsyncThunk(
  "library/addBookFromRecom",
  async (id, thunkAPI) => {
    try {
      const { data } = await api.post(`books/add/${id}`);
      console.log(data);
      return data;
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "library/deleteBook",
  async (id, thunkAPI) => {
    try {
      await api.delete(`books/remove/${id}`);
      return id;
    } catch (error) {
      console.log(error);
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const getMyBooks = createAsyncThunk(
  "books/getMyBooks",
  async (status, thunkAPI) => {
    try {
      if (status === "all") {
        const statuses = ["unread", "in-progress", "done"];
        const allBooks = [];

        for (const status of statuses) {
          const { data } = await api.get(`/books/own?status=${status}`);
          allBooks.push(...data);
        }

        return allBooks;
      } else {
        const { data } = await api.get(`/books/own?status=${status}`);
        console.log(data);
        return data;
      }
    } catch (error) {
      throw thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

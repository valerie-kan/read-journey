import { createAsyncThunk } from "@reduxjs/toolkit";

import { api } from "../../utils/api";
import { refreshApi } from "../../utils/api";

export const setToken = (token) => {
  api.defaults.headers.common.Authorization = `Bearer ${token}`;
};

export const clearToken = () => {
  api.defaults.headers.common.Authorization = "";
};

export const registerUser = createAsyncThunk(
  "auth/register",
  async (formData, thunkAPI) => {
    try {
      const { data } = await api.post("users/signup", formData);
      setToken(data.token);
      console.log(data.refreshToken);
      localStorage.setItem("refreshToken", data.refreshToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (formData, thunkApi) => {
    try {
      const { data } = await api.post("users/signin", formData);
      setToken(data.token);
      localStorage.setItem("refreshToken", data.refreshToken);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response?.data || error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    const { data } = await api.post("users/signout");
    clearToken();
    return data;
  } catch (error) {
    console.log("Error occured");
    return thunkAPI.rejectWithValue(error.response?.data || error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const refreshToken = localStorage.getItem("refreshToken");
    if (!refreshToken) {
      return thunkAPI.rejectWithValue("Refresh token not found");
    }

    try {
      const { data } = await refreshApi.get("/users/current/refresh", {
        headers: {
          Authorization: `Bearer ${refreshToken}`,
        },
      });
      const { token, refreshToken: newRefreshToken, name, email } = data;

      setToken(token);

      if (newRefreshToken) {
        localStorage.setItem("refreshToken", newRefreshToken);
      }

      return { token, name, email };
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error.response?.data || error.message);
    }
  }
);

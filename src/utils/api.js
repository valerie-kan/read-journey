import axios from "axios";

export const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export const refreshApi = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

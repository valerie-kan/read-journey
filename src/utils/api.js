import axios from "axios";

const api = axios.create({
  baseURL: "https://readjourney.b.goit.study/api",
});

export default api;

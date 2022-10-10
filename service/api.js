import axios from "axios";

const api = axios.create({
  baseURL: "https://ford-challenge.herokuapp.com",
});

export default api;
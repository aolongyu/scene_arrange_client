import axios from "axios";

const BaseURL = "http://localhost:3000/api";

const request = axios.create({
  baseURL: BaseURL,
});

export default request;

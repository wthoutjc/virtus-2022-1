import axios from "axios";

const BASE_URL = process.env.NODE_ENV === 'production' ? 'https://virtus-training.vercel.app/' : 'http://localhost:3000/api'

const request = axios.create({
  baseURL: BASE_URL,
});

export default request;

import axios from 'axios';
const API_URL = 'http://localhost:8000';
const api=axios.create({
    baseURL:API_URL,
})
export const uploadFile = (formData) =>
  api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
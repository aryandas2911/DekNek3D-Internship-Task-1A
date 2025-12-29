import axios from 'axios';
const API_URL = 'https://glb-converter-backend.onrender.com';
const api=axios.create({
    baseURL:API_URL,
})
export const uploadFile = (formData) =>
  api.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
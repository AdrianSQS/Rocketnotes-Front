// Configurações do axios

import axios from "axios"; // para trabalhar com requisições HTTP

export const api = axios.create({
  baseURL: "https://rocketnotes-back-end-vvan.onrender.com"
});
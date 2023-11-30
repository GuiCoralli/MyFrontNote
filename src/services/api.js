import axios from "axios";

export const api = axios.create({
    baseURL: "https://mybacknotes-api-kk3j.onrender.com"
});

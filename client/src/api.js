import axios from "axios";

const API = axios.create({
    baseURL: import.meta.env.VITE_API_URL || process.env.NEXT_PUBLIC_API_URL,
});

// Token automatically set karne ke liye
API.interceptors.request.use((req) => {
    const token = localStorage.getItem("token");
    if (token) {
        req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
});

export default API;

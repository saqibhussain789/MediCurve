import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

export const testAPI = () => API.get("/");
export const signup = (data) => API.post("/auth/signup", data);
export const login = (data) => API.post("/auth/login", data);



export const addEntry = (data, token) =>
  API.post("/entries", data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  export const getEntries = (token) =>
  API.get("/entries", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });



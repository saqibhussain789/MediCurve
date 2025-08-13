import axios from 'axios';

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

const token = localStorage.getItem("token");


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


export const getStats = (token) =>
  API.get("/stats", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });


export const getProfile = async (token) => {
  const res = await axios.get('/api/profile', {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};

export const updateProfile = async (token, data) => {
  const res = await axios.put('/api/profile', data, {
    headers: { Authorization: `Bearer ${token}` }
  });
  return res.data;
};


import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api/auth'; // Replace with your Spring Boot API URL

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor to include the token in headers
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  // Exclude /register and /login from adding the token
  if (token && !config.url.includes('/register') && !config.url.includes('/login')) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Register User API
export const registerUser = async (userData) => {
  try {
    const response = await api.post('/register', userData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed. Please try again.";
  }
};

// Login User API
export const loginUser = async (loginData) => {
  try {
    const response = await api.post('/login', loginData);
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Login failed. Please try again.";
  }
};

// Example: Fetch protected data (requires authentication)
export const getProtectedData = async () => {
  try {
    const response = await api.get('/protected');
    return response.data;
  } catch (error) {
    throw error.response?.data?.message || "Failed to fetch protected data.";
  }
};
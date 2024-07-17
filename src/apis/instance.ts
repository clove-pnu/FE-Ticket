import axios from 'axios';

export const authInstance = axios.create({
  baseURL: '/api/auth',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const deployInstance = axios.create({
  baseURL: '/api/deploy',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

deployInstance.interceptors.request.use(
  // if expired
  // refresh token.
  // store new access token
  // and continue request.
  (config) => config,
  (error) => Promise.reject(error),
);

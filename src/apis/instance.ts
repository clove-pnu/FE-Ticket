import axios from 'axios';

export const deployInstance = axios.create({
  baseURL: '/api/deploy',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
    Authorization: 'Bearer ExampleToken',
  },
});

export const authInstance = axios.create({
  baseURL: '/api/auth',
  timeout: 3000,
  headers: {
    'Content-Type': 'application/json',
  },
});

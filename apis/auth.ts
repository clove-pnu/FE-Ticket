import { authInstance } from './instance';

interface LoginParams {
  id: string;
  password: string;
}

export async function login({ id, password }: LoginParams) {
  return authInstance.post('/login', {
    id, password,
  });
}

export async function register({ id, password }: LoginParams) {
  return authInstance.post('/register', {
    id, password,
  });
}

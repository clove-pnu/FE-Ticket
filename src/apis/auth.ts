import { AxiosResponse } from 'axios';
import { authInstance } from './instance';

interface LoginParams {
  email: string;
  password: string;
}

interface ReissueParams {
  accessToken: string;
  refreshToken: string;
}

interface SignUpResponse {
  email: string;
}

interface TokenResponse {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
}

export async function signUp({
  email,
  password,
}: LoginParams): Promise<AxiosResponse<SignUpResponse>> {
  return authInstance.post('/signup', {
    email, password,
  });
}

export async function login({
  email,
  password,
}: LoginParams): Promise<AxiosResponse<TokenResponse>> {
  return authInstance.post('/login', {
    email, password,
  });
}

export async function reissue({
  accessToken,
  refreshToken,
}: ReissueParams): Promise<AxiosResponse<TokenResponse>> {
  return authInstance.post('/reissue', {
    accessToken, refreshToken,
  });
}

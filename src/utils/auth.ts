import { AccessToken } from './type';

export function getExistToken() {
  return localStorage.getItem('accessToken');
}

export function setToken({ accessToken, accessTokenExpiresIn }: AccessToken) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('accessTokenExpiresIn', accessTokenExpiresIn.toString());
}

export function deleteToken() {
  localStorage.removeItem('accessToken');
}

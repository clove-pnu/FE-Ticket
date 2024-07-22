import { AccessToken } from './type';

export function getExistToken() {
  return localStorage.getItem('accessToken');
}

export function getTokenExpireDate() {
  return Number(localStorage.getItem('accessTokenExpiresIn'));
}

export function setToken({ accessToken, accessTokenExpiresIn }: AccessToken) {
  localStorage.setItem('accessToken', accessToken);
  localStorage.setItem('accessTokenExpiresIn', accessTokenExpiresIn.toString());
}

export function deleteToken() {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('accessTokenExpiresIn');

  // need to be updated
  localStorage.removeItem('refreshToken');
}

// need to be updated
export function setRefreshToken({ refreshToken }: { refreshToken: string }) {
  localStorage.setItem('refreshToken', refreshToken);
}

export function getExistRefreshToken() {
  return localStorage.getItem('refreshToken');
}

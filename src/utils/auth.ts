export function getExistToken() {
  return localStorage.getItem('accessToken');
}

export function setToken({ token }: { token: string }) {
  localStorage.setItem('accessToken', token);
}

export function deleteToken() {
  localStorage.removeItem('accessToken');
}

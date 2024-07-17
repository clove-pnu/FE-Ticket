export interface Pod {
  name: string;
  status: string;
  namespace: string
}

export interface Auth {
  isLogin: boolean;
}

export interface SignUpResponse {
  email: string;
}

export interface TokenResponse {
  grantType: string;
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
}

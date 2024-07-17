export interface PodInfo {
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

export interface PlayCardInfo {
  pid: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

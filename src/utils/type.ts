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

export interface AccessToken {
  accessToken: string;
  accessTokenExpiresIn: number;
}

export interface TokenResponse extends AccessToken {
  grantType: string;
  refreshToken: string;
}

export interface PlayCardInfo {
  pid: number;
  thumbnailUrl: string;
  title: string;
  location: string;
  startDate: Date;
  endDate: Date;
}

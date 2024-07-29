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

export interface DeployedPlayCardInfo {
  pid: number;
  thumbnailUrl: string;
  title: string;
  playType: string;
  bookedSeatCount: number;
  totalSeatCount: number;
  status: string;
  deployDate: Date;
}

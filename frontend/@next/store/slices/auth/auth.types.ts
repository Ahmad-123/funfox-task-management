export interface UserInfoType {
  id?: string;
  email: string;
  role: string;
  fullname?: string;
  kyc?: string;
  googleAuthStatus?: boolean;
  googleAuthRegister?: boolean;
}
export interface AuthSliceState {
  userInfo: UserInfoType | null;
}

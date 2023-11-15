export interface UserInfoType {
  id: string;
  userName: string;
  name: string;
  group: string;
}
export interface AuthSliceState {
  userInfo: UserInfoType | null;
}

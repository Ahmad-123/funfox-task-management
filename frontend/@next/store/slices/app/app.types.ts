export interface AppSliceState {
  userDetailPageType: string;
  eventStatusType: string;
  eventName: string;
  toggle2Fa: string;
  wallets: Array<{ chainId: string; chainName: string; walletAddress: string }>;
}

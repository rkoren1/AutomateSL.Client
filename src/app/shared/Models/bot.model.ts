export interface Bots {
  id: number;
  loginName: string;
  running: boolean;
}

export interface ILinkAccData {
  loginFirstName: string;
  loginPassword: string;
  loginSpawnLocation: string;
  loginRegion: string;
}

export interface IRemoveBot {
  success: boolean;
}

export interface IStartBot {
  success: boolean;
}

export interface IStopBot {
  success: boolean;
}

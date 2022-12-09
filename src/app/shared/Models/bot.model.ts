export interface Bots {
  id: number;
  name: string;
  running: boolean;
}

export interface ILinkAccData {
  loginFirstName: string;
  loginPassword: string;
  loginSpawnLocation: string;
  loginRegion: string;
  loginRegionX: number;
  loginRegionY: number;
  loginRegionZ: number;
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

export interface Bots {
  id: number;
  loginName: string;
  loginLastName: string;
  running: boolean;
  uuid: string;
  imageId: string;
}
export interface SharedBot {
  id: number;
  loginName: string;
  loginLastName: string;
  running: boolean;
  uuid: string;
  imageId: string;
}

export interface ILinkAccData {
  id: number;
  loginFirstName: string;
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
export interface IBotTypes {
  id: number;
  botType: string;
}

export interface IAddBot {
  slUserName: string;
  loginPassword: string;
  loginSpawnLocation: string;
  loginRegion: string;
}
export interface IAddBotResponse {
  success: boolean;
}

export interface ILinkSharedBotToUser {
  success: boolean;
}

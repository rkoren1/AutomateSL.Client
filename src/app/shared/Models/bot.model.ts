export interface Bot {
  id: number;
  loginName: string;
  loginLastName: string;
  running: boolean;
  uuid: string;
  imageId: string;
  validSubscription: boolean;
}

export interface GetAllBots {
  my: Bot[];
  shared: Bot[];
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
  imageId: string;
  loginLastName?: string;
  loginSpawnLocation: string;
  loginRegion?: any;
  subscriptions: Subscription[];
}
interface Subscription {
  subscriptionStart: string;
  subscriptionEnd: string;
  package: Package;
}

interface Package {
  id: number;
  packageName: string;
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

export interface IBotConfiguration {
  loginSpawnLocation: string;
  loginRegion: string;
  botId: number;
}

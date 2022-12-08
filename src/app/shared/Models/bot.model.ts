export interface Bots {
  id: number;
  name: string;
  running: boolean;
}

export interface ILinkAccData {
  loginFirstName: string;
  loginLastName: string;
  loginPassword: string;
  loginStartLocation: string;
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

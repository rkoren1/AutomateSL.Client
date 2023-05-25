export interface GetDiscordSettings {
  id: number;
  webHookUrl: string;
  slGroupUuid: string;
  discChannelId: string;
}

export interface DiscordSettingsInput {
  id: number;
  discChannelId: string;
  slGroupUuid: string;
  webHookUrl: string;
  botId: number;
}

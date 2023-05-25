export interface GetDiscordSettings {
  webHookUrl: string;
  slGroupUuid: string;
  discChannelId: string;
}

export interface DiscordSettingsInput {
  discChannelId: string;
  slGroupUuid: string;
  webHookUrl: string;
  botId: number;
}

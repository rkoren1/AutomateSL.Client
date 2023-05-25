import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class DiscordSettingsService {
  constructor(private http: HttpClient) {}

  setDiscordSettings(data: any) {
    return this.http.post(environment.apiUrl + '/bot/setdiscordsettings', {
      botId: data.botId,
      discChannelId: data.discChannelId,
      webHookUrl: data.webHookUrl,
      slGroupUuid: data.slGroupUuid,
    });
  }
}

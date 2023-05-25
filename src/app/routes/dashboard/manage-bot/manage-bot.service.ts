import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ILinkAccData } from '@shared/Models/bot.model';
import { GetDiscordSettings } from '@shared/Models/discordSettings.model';

@Injectable({
  providedIn: 'root',
})
export class ManageBotService {
  constructor(private http: HttpClient) {}

  getDiscordSettings(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.get<GetDiscordSettings[]>(environment.apiUrl + '/bot/getdiscordsettings', {
      params,
    });
  }
  getBotConfiguration(firstName: string, lastName: string) {
    const params = new HttpParams().append('firstName', firstName).append('lastName', lastName);
    return this.http.get<ILinkAccData>(environment.apiUrl + '/bot/getbotconfiguration', { params });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ILinkAccData } from '@shared/Models/bot.model';

@Injectable({
  providedIn: 'root',
})
export class ManageBotService {
  constructor(private http: HttpClient) {}

  getBotConfiguration(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.get<ILinkAccData>(environment.apiUrl + '/bot/getbotconfiguration', { params });
  }
}

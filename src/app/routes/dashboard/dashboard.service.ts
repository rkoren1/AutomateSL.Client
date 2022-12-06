import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Bots, LinkAccData } from '@shared/Models/bot.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getBots() {
    return this.http.get<[Bots]>(environment.apiUrl + '/bot/getbots');
  }
  addBot(botName: string) {
    return this.http.post(environment.apiUrl + '/bot/createbot', { name: botName });
  }
  getBotConfiguration(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.get<LinkAccData>(environment.apiUrl + '/bot/getbotconfiguration', { params });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Bots, ILinkAccData, IRemoveBot, IStartBot, IStopBot } from '@shared/Models/bot.model';

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
    return this.http.get<ILinkAccData>(environment.apiUrl + '/bot/getbotconfiguration', { params });
  }
  removeBot(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.delete<IRemoveBot>(environment.apiUrl + '/bot/removebot', { params });
  }
  startBot(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.put<IStartBot>(environment.apiUrl + '/bot/startbot', null, { params });
  }
  stopBot(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.put<IStopBot>(environment.apiUrl + '/bot/stopbot', null, { params });
  }
}

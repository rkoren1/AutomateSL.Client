import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import {
  GetAllBots,
  IAddBot,
  IAddBotResponse,
  IBotTypes,
  ILinkAccData,
  ILinkSharedBotToUser,
  IRemoveBot,
  IStartBot,
  IStopBot,
  SharedBot,
} from '@shared/Models/bot.model';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getSharedBots() {
    return this.http.get<SharedBot[]>(environment.apiUrl + '/bot/getsharedbots');
  }

  getBots() {
    return this.http.get<GetAllBots>(environment.apiUrl + '/bot/getbots');
  }
  addBot(data: IAddBot) {
    return this.http.post<IAddBotResponse>(environment.apiUrl + '/bot/createbot', data);
  }
  linkSharedBotToUser(sharedBotId: number) {
    return this.http.post<ILinkSharedBotToUser>(environment.apiUrl + '/bot/linksharedbottouser', {
      sharedBotId,
    });
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
  getBotTypes() {
    return this.http.get<IBotTypes[]>(environment.apiUrl + '/bot/getbottypes');
  }
  refreshBotStatus(botId: number) {
    const params = new HttpParams().append('botId', botId);
    return this.http.get(environment.apiUrl + '/bot/refreshbotstatus', {
      params,
    });
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ILinkAccData } from '@shared/Models/bot.model';
import { Package } from '@shared/Models/package.model';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionPopupService {
  constructor(private http: HttpClient) {}

  linkAcctoBot(botId: number, data: ILinkAccData) {
    const params = new HttpParams().append('botId', botId);
    return this.http.put(
      environment.apiUrl + '/bot/linkacctobot',
      {
        loginFirstName: data.loginFirstName,
        loginSpawnLocation: data.loginSpawnLocation,
        loginRegion: data.loginRegion,
      },
      { params }
    );
  }
  getPackages() {
    return this.http.get<Package[]>(environment.apiUrl + '/bot/getpackages');
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ILinkAccData } from '@shared/Models/bot.model';

@Injectable({
  providedIn: 'root',
})
export class LinkAccToBotPopupService {
  constructor(private http: HttpClient) {}

  linkAcctoBot(botId: number, data: ILinkAccData) {
    const params = new HttpParams().append('botId', botId);
    return this.http.put(
      environment.apiUrl + '/bot/linkacctobot',
      {
        loginFirstName: data.loginFirstName,
        loginPassword: data.loginPassword,
        loginStartLocation: data.loginStartLocation,
      },
      { params }
    );
  }
}

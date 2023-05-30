import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IBotConfiguration } from '@shared/Models/bot.model';

@Injectable({
  providedIn: 'root',
})
export class StartupPopupService {
  constructor(private http: HttpClient) {}

  setBotConfiguration(data: IBotConfiguration) {
    return this.http.post(environment.apiUrl + '/bot/setbotconfiguration', data);
  }
}

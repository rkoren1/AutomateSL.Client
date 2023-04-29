import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '@core/bootstrap/menu.service';
import { environment } from '@env/environment';
import { Bots } from '@shared/Models/bot.model';
import { of } from 'rxjs';
import { Token } from './interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  getBots() {
    return this.http.get<[Bots]>(environment.apiUrl + '/bot/getbots');
  }

  menu(isValidToken: boolean) {
    const menu: Menu[] = [
      {
        route: '/',
        name: 'dashboard',
        type: 'link',
        icon: 'dashboard',
      },
      {
        route: 'dashboard/',
        name: 'my-bots',
        type: 'sub',
        icon: 'person',
        children: [],
      },
      {
        route: 'dashboard/',
        name: 'shared-bots',
        type: 'sub',
        icon: 'people',
        children: [],
      },
    ];
    if (isValidToken) {
      this.getBots().subscribe(bots => {
        bots.forEach(bot => {
          menu[1].children?.push({
            route: bot.loginName + '-' + bot.loginLastName,
            name: bot.loginName,
            type: 'link',
          });
        });
      });
    }

    return of(menu);
  }

  login(email: string, password: string, rememberMe = false) {
    return this.http.post<Token>(
      environment.apiUrl + '/user/authenticate',
      {
        email,
        password,
        rememberMe,
      },
      { withCredentials: true }
    );
  }

  refresh(params: Record<string, any>) {
    return this.http.get<Token>(environment.apiUrl + '/refreshtoken', {
      withCredentials: true,
    });
  }

  logout() {
    return this.http.get<any>(environment.apiUrl + '/logout', { withCredentials: true });
  }
}

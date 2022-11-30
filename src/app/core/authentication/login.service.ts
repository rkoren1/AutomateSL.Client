import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '@core';
import { environment } from '@env/environment';
import { ILoginModel } from 'app/routes/sessions/login/login.model';
import { map } from 'rxjs/operators';
import { IRefreshTokenModel } from './authentication.model';
import { Token, User } from './interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(email: string, password: string) {
    const params = new HttpParams().append('email', email).append('password', password);
    return this.http.get<ILoginModel>(environment.apiUrl + '/user/authenticate', {
      params,
      withCredentials: true,
    });
  }

  refresh(params: Record<string, any>) {
    return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.get<IRefreshTokenModel>(environment.apiUrl + '/refreshtoken', {});
  }

  me() {
    return this.http.get<User>('/me');
  }

  menu() {
    return this.http.get<{ menu: Menu[] }>('/me/menu').pipe(map(res => res.menu));
  }
}

import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Menu } from '@core';
import { environment } from '@env/environment';
import { ILoginModel } from 'app/routes/sessions/login/login.model';
import { map, tap } from 'rxjs/operators';
import { Token, User } from './interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(email: string, password: string) {
    const params = new HttpParams().append('email', email).append('password', password);
    return this.http
      .post<Token>(environment.apiUrl + '/user/authenticate', null, {
        params,
        withCredentials: true,
      })
      .pipe(
        map(res => {
          return {
            ...res,
            refresh_token: this.getCookie('jwt'),
          };
        })
      );
  }
  private getCookie(name: string) {
    const ca: Array<string> = document.cookie.split(';');
    const caLen: number = ca.length;
    const cookieName = `${name}=`;
    let c: string;

    for (let i = 0; i < caLen; i += 1) {
      c = ca[i].replace(/^\s+/g, '');
      if (c.indexOf(cookieName) == 0) {
        return c.substring(cookieName.length, c.length);
      }
    }
    return '';
  }

  refresh(params: Record<string, any>) {
    return this.http.get<Token>(environment.apiUrl + '/refreshtoken');
    //return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.get<any>(environment.apiUrl + '/logout', { withCredentials: true });
  }
}

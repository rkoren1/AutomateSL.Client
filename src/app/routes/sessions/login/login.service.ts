import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@core';
import { environment } from '@env/environment';
import { ILoginModel } from './login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  access_token = '';
  executeOnce = true;
  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    const params = new HttpParams().append('email', email).append('password', password);
    return this.http.post<Token>(environment.apiUrl + '/user/authenticate', null, {
      params,
      withCredentials: true,
    });
  }

  setAccessToken(token: string) {
    this.access_token = token;
  }
  refresh() {
    this.http
      .get<Token>(environment.apiUrl + '/refreshtoken', { withCredentials: true })
      .subscribe(res => {
        this.access_token = res.access_token;
      });
  }

  getAccessToken() {
    if (this.access_token === '' && this.executeOnce) {
      this.executeOnce = false;
      this.refresh();
    }
    return this.access_token;
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
}

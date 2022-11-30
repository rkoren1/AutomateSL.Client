import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { ILoginModel } from './login.model';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  accessToken = '';
  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    const params = new HttpParams().append('email', email).append('password', password);
    return this.http.get<ILoginModel>(environment.apiUrl + '/user/authenticate', {
      params,
      withCredentials: true,
    });
  }

  setAccessToken(token: string) {
    this.accessToken = token;
  }

  getAccessToken() {
    return this.accessToken;
  }
}

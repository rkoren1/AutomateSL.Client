import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Token } from './interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

  login(email: string, password: string) {
    const params = new HttpParams().append('email', email).append('password', password);
    return this.http.post<Token>(environment.apiUrl + '/user/authenticate', null, {
      params,
      withCredentials: true,
    });
  }

  refresh(params: Record<string, any>) {
    return this.http.get<Token>(environment.apiUrl + '/refreshtoken');
    //return this.http.post<Token>('/auth/refresh', params);
  }

  logout() {
    return this.http.get<any>(environment.apiUrl + '/logout', { withCredentials: true });
  }
}

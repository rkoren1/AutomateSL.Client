import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { Token } from './interface';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(protected http: HttpClient) {}

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

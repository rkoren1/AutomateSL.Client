import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token, TokenService } from '@core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  access_token = '';
  executeOnce = true;
  constructor(private http: HttpClient, private tokenService: TokenService) {}

  authenticate(email: string, password: string, rememberMe: boolean) {
    return this.http.post<Token>(
      environment.apiUrl + '/user/authenticate',
      { email, password, rememberMe },
      {
        withCredentials: true,
      }
    );
  }

  refresh() {
    this.http
      .get<Token>(environment.apiUrl + '/refreshtoken', { withCredentials: true })
      .subscribe(res => {
        const token: Token = {
          access_token: res.access_token,
          exp: 15,
          expires_in: 15,
        };
        this.tokenService.set(token);
        this.access_token = res?.access_token;
      });
  }

  logout() {
    return this.http.get<any>(environment.apiUrl + '/logout', { withCredentials: true });
  }
}

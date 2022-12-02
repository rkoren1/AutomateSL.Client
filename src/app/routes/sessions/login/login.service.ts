import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Token } from '@core';
import { environment } from '@env/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  access_token = '';
  executeOnce = true;
  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string, rememberMe: boolean) {
    return this.http.post<Token>(
      environment.apiUrl + '/user/authenticate',
      { email, password, rememberMe },
      {
        withCredentials: true,
      }
    );
  }

  setAccessToken(token: string) {
    this.access_token = token;
  }
  refresh() {
    this.http
      .get<Token>(environment.apiUrl + '/refreshtoken', { withCredentials: true })
      .subscribe(res => {
        this.access_token = res?.access_token;
      });
  }

  getAccessToken() {
    if (this.access_token === '' && this.executeOnce) {
      this.executeOnce = false;
      this.refresh();
    }
    return this.access_token;
  }
}

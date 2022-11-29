import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  authenticate(email: string, password: string) {
    const params = new HttpParams().append('email', email).append('password', password);
    const authenticate$ = this.http.get<any>(environment.apiUrl + '/user/authenticate', {
      params,
      withCredentials: true,
    });
    return lastValueFrom(authenticate$)
      .then((data: any) => data)
      .catch(e => {
        throw e && e.error && e.error.Message;
      });
  }
}

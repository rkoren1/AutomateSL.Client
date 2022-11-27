import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}
  createUser(email: any, password: any) {
    const params = new HttpParams().append('email', email).append('password', password);
    const createUser$ = this.http.post<any>(environment.apiUrl + '/user/createuser', null, {
      params,
    });
    return lastValueFrom(createUser$)
      .then((data: any) => data)
      .catch(e => {
        throw e && e.error && e.error.Message;
      });
  }
}

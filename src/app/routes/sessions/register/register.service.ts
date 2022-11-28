import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  createUser(email: string, password: string) {
    const createUser$ = this.http.post<any>(environment.apiUrl + '/user/createuser', {
      email,
      password,
    });
    return lastValueFrom(createUser$)
      .then((data: any) => data)
      .catch(e => {
        throw e && e.error && e.error.Message;
      });
  }
}

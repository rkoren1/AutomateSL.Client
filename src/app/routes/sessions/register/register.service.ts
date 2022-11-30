import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { IRegister } from './register.model';

@Injectable({
  providedIn: 'root',
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  createUser(email: string, password: string) {
    return this.http.post<IRegister>(environment.apiUrl + '/user/createuser', {
      email,
      password,
    });
  }
}

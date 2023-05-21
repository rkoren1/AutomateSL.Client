import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '@env/environment';
import { GetLDollarBalance } from '@shared/Models/user.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  updateLDollarBalance = new Subject();
  constructor(private http: HttpClient) {}

  getLDollarBalance() {
    return this.http.get<GetLDollarBalance>(environment.apiUrl + '/payment/getldollarbalance');
  }
}

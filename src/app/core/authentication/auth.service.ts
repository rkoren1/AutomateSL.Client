import { Injectable } from '@angular/core';
import { LoginService } from 'app/routes/sessions/login/login.service';
import { BehaviorSubject, merge, of } from 'rxjs';
import { map, share, tap } from 'rxjs/operators';
import { isEmptyObject } from './helpers';
import { User } from './interface';

import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private user$ = new BehaviorSubject<User>({});
  private change$ = merge(this.tokenService.change()).pipe(share());

  constructor(private loginService: LoginService, private tokenService: TokenService) {}

  init() {
    return new Promise<void>(resolve => this.change$.subscribe(() => resolve()));
  }

  change() {
    return this.change$;
  }

  check() {
    return this.tokenService.valid();
  }

  logout() {
    return this.loginService.logout().pipe(
      tap(() => this.tokenService.clear()),
      map(() => !this.check())
    );
  }

  user() {
    return this.user$.pipe(share());
  }

  assignNewUser(name?: string) {
    this.user$.next({ name });
  }
  private assignUser() {
    if (!this.check()) {
      return of({}).pipe(tap(user => this.user$.next(user)));
    }

    if (!isEmptyObject(this.user$.getValue())) {
      return of(this.user$.getValue());
    }

    return null;
  }
}

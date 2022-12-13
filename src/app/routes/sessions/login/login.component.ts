import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService, Token, TokenService } from '@core/authentication';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  isSubmitting = false;

  loginForm = this.fb.nonNullable.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
    rememberMe: [false],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private auth: AuthService,
    private loginService: LoginService,
    private tokenService: TokenService
  ) {}

  get username() {
    return this.loginForm.get('username')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  get rememberMe() {
    return this.loginForm.get('rememberMe')!;
  }

  login() {
    this.isSubmitting = true;
    this.loginService
      .authenticate(this.username.value, this.password.value, this.rememberMe.value)
      .subscribe({
        next: res => {
          if (res.authenticated === true) {
            const token: Token = {
              access_token: res.access_token,
              authenticated: true,
              exp: 10,
              expires_in: 10,
              email: res.email,
            };
            this.tokenService.set(token);
            this.router.navigateByUrl('/dashboard');
            this.isSubmitting = false;
            this.auth.assignNewUser(res.email);
          }
        },
        error: error => {
          console.log(error);
          this.isSubmitting = false;
        },
      });
  }
}

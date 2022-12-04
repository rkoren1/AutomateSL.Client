import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as bcrypt from 'bcryptjs';
import { ToastrService } from 'ngx-toastr';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  registerForm = this.fb.nonNullable.group(
    {
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: [this.matchValidator('password', 'confirmPassword')],
    }
  );

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private toast: ToastrService
  ) {}

  matchValidator(source: string, target: string) {
    return (control: AbstractControl) => {
      const sourceControl = control.get(source)!;
      const targetControl = control.get(target)!;
      if (targetControl.errors && !targetControl.errors.mismatch) {
        return null;
      }
      if (sourceControl.value !== targetControl.value) {
        targetControl.setErrors({ mismatch: true });
        return { mismatch: true };
      } else {
        targetControl.setErrors(null);
        return null;
      }
    };
  }
  registerButtonClick() {
    if (this.registerForm.status === 'VALID') {
      bcrypt.hash(<string>this.registerForm.value.password, 10, (err, hash) => {
        this.registerService
          .createUser(<string>this.registerForm.value.username, hash)
          .subscribe(res => {
            if (!res.success) console.log(res);
            //after succesful navigation show success popup and then redirect to login
            if (res.success === true) {
              this.toast.success(res.message);
              this.router.navigateByUrl('/auth/login');
            }
          });
      });
    }
  }
}

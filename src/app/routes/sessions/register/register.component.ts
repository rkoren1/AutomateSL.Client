import { Component } from '@angular/core';
import { FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { RegisterService } from './register.service';
import * as bcrypt from 'bcryptjs';

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

  constructor(private fb: FormBuilder, private registerService: RegisterService) {}

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
          .createUser(this.registerForm.value.username, this.registerForm.value.password)
          .then(res => console.log(res));
      });
    }
  }
}

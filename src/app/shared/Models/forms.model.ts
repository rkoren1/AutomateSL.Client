import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginLastName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginStartLocation: FormControl<string>;
}

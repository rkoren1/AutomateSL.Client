import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginSpawnLocation: FormControl<string>;
  regionName: FormControl<string>;
  x: FormControl<number>;
  y: FormControl<number>;
  z: FormControl<number>;
}

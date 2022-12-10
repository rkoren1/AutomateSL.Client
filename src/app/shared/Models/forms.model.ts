import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginSpawnLocation: FormControl<string>;
  loginRegion?: FormControl<string>;
}

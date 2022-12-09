import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginSpawnLocation: FormControl<string>;
  loginRegion?: FormControl<string>;
  loginRegionX?: FormControl<number>;
  loginRegionY?: FormControl<number>;
  loginRegionZ?: FormControl<number>;
}

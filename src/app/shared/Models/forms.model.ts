import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginSpawnLocation: FormControl<string>;
  loginRegion?: FormControl<string>;
}

export interface AddBotForm {
  botType: FormControl<string>;
  slUsername: FormControl<string>;
  slPassword: FormControl<string>;
  loginLocation: FormControl<string>;
}

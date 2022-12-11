import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginSpawnLocation: FormControl<string>;
  loginRegion?: FormControl<string>;
}

export interface AddBotForm {
  botType: FormControl<string | null>;
  slUserName: FormControl<string | null>;
  slPassword: FormControl<string | null>;
  loginSpawnLocation: FormControl<string>;
  loginRegion: FormControl<string | null>;
}

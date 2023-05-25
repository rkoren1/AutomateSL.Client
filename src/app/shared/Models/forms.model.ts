import { FormControl } from '@angular/forms';

export interface LinkAccForm {
  loginFirstName: FormControl<string>;
  loginPassword: FormControl<string>;
  loginSpawnLocation: FormControl<string>;
  loginRegion?: FormControl<string>;
}

export interface AddBotForm {
  slUserName: FormControl<string | null>;
  slPassword: FormControl<string | null>;
  loginSpawnLocation: FormControl<string>;
  loginRegion: FormControl<string | null>;
}
export interface AddSharedBotForm {
  sharedBotId: FormControl<number | null>;
}

export interface AddSubscriptionForm {
  packageName: FormControl<number | null>;
  dateUnit: FormControl<string>;
  quantityOfDateUnits: FormControl<number>;
}

export interface DiscSettingsForm {
  discChannelId: FormControl<string>;
  slGroupUuid: FormControl<string>;
  webhookUrl: FormControl<string>;
}

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bot-settings-popup',
  templateUrl: './bot-settings-popup.component.html',
  styleUrls: ['./bot-settings-popup.component.scss'],
})
export class BotSettingsPopupComponent implements OnInit {
  botSettingsForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.initForm();
  }
  validateForm() {}
  private initForm() {
    this.botSettingsForm = new FormGroup({
      acceptinventory: new FormControl(false, {
        nonNullable: true,
      }),
      acceptGroupInvitations: new FormControl(false, {
        nonNullable: true,
      }),
      acceptAnimations: new FormControl(false, {
        nonNullable: true,
      }),
    });
  }
}

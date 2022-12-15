import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-account-settings-popup',
  templateUrl: './account-settings-popup.component.html',
  styleUrls: ['./account-settings-popup.component.scss'],
})
export class AccountSettingsPopupComponent implements OnInit {
  accountForm: FormGroup;

  constructor() {
    this.initForm();
  }

  ngOnInit() {}
  private initForm() {
    this.accountForm = new FormGroup({
      loginFirstName: new FormControl('', {
        nonNullable: true,
      }),
      loginPassword: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
  validateForm() {}
}

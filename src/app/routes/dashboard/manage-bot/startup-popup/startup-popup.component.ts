import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-startup-popup',
  templateUrl: './startup-popup.component.html',
  styleUrls: ['./startup-popup.component.scss'],
})
export class StartupPopupComponent implements OnInit {
  startupForm: FormGroup;
  selectedSpawnLocation = 'last';
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public inputParams: { loginSpawnLocation: string; loginRegion: string }
  ) {}

  ngOnInit() {
    this.initForm();
  }

  validateForm() {
    const formData = this.startupForm.value;
  }

  private initForm() {
    this.startupForm = new FormGroup({
      loginSpawnLocation: new FormControl(this.inputParams.loginSpawnLocation, {
        nonNullable: true,
      }),
      loginRegion: new FormControl(this.inputParams.loginRegion, {
        nonNullable: true,
      }),
      startupObject: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}

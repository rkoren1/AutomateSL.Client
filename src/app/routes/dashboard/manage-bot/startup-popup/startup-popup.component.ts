import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-startup-popup',
  templateUrl: './startup-popup.component.html',
  styleUrls: ['./startup-popup.component.scss'],
})
export class StartupPopupComponent implements OnInit {
  startupForm: FormGroup;
  selectedSpawnLocation = 'last';
  constructor() {}

  ngOnInit() {
    this.initForm();
  }

  validateForm() {}

  private initForm() {
    this.startupForm = new FormGroup({
      loginSpawnLocation: new FormControl('', {
        nonNullable: true,
      }),
      loginRegion: new FormControl('', {
        nonNullable: true,
      }),
      startupObject: new FormControl('', {
        nonNullable: true,
      }),
    });
  }
}

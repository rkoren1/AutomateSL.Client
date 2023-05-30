import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { IBotConfiguration } from '@shared/Models/bot.model';
import { StartupPopupService } from './startup-popup.service';

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
    public inputParams: IBotConfiguration,
    private startupPopupService: StartupPopupService,
    private dialogRef: MatDialogRef<StartupPopupComponent>
  ) {}

  ngOnInit() {
    this.initForm();
  }

  validateForm() {
    const formData = this.startupForm.value;
    this.startupPopupService
      .setBotConfiguration({
        botId: this.inputParams.botId,
        loginRegion: formData.loginRegion,
        loginSpawnLocation: formData.loginSpawnLocation,
      })
      .subscribe(res => {
        this.dialogRef.close();
      });
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

import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkAccData } from '@shared/Models/bot.model';
import { LinkAccForm } from '@shared/Models/forms.model';
import { LinkAccToBotPopupService } from './link-acc-to-bot-popup.service';

@Component({
  selector: 'app-link-acc-to-bot-popup',
  templateUrl: './link-acc-to-bot-popup.component.html',
  styleUrls: ['./link-acc-to-bot-popup.component.scss'],
})
export class LinkAccToBotPopupComponent implements OnInit {
  linkAccForm: FormGroup<LinkAccForm>;
  constructor(
    private dialogRef: MatDialogRef<LinkAccToBotPopupComponent>,
    private linkAccToBotPopupService: LinkAccToBotPopupService,
    @Inject(MAT_DIALOG_DATA) private data: { botId: number; botConfiguration: LinkAccData }
  ) {}

  ngOnInit() {
    this.initForm();
  }
  private initForm() {
    this.linkAccForm = new FormGroup<LinkAccForm>({
      loginFirstName: new FormControl(this.data.botConfiguration.loginFirstName, {
        nonNullable: true,
      }),
      loginLastName: new FormControl(this.data.botConfiguration.loginLastName, {
        nonNullable: true,
      }),
      loginPassword: new FormControl(this.data.botConfiguration.loginPassword, {
        nonNullable: true,
      }),
      loginStartLocation: new FormControl(this.data.botConfiguration.loginStartLocation, {
        nonNullable: true,
      }),
    });
  }

  validateForm() {
    this.linkAccForm.markAllAsTouched();
    if (this.linkAccForm.valid) {
      this.linkAccToBotPopupService
        .linkAcctoBot(this.data.botId, <LinkAccData>this.linkAccForm.value)
        .subscribe(res => {
          this.dialogRef.close();
        });
    }
  }
}

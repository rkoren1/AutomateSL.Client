import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LinkAccData } from '@shared/Models/bot.model';
import { LinkAccToBotPopupService } from './link-acc-to-bot-popup.service';

@Component({
  selector: 'app-link-acc-to-bot-popup',
  templateUrl: './link-acc-to-bot-popup.component.html',
  styleUrls: ['./link-acc-to-bot-popup.component.scss'],
})
export class LinkAccToBotPopupComponent implements OnInit {
  linkAccForm: FormGroup; //<LinkAccForm> why it doesnt work???
  constructor(
    private dialogRef: MatDialogRef<LinkAccToBotPopupComponent>,
    private linkAccToBotPopupService: LinkAccToBotPopupService,
    @Inject(MAT_DIALOG_DATA) private data: { botId: number; botConfiguration: LinkAccData }
  ) {}

  ngOnInit() {
    this.linkAccForm = new FormGroup({
      loginFirstName: new FormControl(this.data.botConfiguration.loginFirstName),
      loginLastName: new FormControl(this.data.botConfiguration.loginLastName),
      loginPassword: new FormControl(this.data.botConfiguration.loginPassword),
      loginStartLocation: new FormControl(this.data.botConfiguration.loginStartLocation),
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

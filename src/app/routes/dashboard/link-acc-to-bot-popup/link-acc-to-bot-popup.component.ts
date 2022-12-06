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
    @Inject(MAT_DIALOG_DATA) private botId: number
  ) {}

  ngOnInit() {
    this.linkAccForm = new FormGroup<LinkAccForm>({
      loginFirstName: new FormControl(),
      loginLastName: new FormControl(),
      loginPassword: new FormControl(),
      loginStartLocation: new FormControl(),
    });
  }
  validateForm() {
    this.linkAccForm.markAllAsTouched();
    if (this.linkAccForm.valid) {
      this.linkAccToBotPopupService
        .linkAcctoBot(this.botId, <LinkAccData>this.linkAccForm.value)
        .subscribe(res => {
          console.log(res);
        });
      this.dialogRef.close({ test: 'data' });
    }
  }
}

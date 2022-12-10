import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ILinkAccData } from '@shared/Models/bot.model';
import { LinkAccForm } from '@shared/Models/forms.model';
import { LinkAccToBotPopupService } from './link-acc-to-bot-popup.service';

@Component({
  selector: 'app-link-acc-to-bot-popup',
  templateUrl: './link-acc-to-bot-popup.component.html',
  styleUrls: ['./link-acc-to-bot-popup.component.scss'],
})
export class LinkAccToBotPopupComponent implements OnInit {
  linkAccForm: FormGroup<LinkAccForm>;
  selectedSpawnLocation: string;
  constructor(
    private dialogRef: MatDialogRef<LinkAccToBotPopupComponent>,
    private linkAccToBotPopupService: LinkAccToBotPopupService,
    @Inject(MAT_DIALOG_DATA) private data: { botId: number; botConfiguration: ILinkAccData }
  ) {}

  ngOnInit() {
    this.selectedSpawnLocation = this.data.botConfiguration.loginSpawnLocation;
    this.initForm();
  }
  private initForm() {
    this.linkAccForm = new FormGroup<LinkAccForm>({
      loginFirstName: new FormControl(this.data.botConfiguration.loginFirstName, {
        nonNullable: true,
      }),
      loginPassword: new FormControl(this.data.botConfiguration.loginPassword, {
        nonNullable: true,
      }),
      loginSpawnLocation: new FormControl(this.data.botConfiguration.loginSpawnLocation, {
        nonNullable: true,
      }),
      loginRegion: new FormControl(this.data.botConfiguration.loginRegion, {
        nonNullable: true,
      }),
    });
  }

  validateForm() {
    this.linkAccForm.markAllAsTouched();
    if (this.linkAccForm.valid) {
      this.linkAccToBotPopupService
        .linkAcctoBot(this.data.botId, <ILinkAccData>this.linkAccForm.value)
        .subscribe(res => {
          this.dialogRef.close();
        });
    }
  }
}

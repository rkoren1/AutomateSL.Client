import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
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
    private linkAccToBotPopupService: LinkAccToBotPopupService
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
      this.dialogRef.close({ test: 'data' });
    }
  }
}

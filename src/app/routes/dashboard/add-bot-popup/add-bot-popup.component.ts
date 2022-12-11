import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { IBotTypes } from '@shared/Models/bot.model';
import { AddBotForm } from '@shared/Models/forms.model';

@Component({
  selector: 'app-add-bot-popup',
  templateUrl: './add-bot-popup.component.html',
  styleUrls: ['./add-bot-popup.component.scss'],
})
export class AddBotPopupComponent implements OnInit {
  addBotForm: FormGroup<AddBotForm>;
  selectedSpawnLocation: string;
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: IBotTypes[],
    private dialogRef: MatDialogRef<AddBotPopupComponent>
  ) {}
  ngOnInit() {
    this.addBotForm = new FormGroup<AddBotForm>({
      botType: new FormControl(null, {
        nonNullable: true,
      }),
      slUserName: new FormControl(null, {
        nonNullable: true,
      }),
      slPassword: new FormControl(null, {
        nonNullable: true,
      }),
      loginSpawnLocation: new FormControl('last', {
        nonNullable: true,
      }),
      loginRegion: new FormControl(null, {
        nonNullable: true,
      }),
    });
  }

  validateForm() {
    this.addBotForm.markAllAsTouched();

    if (this.addBotForm.valid) {
      this.dialogRef.close(this.addBotForm.value);
    }
  }
}

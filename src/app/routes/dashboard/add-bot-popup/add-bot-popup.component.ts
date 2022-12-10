import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddBotForm } from '@shared/Models/forms.model';

@Component({
  selector: 'app-add-bot-popup',
  templateUrl: './add-bot-popup.component.html',
  styleUrls: ['./add-bot-popup.component.scss'],
})
export class AddBotPopupComponent implements OnInit {
  botNameValue: string;
  addBotForm: FormGroup<AddBotForm>;
  constructor() {}
  ngOnInit() {
    this.addBotForm = new FormGroup<AddBotForm>({
      botType: new FormControl(),
      slUsername: new FormControl(),
      slPassword: new FormControl(),
      loginLocation: new FormControl(),
    });
  }
}

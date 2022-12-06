import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LinkAccForm } from '@shared/Models/forms.model';

@Component({
  selector: 'app-link-acc-to-bot-popup',
  templateUrl: './link-acc-to-bot-popup.component.html',
  styleUrls: ['./link-acc-to-bot-popup.component.scss'],
})
export class LinkAccToBotPopupComponent implements OnInit {
  linkAccForm: FormGroup<LinkAccForm>;
  constructor() {}

  ngOnInit() {
    this.linkAccForm = new FormGroup<LinkAccForm>({
      loginFirstName: new FormControl(),
      loginLastName: new FormControl(),
      loginPassword: new FormControl(),
      loginStartLocation: new FormControl(),
    });
  }
}
